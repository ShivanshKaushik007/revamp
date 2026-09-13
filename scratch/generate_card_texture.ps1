Add-Type -AssemblyName System.Drawing

$W = 1678
$H = 1677

$bmp = [System.Drawing.Bitmap]::new($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Helper for rounded rectangles
function Add-RoundedRect($path, [float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
}

# 1. Base Dark Canvas
$baseBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 8, 10, 16))
$g.FillRectangle($baseBrush, 0, 0, $W, $H)

# Load user logo
$logoImg = $null
if (Test-Path "public/logo.png") {
    $logoImg = [System.Drawing.Bitmap]::FromFile("public/logo.png")
}

# Load QR code
$qrImg = $null
if (Test-Path "scratch/qr.png") {
    $qrImg = [System.Drawing.Bitmap]::FromFile("scratch/qr.png")
}

# Palette: Sleek Titanium & Ice-Blue
$colCardBg1    = [System.Drawing.Color]::FromArgb(255, 14, 17, 28)
$colCardBg2    = [System.Drawing.Color]::FromArgb(255, 9, 11, 18)
$colBorder     = [System.Drawing.Color]::FromArgb(220, 56, 189, 248) # Crisp Ice-blue (#38BDF8)
$colSubtle     = [System.Drawing.Color]::FromArgb(40, 255, 255, 255)
$colAccent     = [System.Drawing.Color]::FromArgb(255, 56, 189, 248) # #38BDF8
$colGreen      = [System.Drawing.Color]::FromArgb(255, 52, 211, 153) # #34D399
$colWhite      = [System.Drawing.Color]::FromArgb(255, 255, 255, 255)
$colTitanium   = [System.Drawing.Color]::FromArgb(255, 226, 232, 240) # Slate-200
$colMuted      = [System.Drawing.Color]::FromArgb(255, 148, 163, 184) # Slate-400
$colSubMuted   = [System.Drawing.Color]::FromArgb(255, 100, 116, 139) # Slate-500
$colChipBg     = [System.Drawing.Color]::FromArgb(255, 18, 23, 38)

$brushCardBg1  = [System.Drawing.SolidBrush]::new($colCardBg1)
$brushAccent   = [System.Drawing.SolidBrush]::new($colAccent)
$brushGreen    = [System.Drawing.SolidBrush]::new($colGreen)
$brushWhite    = [System.Drawing.SolidBrush]::new($colWhite)
$brushTitanium = [System.Drawing.SolidBrush]::new($colTitanium)
$brushMuted    = [System.Drawing.SolidBrush]::new($colMuted)
$brushSubMuted = [System.Drawing.SolidBrush]::new($colSubMuted)
$brushChipBg   = [System.Drawing.SolidBrush]::new($colChipBg)

$penBorder     = [System.Drawing.Pen]::new($colBorder, [float]3.0)
$penSubtle     = [System.Drawing.Pen]::new($colSubtle, [float]2.0)
$penAccent     = [System.Drawing.Pen]::new($colAccent, [float]2.5)

# High-impact fonts with perfect letter-spacing proportion
$fontHeaderTag  = [System.Drawing.Font]::new("Segoe UI", [float]21.0, [System.Drawing.FontStyle]::Bold)
$fontNameLarge  = [System.Drawing.Font]::new("Segoe UI", [float]50.0, [System.Drawing.FontStyle]::Bold)
$fontTitleLarge = [System.Drawing.Font]::new("Segoe UI", [float]31.0, [System.Drawing.FontStyle]::Bold)
$fontSubLarge   = [System.Drawing.Font]::new("Segoe UI", [float]23.0, [System.Drawing.FontStyle]::Bold)
$fontPill       = [System.Drawing.Font]::new("Consolas", [float]20.0, [System.Drawing.FontStyle]::Bold)
$fontSpecLine   = [System.Drawing.Font]::new("Consolas", [float]18.0, [System.Drawing.FontStyle]::Bold)
$fontMonoLarge  = [System.Drawing.Font]::new("Consolas", [float]24.0, [System.Drawing.FontStyle]::Bold)
$fontMonoMed    = [System.Drawing.Font]::new("Consolas", [float]21.0, [System.Drawing.FontStyle]::Bold)
$fontBarcode    = [System.Drawing.Font]::new("Consolas", [float]21.0, [System.Drawing.FontStyle]::Bold)

$centerFmt = [System.Drawing.StringFormat]::new()
$centerFmt.Alignment = [System.Drawing.StringAlignment]::Center
$centerFmt.LineAlignment = [System.Drawing.StringAlignment]::Center

