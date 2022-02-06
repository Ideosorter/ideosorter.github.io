const lang = "en"
const questions = require("../json/"+lang+"/questions-"+lang+".json")
const buttons = require("../json/"+lang+"/buttons-"+lang+".json")
const resultlist = require("../json/"+lang+"/results-"+lang+".json")
const fs = require("fs")
function getparent(list){
    const match = list[list.length-1].a
    for(const [key,value] of Object.entries(questions)){
        for(const [key2,value2] of Object.entries(value.nextquestion)){
            if(value2 == match){
                return {a: key, b: key2}
            }
        }
    }
    return false
}

let results = {}
for(const [key,value] of Object.entries(questions)){
    if (value.results){
        const n = value.results
        for(const[key2,value2] of Object.entries(n)){
            results[value2] = [{a:key,b:key2}]
            while(true){
                results[value2].push(getparent(results[value2]))
                if(!results[value2][results[value2].length-1]){
                    results[value2].pop()
                    break
                }
            }
        }
    }
}
let str = ""
for(const[key,value] of Object.entries(results)){
    str += resultlist[key].result + ":\n"
    const rev = value.reverse()
    for(const i of rev){
        str += questions[i.a].question + " " + buttons[i.b].text  +"\n"
    }
    str+="\n"
}
fs.writeFileSync("./questions-out.txt",str)