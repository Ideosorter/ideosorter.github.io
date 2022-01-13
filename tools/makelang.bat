@echo off
cd ..\json
set /p newlang="input your new language's prefix (eg: en/es/fr/de):"
mkdir %newlang%
xcopy en %newlang%
cd %newlang%
ren *-en.json *-%newlang%.json