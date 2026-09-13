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

# 1. Base Dark Titanium Canvas
$baseBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 9, 10, 16))
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

# Color System (Titanium & Ice-Blue Palette)
$colCardBg1    = [System.Drawing.Color]::FromArgb(255, 14, 16, 26)
$colCardBg2    = [System.Drawing.Color]::FromArgb(255, 9, 11, 18)
$colBorder     = [System.Drawing.Color]::FromArgb(150, 56, 189, 248) # Ice-blue 60%
$colSubtle     = [System.Drawing.Color]::FromArgb(35, 255, 255, 255)
$colAccent     = [System.Drawing.Color]::FromArgb(255, 56, 189, 248) # Ice-blue
$colAccentGlow = [System.Drawing.Color]::FromArgb(255, 125, 211, 252) # Sky-300
$colGreen      = [System.Drawing.Color]::FromArgb(255, 52, 211, 153) # Emerald-400
$colWhite      = [System.Drawing.Color]::FromArgb(255, 255, 255, 255)
$colTitanium   = [System.Drawing.Color]::FromArgb(255, 226, 232, 240) # Slate-200
$colMuted      = [System.Drawing.Color]::FromArgb(255, 148, 163, 184) # Slate-400
$colChipBg     = [System.Drawing.Color]::FromArgb(255, 18, 22, 34)

$brushCardBg1  = [System.Drawing.SolidBrush]::new($colCardBg1)
$brushAccent   = [System.Drawing.SolidBrush]::new($colAccent)
$brushGreen    = [System.Drawing.SolidBrush]::new($colGreen)
$brushWhite    = [System.Drawing.SolidBrush]::new($colWhite)
$brushTitanium = [System.Drawing.SolidBrush]::new($colTitanium)
$brushMuted    = [System.Drawing.SolidBrush]::new($colMuted)
$brushChipBg   = [System.Drawing.SolidBrush]::new($colChipBg)

$penBorder     = [System.Drawing.Pen]::new($colBorder, [float]2.5)
$penSubtle     = [System.Drawing.Pen]::new($colSubtle, [float]1.5)
$penAccent     = [System.Drawing.Pen]::new($colAccent, [float]2.0)

# Fonts
$fontTag       = [System.Drawing.Font]::new("Consolas", [float]14.0, [System.Drawing.FontStyle]::Bold)
$fontName      = [System.Drawing.Font]::new("Segoe UI", [float]38.0, [System.Drawing.FontStyle]::Bold)
$fontTitle     = [System.Drawing.Font]::new("Segoe UI", [float]21.0, [System.Drawing.FontStyle]::Bold)
$fontSub       = [System.Drawing.Font]::new("Segoe UI", [float]16.0, [System.Drawing.FontStyle]::Regular)
$fontSubBold   = [System.Drawing.Font]::new("Segoe UI", [float]16.0, [System.Drawing.FontStyle]::Bold)
$fontMono      = [System.Drawing.Font]::new("Consolas", [float]14.0, [System.Drawing.FontStyle]::Regular)
$fontMonoSmall = [System.Drawing.Font]::new("Consolas", [float]12.0, [System.Drawing.FontStyle]::Regular)
$fontMonoBold  = [System.Drawing.Font]::new("Consolas", [float]14.0, [System.Drawing.FontStyle]::Bold)

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
$fx = 30; $fy = 20; $fw = 779; $fh = 1225; $fr = 44
$frontPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $frontPath $fx $fy $fw $fh $fr

# Subtle Gradient Background
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

# Ambient Radial Light
$glowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(28, 56, 189, 248))
$g.FillEllipse($glowBrush, [float]($fx + 120), [float]($fy + 70), [float]($fw - 240), [float]300)

# Top Bar (Y = 60..90)
$g.DrawString("DEV CREDENTIAL // 2026", $fontTag, $brushAccent, [float]($fx + 35), [float]($fy + 62), $leftFmt)

# Status Pill (Green dot + ACTIVE)
$g.FillEllipse($brushGreen, [float]($fx + $fw - 120), [float]($fy + 57), [float]11, [float]11)
$g.DrawString("ACTIVE", $fontTag, $brushWhite, [float]($fx + $fw - 35), [float]($fy + 62), $rightFmt)

$g.DrawLine($penSubtle, [float]($fx + 30), [float]($fy + 92), [float]($fx + $fw - 30), [float]($fy + 92))

# Logo Emblem (Y = 125..295)
$logoBoxSize = 168
$logoBoxX = 419 - ($logoBoxSize / 2)
$logoBoxY = $fy + 125
$logoPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $logoPath $logoBoxX $logoBoxY $logoBoxSize $logoBoxSize 36
$g.FillPath($brushChipBg, $logoPath)
$g.DrawPath($penBorder, $logoPath)

