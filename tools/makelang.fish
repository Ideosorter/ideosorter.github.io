cd ../json
echo "input your new language prefix's (eg: en/es/fr/de):"
read newlang
cp -R ./en ./$newlang
cd $newlang
for i in *-en.json 
    mv $i (string replace "en" $newlang $i) 
end
