# Uso: .\remove-word.ps1 -Word "palabra" [-Path "app"] [-Ext "*.tsx"] [-DryRun]
param(
    [Parameter(Mandatory)][string]$Word,
    [string]$Path = ".",
    [string]$Ext = "*.tsx",
    [switch]$DryRun
)

$files = Get-ChildItem -Path $Path -Filter $Ext -Recurse
$changed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match [regex]::Escape($Word)) {
        $newContent = $content -replace [regex]::Escape($Word), ""
        if ($DryRun) {
            Write-Host "[PREVIEW] $($file.FullName)" -ForegroundColor Yellow
        } else {
            Set-Content $file.FullName $newContent -NoNewline
            Write-Host "[OK] $($file.FullName)" -ForegroundColor Green
        }
        $changed++
    }
}

$action = if ($DryRun) { "encontrados" } else { "modificados" }
Write-Host "`n$changed archivo(s) $action." -ForegroundColor Cyan