if ($logoImg -ne $null) {
    $logoPad = 18
    $g.DrawImage($logoImg, [float]($logoBoxX + $logoPad), [float]($logoBoxY + $logoPad), [float]($logoBoxSize - 2 * $logoPad), [float]($logoBoxSize - 2 * $logoPad))
}

# Verified Tag Pill
$pillW = 210; $pillH = 34
$pillX = 419 - ($pillW / 2); $pillY = $logoBoxY + $logoBoxSize + 22
$pillPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $pillPath $pillX $pillY $pillW $pillH 17
$pillBg = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 15, 23, 42))
$g.FillPath($pillBg, $pillPath)
$g.DrawPath($penBorder, $pillPath)
$g.DrawString("VERIFIED ENGINEER", $fontMonoSmall, $brushAccent, [float]419, [float]($pillY + ($pillH / 2)), $centerFmt)

# Name & Title
$nameY = $pillY + 75
$g.DrawString("SHIVANSH KAUSHIK", $fontName, $brushWhite, [float]419, [float]$nameY, $centerFmt)

$titleY = $nameY + 54
$g.DrawString("Full-Stack Software Engineer", $fontTitle, $brushAccent, [float]419, [float]$titleY, $centerFmt)

$subY = $titleY + 40
$g.DrawString("Technical Head @ E-Cell IET Lucknow", $fontSubBold, $brushTitanium, [float]419, [float]$subY, $centerFmt)

$sub2Y = $subY + 32
$g.DrawString("B.Tech Computer Science & Eng. // CSE '27", $fontSub, $brushMuted, [float]419, [float]$sub2Y, $centerFmt)

# Bento Specs Container
$bentoX = $fx + 35; $bentoY = $sub2Y + 45; $bentoW = $fw - 70; $bentoH = 215
$bentoPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $bentoPath $bentoX $bentoY $bentoW $bentoH 20
$g.FillPath($brushChipBg, $bentoPath)
$g.DrawPath($penSubtle, $bentoPath)

# Bento Rows
$r1Y = $bentoY + 36
$g.DrawString("CORE FOCUS", $fontMonoSmall, $brushMuted, [float]($bentoX + 24), [float]$r1Y, $leftFmt)
$g.DrawString("Distributed Systems // Real-Time", $fontMonoBold, $brushWhite, [float]($bentoX + $bentoW - 24), [float]$r1Y, $rightFmt)

$g.DrawLine($penSubtle, [float]($bentoX + 20), [float]($bentoY + 72), [float]($bentoX + $bentoW - 20), [float]($bentoY + 72))

$r2Y = $bentoY + 108
$g.DrawString("REAL-TIME", $fontMonoSmall, $brushMuted, [float]($bentoX + 24), [float]$r2Y, $leftFmt)
$g.DrawString("WebSockets // WebRTC // Redis", $fontMonoBold, $brushAccent, [float]($bentoX + $bentoW - 24), [float]$r2Y, $rightFmt)

$g.DrawLine($penSubtle, [float]($bentoX + 20), [float]($bentoY + 144), [float]($bentoX + $bentoW - 20), [float]($bentoY + 144))

$r3Y = $bentoY + 180
$g.DrawString("FULL-STACK", $fontMonoSmall, $brushMuted, [float]($bentoX + 24), [float]$r3Y, $leftFmt)
$g.DrawString("Next.js // TypeScript // Postgres", $fontMonoBold, $brushWhite, [float]($bentoX + $bentoW - 24), [float]$r3Y, $rightFmt)

# Footer
$secY = $fy + $fh - 48
$g.DrawString("ID: SK-2026-IET-007", $fontMono, $brushAccent, [float]($fx + 35), [float]$secY, $leftFmt)
$g.DrawString("LOCATION: LUCKNOW, IN", $fontMonoSmall, $brushMuted, [float]($fx + $fw - 35), [float]$secY, $rightFmt)


# ==============================================================================
# 3. BACK FACE (Right side: X = 839..1678, Y = 0..1269, Center = 1258)
# ==============================================================================
$bx = 869; $by = 20; $bw = 779; $bh = 1225; $br = 44
$backPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $backPath $bx $by $bw $bh $br

# Gradient Background
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

# Top Header
$g.DrawString("VERIFIED CREDENTIAL", $fontTag, $brushAccent, [float]($bx + 35), [float]($by + 62), $leftFmt)
$g.DrawString("LEVEL 5 ACCESS", $fontTag, $brushWhite, [float]($bx + $bw - 35), [float]($by + 62), $rightFmt)
$g.DrawLine($penSubtle, [float]($bx + 30), [float]($by + 92), [float]($bx + $bw - 30), [float]($by + 92))

