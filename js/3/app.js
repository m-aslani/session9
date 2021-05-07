
let fs = require('fs');
fs.readFile('name.txt',"utf-8",function(err,data){
    if(err) throw err;
    // console.log(data);
    let names = data.split("\r\n");
    // console.log(names);
    fs.readFile('number.txt',"utf-8",function(err,data){
        let numbers = data.split("\r\n");
        for(let i=0 ; i<names.length ; i++){
            let name = names[i].split("-");
            // console.log(name);
            let count = 0;
            let myNumber = " ";
            for(let j=0 ; j<numbers.length; j++){
                let number = numbers[j].split("-");
                if(name[0] === number[0]){
                    count++;
                    if(count>1) myNumber+=" , ";
                    myNumber+=number[1];
                }
            }
            if(count === 0 ) console.log(`${name[1]}'s has'nt any phone number! \n`);
            else if(count === 1) console.log(`${name[1]}'s phone number is ${myNumber} \n`);
            else console.log(`${name[1]}'s phone number are ${myNumber} \n`);
        }
    });
});