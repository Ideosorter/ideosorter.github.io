cd ../json
echo "input your new language's prefix (eg: en/es/fr/de):"
read newlang
cp -R ./en ./$newlang
cd $newlang
for i in *-en.json 
    mv $i (string replace "en" $newlang $i) 
end
