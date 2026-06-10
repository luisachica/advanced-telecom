$root = "$PSScriptRoot\app"

$slugs = @(
  "nambroca", "bargas", "olias-del-rey", "cobisa", "barrio-del-poligono",
  "arcicollar", "camarena", "magan", "azucaica", "barience",
  "arges", "layos", "yunclillos", "mocejon", "rielves",
  "san-bernardo", "los-cigarrales", "montesion", "san-martin", "avenida-de-europa",
  "vega-baja", "sta-m-benquerencia", "santa-barbara", "vista-hermosa", "olivar-de-los-pozos",
  "santa-teresa", "covachuelas", "avenida-reconquista", "la-legua", "las-tres-culturas",
  "la-bastida", "palomarejos", "valparaiso", "buenavista", "antequeruela"
)

$ok = 0
$missing = @()

foreach ($slug in $slugs) {
  $path = "$root\antenista-$slug\page.tsx"
  if (Test-Path $path) {
    Write-Host "  [OK] antenista-$slug" -ForegroundColor Green
    $ok++
  } else {
    Write-Host "  [FALTA] antenista-$slug" -ForegroundColor Red
    $missing += $slug
  }
}

Write-Host ""
Write-Host "Resultado: $ok / $($slugs.Count) paginas encontradas." -ForegroundColor Cyan

if ($missing.Count -gt 0) {
  Write-Host "Faltan $($missing.Count) paginas:" -ForegroundColor Yellow
  $missing | ForEach-Object { Write-Host "  - antenista-$_" -ForegroundColor Yellow }
} else {
  Write-Host "Todas las paginas existen correctamente." -ForegroundColor Green
}
