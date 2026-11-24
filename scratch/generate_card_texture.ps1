Add-Type -AssemblyName System.Drawing

$W = 1678
$H = 1677

$bmp = [System.Drawing.Bitmap]::new($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

function Add-RoundedRect($path, [float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
}

# Base Warm Obsidian Canvas
$baseBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 12, 12, 14))
$g.FillRectangle($baseBrush, 0, 0, $W, $H)

$logoImg = $null
if (Test-Path "public/logo.png") {
    $logoImg = [System.Drawing.Bitmap]::FromFile("public/logo.png")
}

$qrImg = $null
if (Test-Path "scratch/qr.png") {
    $qrImg = [System.Drawing.Bitmap]::FromFile("scratch/qr.png")
}

# Palette: Warm Obsidian, Paper Bone, Signal Amber (#F27D42)
$colCardBg1  = [System.Drawing.Color]::FromArgb(255, 22, 22, 26)
$colCardBg2  = [System.Drawing.Color]::FromArgb(255, 13, 13, 16)
$colBorder   = [System.Drawing.Color]::FromArgb(220, 242, 125, 66)  # #F27D42
$colSubtle   = [System.Drawing.Color]::FromArgb(38, 242, 239, 233)
$colAccent   = [System.Drawing.Color]::FromArgb(255, 242, 125, 66)  # #F27D42
$colSage     = [System.Drawing.Color]::FromArgb(255, 91, 185, 140)  # #5BB98C
$colBone     = [System.Drawing.Color]::FromArgb(255, 242, 239, 233) # #F2EFE9
$colStone    = [System.Drawing.Color]::FromArgb(255, 184, 179, 169) # #B8B3A9
$colMuted    = [System.Drawing.Color]::FromArgb(255, 142, 138, 129) # #8E8A81
$colChipBg   = [System.Drawing.Color]::FromArgb(255, 28, 28, 33)

$brushAccent = [System.Drawing.SolidBrush]::new($colAccent)
$brushSage   = [System.Drawing.SolidBrush]::new($colSage)
$brushBone   = [System.Drawing.SolidBrush]::new($colBone)
$brushStone  = [System.Drawing.SolidBrush]::new($colStone)
$brushMuted  = [System.Drawing.SolidBrush]::new($colMuted)
$brushChipBg = [System.Drawing.SolidBrush]::new($colChipBg)

$penBorder   = [System.Drawing.Pen]::new($colBorder, [float]2.5)
$penSubtle   = [System.Drawing.Pen]::new($colSubtle, [float]2.0)

$fontHeaderTag  = [System.Drawing.Font]::new("Consolas", [float]20.0, [System.Drawing.FontStyle]::Bold)
$fontNameLarge  = [System.Drawing.Font]::new("Segoe UI", [float]48.0, [System.Drawing.FontStyle]::Bold)
$fontTitleLarge = [System.Drawing.Font]::new("Segoe UI", [float]28.0, [System.Drawing.FontStyle]::Bold)
$fontSubLarge   = [System.Drawing.Font]::new("Segoe UI", [float]22.0, [System.Drawing.FontStyle]::Regular)
$fontPill       = [System.Drawing.Font]::new("Consolas", [float]19.0, [System.Drawing.FontStyle]::Bold)
$fontSpecLine   = [System.Drawing.Font]::new("Consolas", [float]18.0, [System.Drawing.FontStyle]::Regular)
$fontMonoLarge  = [System.Drawing.Font]::new("Consolas", [float]22.0, [System.Drawing.FontStyle]::Bold)
$fontMonoMed    = [System.Drawing.Font]::new("Consolas", [float]19.0, [System.Drawing.FontStyle]::Regular)

$centerFmt = [System.Drawing.StringFormat]::new()
$centerFmt.Alignment = [System.Drawing.StringAlignment]::Center
$centerFmt.LineAlignment = [System.Drawing.StringAlignment]::Center