$leftFmt = [System.Drawing.StringFormat]::new()
$leftFmt.Alignment = [System.Drawing.StringAlignment]::Near
$leftFmt.LineAlignment = [System.Drawing.StringAlignment]::Center

$rightFmt = [System.Drawing.StringFormat]::new()
$rightFmt.Alignment = [System.Drawing.StringAlignment]::Far
$rightFmt.LineAlignment = [System.Drawing.StringAlignment]::Center

# ==============================================================================
# 2. FRONT FACE (Left side: X = 0..839, Y = 0..1269, Center = 419)
# ==============================================================================
$fx = 28; $fy = 18; $fw = 783; $fh = 1230; $fr = 44
$frontPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $frontPath $fx $fy $fw $fh $fr

# Card Gradient Background
$frontGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new($fx, $fy),
    [System.Drawing.PointF]::new($fx, ($fy + $fh)),
    $colCardBg1,
    $colCardBg2
)
$g.FillPath($frontGrad, $frontPath)
$g.DrawPath($penBorder, $frontPath)

# Inner hairline outline
$innerFront = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $innerFront ($fx + 10) ($fy + 10) ($fw - 20) ($fh - 20) ($fr - 6)
$g.DrawPath($penSubtle, $innerFront)

# Top Bar (Y = 75)
$g.DrawString("DEV PASS // 2026", $fontHeaderTag, $brushAccent, [float]($fx + 45), [float]($fy + 75), $leftFmt)

# Status (Green dot + ACTIVE)
$g.FillEllipse($brushGreen, [float]($fx + $fw - 170), [float]($fy + 67), [float]16, [float]16)
$g.DrawString("ACTIVE", $fontHeaderTag, $brushWhite, [float]($fx + $fw - 45), [float]($fy + 75), $rightFmt)

$g.DrawLine($penSubtle, [float]($fx + 35), [float]($fy + 125), [float]($fx + $fw - 35), [float]($fy + 125))

# Centerpiece Logo Emblem (Y = 210..430, Size 220x220)
$logoBoxSize = 220
$logoBoxX = 419 - ($logoBoxSize / 2)
$logoBoxY = $fy + 200
$logoPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $logoPath $logoBoxX $logoBoxY $logoBoxSize $logoBoxSize 46
$g.FillPath($brushChipBg, $logoPath)
$g.DrawPath($penBorder, $logoPath)

if ($logoImg -ne $null) {
    $logoPad = 26
    $g.DrawImage($logoImg, [float]($logoBoxX + $logoPad), [float]($logoBoxY + $logoPad), [float]($logoBoxSize - 2 * $logoPad), [float]($logoBoxSize - 2 * $logoPad))
}

# BIG BOLD PRIMARY NAME (50pt Segoe UI Bold = ~580px wide inside 783px card -> 100px margins on each side!)
$nameY = $logoBoxY + $logoBoxSize + 85
$g.DrawString("SHIVANSH KAUSHIK", $fontNameLarge, $brushWhite, [float]419, [float]$nameY, $centerFmt)

# TITLE
$titleY = $nameY + 68
$g.DrawString("Full-Stack Software Engineer", $fontTitleLarge, $brushAccent, [float]419, [float]$titleY, $centerFmt)

# AFFILIATION / LEADERSHIP
$subY = $titleY + 50
$g.DrawString("Technical Head • E-Cell IET Lucknow", $fontSubLarge, $brushTitanium, [float]419, [float]$subY, $centerFmt)

# ONE SLEEK SPECIALTY PILL (Generous breathing room)
$pillW = 520; $pillH = 58
$pillX = 419 - ($pillW / 2)
$pillY = $subY + 65
$pillPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $pillPath $pillX $pillY $pillW $pillH 29
$g.FillPath($brushChipBg, $pillPath)
$g.DrawPath($penBorder, $pillPath)
$g.DrawString("DISTRIBUTED SYSTEMS // REAL-TIME", $fontPill, $brushAccent, [float]419, [float]($pillY + ($pillH / 2)), $centerFmt)

# Minimalist technical stack baseline
$specY = $pillY + 80
$g.DrawString("NEXT.JS // TYPESCRIPT // WEBSOCKETS // WEBRTC", $fontSpecLine, $brushSubMuted, [float]419, [float]$specY, $centerFmt)

