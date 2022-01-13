Set-Location ..\json
$newlang = Read-Host "input your new language prefix's (eg: en/es/fr/de)"
Copy-Item .\en\ -Destination .\$newlang\ -Recurse
Set-Location .\$newlang
Get-ChildItem *.json | Rename-Item -NewName { $_.name -replace "en", $newlang }
Set-Location ..\tools