$leftFmt = [System.Drawing.StringFormat]::new()
$leftFmt.Alignment = [System.Drawing.StringAlignment]::Near
$leftFmt.LineAlignment = [System.Drawing.StringAlignment]::Center

$rightFmt = [System.Drawing.StringFormat]::new()
$rightFmt.Alignment = [System.Drawing.StringAlignment]::Far
$rightFmt.LineAlignment = [System.Drawing.StringAlignment]::Center

$bullet = [char]0x2022

# ==============================================================================
# FRONT FACE (X = 0..839, Center = 419)
# ==============================================================================
$fx = 28; $fy = 18; $fw = 783; $fh = 1230; $fr = 44
$frontPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $frontPath $fx $fy $fw $fh $fr

$frontGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new($fx, $fy),
    [System.Drawing.PointF]::new($fx, ($fy + $fh)),
    $colCardBg1,
    $colCardBg2
)
$g.FillPath($frontGrad, $frontPath)
$g.DrawPath($penBorder, $frontPath)

$innerFront = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $innerFront ($fx + 12) ($fy + 12) ($fw - 24) ($fh - 24) ($fr - 6)
$g.DrawPath($penSubtle, $innerFront)

# Top Bar
$g.DrawString("IET LUCKNOW", $fontHeaderTag, $brushMuted, [float]($fx + 45), [float]($fy + 75), $leftFmt)
$g.FillEllipse($brushSage, [float]($fx + $fw - 220), [float]($fy + 67), [float]14, [float]14)
$g.DrawString("CLASS '27", $fontHeaderTag, $brushBone, [float]($fx + $fw - 45), [float]($fy + 75), $rightFmt)
$g.DrawLine($penSubtle, [float]($fx + 35), [float]($fy + 125), [float]($fx + $fw - 35), [float]($fy + 125))

# Logo Box
$logoBoxSize = 210
$logoBoxX = 419 - ($logoBoxSize / 2)
$logoBoxY = $fy + 205
$logoPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $logoPath $logoBoxX $logoBoxY $logoBoxSize $logoBoxSize 42
$g.FillPath($brushChipBg, $logoPath)
$g.DrawPath($penSubtle, $logoPath)

if ($logoImg -ne $null) {
    $logoPad = 24
    $g.DrawImage($logoImg, [float]($logoBoxX + $logoPad), [float]($logoBoxY + $logoPad), [float]($logoBoxSize - 2 * $logoPad), [float]($logoBoxSize - 2 * $logoPad))
}

# Identity
$nameY = $logoBoxY + $logoBoxSize + 85
$g.DrawString("SHIVANSH KAUSHIK", $fontNameLarge, $brushBone, [float]419, [float]$nameY, $centerFmt)

$titleY = $nameY + 64
$g.DrawString("Software Engineer", $fontTitleLarge, $brushAccent, [float]419, [float]$titleY, $centerFmt)

$subY = $titleY + 48
$g.DrawString("Tech Head $bullet E-Cell IET Lucknow", $fontSubLarge, $brushStone, [float]419, [float]$subY, $centerFmt)

# Specialty Pill
$pillW = 470; $pillH = 54
$pillX = 419 - ($pillW / 2)
$pillY = $subY + 68
$pillPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $pillPath $pillX $pillY $pillW $pillH 27
$g.FillPath($brushChipBg, $pillPath)
$g.DrawPath($penBorder, $pillPath)
$g.DrawString("FULL-STACK & REAL-TIME WEB", $fontPill, $brushAccent, [float]419, [float]($pillY + ($pillH / 2)), $centerFmt)

$specY = $pillY + 80
$g.DrawString("NEXT.JS / TS / POSTGRES / WEBRTC", $fontSpecLine, $brushMuted, [float]419, [float]$specY, $centerFmt)

# Footer Bar
$secY = $fy + $fh - 65
$g.DrawLine($penSubtle, [float]($fx + 35), [float]($secY - 35), [float]($fx + $fw - 35), [float]($secY - 35))
$g.DrawString("SHIVANSH.DEV", $fontMonoLarge, $brushAccent, [float]($fx + 45), [float]$secY, $leftFmt)
$g.DrawString("LUCKNOW, IN", $fontMonoMed, $brushMuted, [float]($fx + $fw - 45), [float]$secY, $rightFmt)

