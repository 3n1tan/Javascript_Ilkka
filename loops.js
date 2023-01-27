'use strict'

for (let i=0; i<10; i++) {
    console.log('i',i)
}
//console.log(i);

console.log('########')

for (let i=10; i>0; i--) {
    console.log('i',i)
}

console.log('########')

let m=0;
while(m<10){
    console.log(m);
    m++
}

console.log('########')

let g=0;
do{
    console.log(g);
    g++
} while (g<4);

console.log('########')

let notEnd=true;
while(notEnd){
    const number=Math.random();
    console.log(number);
    if(number<0.3){
        notEnd=false;
    }
}

function hasNumber(){
    return Math.random()<0.5;
}

while(hasNumber()){
    console.log('here we go');
}

do{
    console.log('here we go do while');
}while(hasNumber());

console.log('$$$$$$$')

let result='';
for(let row=0;row<5;row++){
    for(let column=0;column<5;column++){
        result+='*';
        //console.log(row,column)
    }
    result+='\n';
}

console.log(result);
