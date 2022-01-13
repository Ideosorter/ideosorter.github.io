cd ../json
echo "input your new language's prefix (eg: en/es/fr/de):"
read newlang
cp -R ./en ./$newlang
cd $newlang
for i in *-en.json 
do
    mv "$i" "${i%en.json}$newlang.json"
done
