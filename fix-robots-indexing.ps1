# Script para corregir la configuración de robots en páginas de antenistas
# Cambia index: false a index: true en todas las páginas

$searchPattern = "index:\s*false"
$replacePattern = "index: true"

$searchPattern2 = "follow:\s*false"
$replacePattern2 = "follow: true"

$searchPattern3 = "nocache:\s*true"
$replacePattern3 = "nocache: false"

$searchPattern4 = "noimageindex:\s*true"
$replacePattern4 = "noimageindex: false"

# Buscar archivos que contengan "antenista" en el nombre
$files = Get-ChildItem -Path "app" -Recurse -Name "*antenista*.tsx" | Where-Object { $_ -like "*.tsx" }

Write-Host "Archivos encontrados:"
$files | ForEach-Object { Write-Host "  $_" }

foreach ($file in $files) {
    $fullPath = Join-Path "app" $file
    if (Test-Path $fullPath) {
        Write-Host "Procesando: $fullPath"
        
        $content = Get-Content $fullPath -Raw
        
        # Verificar si el archivo contiene "index: false"
        if ($content -match $searchPattern) {
            Write-Host "  - Corrigiendo index: false -> index: true"
            $content = $content -replace $searchPattern, $replacePattern
        }
        
        if ($content -match $searchPattern2) {
            Write-Host "  - Corrigiendo follow: false -> follow: true"
            $content = $content -replace $searchPattern2, $replacePattern2
        }
        
        if ($content -match $searchPattern3) {
            Write-Host "  - Corrigiendo nocache: true -> nocache: false"
            $content = $content -replace $searchPattern3, $replacePattern3
        }
        
        if ($content -match $searchPattern4) {
            Write-Host "  - Corrigiendo noimageindex: true -> noimageindex: false"
            $content = $content -replace $searchPattern4, $replacePattern4
        }
        
        # Guardar el archivo modificado
        Set-Content $fullPath $content -NoNewline
        Write-Host "  - Archivo actualizado"
    }
}

Write-Host "Proceso completado."