# QR Code Container
$qrBoxSize = 380
$qrBoxX = 1258 - ($qrBoxSize / 2)
$qrBoxY = $by + 135
$qrPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $qrPath $qrBoxX $qrBoxY $qrBoxSize $qrBoxSize 30
$qrBgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$g.FillPath($qrBgBrush, $qrPath)
$g.DrawPath($penBorder, $qrPath)

if ($qrImg -ne $null) {
    $qrPad = 25
    $g.DrawImage($qrImg, [float]($qrBoxX + $qrPad), [float]($qrBoxY + $qrPad), [float]($qrBoxSize - 2 * $qrPad), [float]($qrBoxSize - 2 * $qrPad))
}

# QR Caption
$qrCapY = $qrBoxY + $qrBoxSize + 32
$g.DrawString("SCAN TO CONNECT // PORTFOLIO & REPOS", $fontMonoBold, $brushWhite, [float]1258, [float]$qrCapY, $centerFmt)
$g.DrawString("github.com/ShivanshKaushik007", $fontMono, $brushAccent, [float]1258, [float]($qrCapY + 30), $centerFmt)

# Contact Bento
$cBentoX = $bx + 35; $cBentoY = $qrCapY + 75; $cBentoW = $bw - 70; $cBentoH = 260
$cBentoPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $cBentoPath $cBentoX $cBentoY $cBentoW $cBentoH 20
$g.FillPath($brushChipBg, $cBentoPath)
$g.DrawPath($penSubtle, $cBentoPath)

$c1Y = $cBentoY + 35
$g.DrawString("EMAIL", $fontMonoSmall, $brushMuted, [float]($cBentoX + 24), [float]$c1Y, $leftFmt)
$g.DrawString("shivanshkaushik1237@gmail.com", $fontMonoBold, $brushWhite, [float]($cBentoX + $cBentoW - 24), [float]$c1Y, $rightFmt)

$g.DrawLine($penSubtle, [float]($cBentoX + 20), [float]($cBentoY + 70), [float]($cBentoX + $cBentoW - 20), [float]($cBentoY + 70))

$c2Y = $cBentoY + 105
$g.DrawString("LINKEDIN", $fontMonoSmall, $brushMuted, [float]($cBentoX + 24), [float]$c2Y, $leftFmt)
$g.DrawString("in/shivansh-kaushik-b3165827a", $fontMonoBold, $brushAccent, [float]($cBentoX + $cBentoW - 24), [float]$c2Y, $rightFmt)

$g.DrawLine($penSubtle, [float]($cBentoX + 20), [float]($cBentoY + 140), [float]($cBentoX + $cBentoW - 20), [float]($cBentoY + 140))

$c3Y = $cBentoY + 175
$g.DrawString("LEETCODE", $fontMonoSmall, $brushMuted, [float]($cBentoX + 24), [float]$c3Y, $leftFmt)
$g.DrawString("leetcode.com/u/Shivansh_Kaushik", $fontMonoBold, $brushWhite, [float]($cBentoX + $cBentoW - 24), [float]$c3Y, $rightFmt)

$g.DrawLine($penSubtle, [float]($cBentoX + 20), [float]($cBentoY + 210), [float]($cBentoX + $cBentoW - 20), [float]($cBentoY + 210))

$c4Y = $cBentoY + 235
$g.DrawString("ORG", $fontMonoSmall, $brushMuted, [float]($cBentoX + 24), [float]$c4Y, $leftFmt)
$g.DrawString("E-Cell IET Lucknow // Tech Head", $fontMonoBold, $brushTitanium, [float]($cBentoX + $cBentoW - 24), [float]$c4Y, $rightFmt)

# Footer Barcode
$bSecY = $by + $bh - 48
$g.DrawString("||| || |||| | ||| |||| | || |||||| | ||| || ||||", $fontMonoSmall, $brushMuted, [float]($bx + 35), [float]$bSecY, $leftFmt)
$g.DrawString("AUTH-SIG: 0x98F4..A2B7", $fontMonoSmall, $brushAccent, [float]($bx + $bw - 35), [float]$bSecY, $rightFmt)

# Save
$bmp.Save("scratch/new_texture.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Cleanup
if ($logoImg -ne $null) { $logoImg.Dispose() }
if ($qrImg -ne $null) { $qrImg.Dispose() }
$g.Dispose()
$bmp.Dispose()

Write-Output "Polished new_texture.png generated successfully!"
