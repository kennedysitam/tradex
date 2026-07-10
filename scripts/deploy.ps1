# TradeX Deployment Script

$ScriptDir = Split-Path -Parent $PSCommandPath
$ProjectRoot = Split-Path -Parent $ScriptDir

$MT5 = "$env:APPDATA\MetaQuotes\Terminal\D0E8209F77C8CF37AD8BF550E51FF075\MQL5"

Write-Host ""
Write-Host "========================================"
Write-Host "      Deploying TradeX to MT5"
Write-Host "========================================"

Copy-Item "$ProjectRoot\mt5\Experts\*" "$MT5\Experts\" -Recurse -Force
Copy-Item "$ProjectRoot\mt5\Include\*" "$MT5\Include\" -Recurse -Force
Copy-Item "$ProjectRoot\mt5\Files\*" "$MT5\Files\" -Recurse -Force

Write-Host ""
Write-Host "Deployment Complete!"
Write-Host ""