# Clean Minimalist Footer Bar
$secY = $fy + $fh - 65
$g.DrawLine($penSubtle, [float]($fx + 35), [float]($secY - 35), [float]($fx + $fw - 35), [float]($secY - 35))
$g.DrawString("ID: SK-2026-IET-007", $fontMonoLarge, $brushAccent, [float]($fx + 45), [float]$secY, $leftFmt)
$g.DrawString("LUCKNOW, IN // IST", $fontMonoMed, $brushMuted, [float]($fx + $fw - 45), [float]$secY, $rightFmt)


# ==============================================================================
# 3. BACK FACE (Right side: X = 839..1678, Y = 0..1269, Center = 1258)
# ==============================================================================
$bx = 867; $by = 18; $bw = 783; $bh = 1230; $br = 44
$backPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $backPath $bx $by $bw $bh $br

# Card Gradient Background
$backGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new($bx, $by),
    [System.Drawing.PointF]::new($bx, ($by + $bh)),
    $colCardBg1,
    $colCardBg2
)
$g.FillPath($backGrad, $backPath)
$g.DrawPath($penBorder, $backPath)

# Inner hairline outline
$innerBack = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $innerBack ($bx + 10) ($by + 10) ($bw - 20) ($bh - 20) ($br - 6)
$g.DrawPath($penSubtle, $innerBack)

# Top Bar
$g.DrawString("VERIFIED CREDENTIAL", $fontHeaderTag, $brushAccent, [float]($bx + 45), [float]($by + 75), $leftFmt)
$g.DrawString("ROOT ACCESS", $fontHeaderTag, $brushWhite, [float]($bx + $bw - 45), [float]($by + 75), $rightFmt)
$g.DrawLine($penSubtle, [float]($bx + 35), [float]($by + 125), [float]($bx + $bw - 35), [float]($by + 125))

# BIG HIGH-RES QR CODE CONTAINER (Size 450 x 450)
$qrBoxSize = 450
$qrBoxX = 1258 - ($qrBoxSize / 2)
$qrBoxY = $by + 200
$qrPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $qrPath $qrBoxX $qrBoxY $qrBoxSize $qrBoxSize 40
$qrBgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$g.FillPath($qrBgBrush, $qrPath)
$g.DrawPath($penBorder, $qrPath)

if ($qrImg -ne $null) {
    $qrPad = 26
    $g.DrawImage($qrImg, [float]($qrBoxX + $qrPad), [float]($qrBoxY + $qrPad), [float]($qrBoxSize - 2 * $qrPad), [float]($qrBoxSize - 2 * $qrPad))
}

# QR Caption
$qrCapY = $qrBoxY + $qrBoxSize + 55
$g.DrawString("GITHUB // REPOSITORIES", $fontTitleLarge, $brushWhite, [float]1258, [float]$qrCapY, $centerFmt)

$qrSubY = $qrCapY + 50
$g.DrawString("github.com/ShivanshKaushik007", $fontMonoLarge, $brushAccent, [float]1258, [float]$qrSubY, $centerFmt)

# Clean, Uncluttered Contact Chip
$cChipW = 580; $cChipH = 64
$cChipX = 1258 - ($cChipW / 2)
$cChipY = $qrSubY + 70
$cChipPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $cChipPath $cChipX $cChipY $cChipW $cChipH 32
$g.FillPath($brushChipBg, $cChipPath)
$g.DrawPath($penBorder, $cChipPath)
$g.DrawString("shivanshkaushik1237@gmail.com", $fontMonoLarge, $brushWhite, [float]1258, [float]($cChipY + ($cChipH / 2)), $centerFmt)

# Footer Barcode (Centered cleanly)
$bSecY = $by + $bh - 65
$g.DrawLine($penSubtle, [float]($bx + 35), [float]($bSecY - 35), [float]($bx + $bw - 35), [float]($bSecY - 35))
$g.DrawString("||| || |||| | ||| |||| | || |||||| | |||", $fontBarcode, $brushMuted, [float]($bx + 45), [float]$bSecY, $leftFmt)
$g.DrawString("AUTH: 0x98F4..A2B7", $fontMonoMed, $brushAccent, [float]($bx + $bw - 45), [float]$bSecY, $rightFmt)

# Save
$bmp.Save("scratch/new_texture.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Cleanup
if ($logoImg -ne $null) { $logoImg.Dispose() }
if ($qrImg -ne $null) { $qrImg.Dispose() }
$g.Dispose()
$bmp.Dispose()

Write-Output "Minimalist uncluttered texture generated successfully!"