# ==============================================================================
# BACK FACE (X = 839..1678, Center = 1258)
# ==============================================================================
$bx = 867; $by = 18; $bw = 783; $bh = 1230; $br = 44
$backPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $backPath $bx $by $bw $bh $br

$backGrad = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.PointF]::new($bx, $by),
    [System.Drawing.PointF]::new($bx, ($by + $bh)),
    $colCardBg1,
    $colCardBg2
)
$g.FillPath($backGrad, $backPath)
$g.DrawPath($penBorder, $backPath)

$innerBack = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $innerBack ($bx + 12) ($by + 12) ($bw - 24) ($bh - 24) ($br - 6)
$g.DrawPath($penSubtle, $innerBack)

# Top Bar
$g.DrawString("SCAN FOR GITHUB", $fontHeaderTag, $brushAccent, [float]($bx + 45), [float]($by + 75), $leftFmt)
$g.DrawString("2026", $fontHeaderTag, $brushBone, [float]($bx + $bw - 45), [float]($by + 75), $rightFmt)
$g.DrawLine($penSubtle, [float]($bx + 35), [float]($by + 125), [float]($bx + $bw - 35), [float]($by + 125))

# QR Box
$qrBoxSize = 440
$qrBoxX = 1258 - ($qrBoxSize / 2)
$qrBoxY = $by + 205
$qrPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $qrPath $qrBoxX $qrBoxY $qrBoxSize $qrBoxSize 38
$qrBgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 250, 248, 245))
$g.FillPath($qrBgBrush, $qrPath)
$g.DrawPath($penBorder, $qrPath)

if ($qrImg -ne $null) {
    $qrPad = 24
    $g.DrawImage($qrImg, [float]($qrBoxX + $qrPad), [float]($qrBoxY + $qrPad), [float]($qrBoxSize - 2 * $qrPad), [float]($qrBoxSize - 2 * $qrPad))
}

$qrCapY = $qrBoxY + $qrBoxSize + 60
$g.DrawString("GITHUB REPOSITORIES", $fontTitleLarge, $brushBone, [float]1258, [float]$qrCapY, $centerFmt)

$qrSubY = $qrCapY + 48
$g.DrawString("github.com/ShivanshKaushik007", $fontMonoLarge, $brushAccent, [float]1258, [float]$qrSubY, $centerFmt)

$cChipW = 560; $cChipH = 60
$cChipX = 1258 - ($cChipW / 2)
$cChipY = $qrSubY + 68
$cChipPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
Add-RoundedRect $cChipPath $cChipX $cChipY $cChipW $cChipH 30
$g.FillPath($brushChipBg, $cChipPath)
$g.DrawPath($penSubtle, $cChipPath)
$g.DrawString("shivanshkaushik1237@gmail.com", $fontMonoLarge, $brushBone, [float]1258, [float]($cChipY + ($cChipH / 2)), $centerFmt)

# Clean non-overlapping footer bar
$bSecY = $by + $bh - 65
$g.DrawLine($penSubtle, [float]($bx + 35), [float]($bSecY - 35), [float]($bx + $bw - 35), [float]($bSecY - 35))
$g.DrawString("|| ||| || | ||| ||", $fontMonoMed, $brushMuted, [float]($bx + 45), [float]$bSecY, $leftFmt)
$g.DrawString("B.TECH CSE '27", $fontMonoMed, $brushAccent, [float]($bx + $bw - 45), [float]$bSecY, $rightFmt)

$bmp.Save("scratch/new_texture.png", [System.Drawing.Imaging.ImageFormat]::Png)

if ($logoImg -ne $null) { $logoImg.Dispose() }
if ($qrImg -ne $null) { $qrImg.Dispose() }
$g.Dispose()
$bmp.Dispose()

Write-Output "Clean editorial card texture generated successfully!"
