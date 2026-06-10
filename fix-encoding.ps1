# Convierte todos los .tsx/.ts de Windows-1252 a UTF-8 sin BOM
$extensions = "*.tsx", "*.ts"
$utf8 = New-Object System.Text.UTF8Encoding $false          # UTF-8 sin BOM
$utf8Strict = New-Object System.Text.UTF8Encoding $false, $true  # lanza excepcion si bytes invalidos
$win1252 = [System.Text.Encoding]::GetEncoding(1252)

$files = Get-ChildItem -Path "." -Include $extensions -Recurse
$converted = 0; $skipped = 0

foreach ($file in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    $needsConversion = $false

    # Detectar BOM UTF-8 (EF BB BF)
    $hasBom = ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF)

    if (-not $hasBom) {
        try {
            $utf8Strict.GetString($bytes) | Out-Null
        } catch {
            $needsConversion = $true
        }
    }

    if ($needsConversion -or $hasBom) {
        $srcEncoding = if ($hasBom) { [System.Text.Encoding]::UTF8 } else { $win1252 }
        $text = $srcEncoding.GetString($bytes)
        [System.IO.File]::WriteAllText($file.FullName, $text, $utf8)
        Write-Host "  [OK] $($file.FullName)" -ForegroundColor Green
        $converted++
    } else {
        $skipped++
    }
}

Write-Host "`nConvertidos: $converted | Ya eran UTF-8: $skipped" -ForegroundColor Cyan
