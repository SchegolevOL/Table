let thead = document.querySelector('#headerTab');
let theadFirstnName = thead.cells[0];
let theadLastName = thead.cells[1];
let theadAge = thead.cells[2];
let theadCompany = thead.cells[3];
//==========================================================
theadFirstnName.addEventListener('click', ()=>{
    console.log(theadFirstnName.innerText);
});
theadLastName.addEventListener('click', ()=>{
    console.log(theadLastName.innerText);
});
theadAge.addEventListener('click', ()=>{
    console.log(theadAge.innerText);
});
theadCompany.addEventListener('click', ()=>{
    console.log(theadCompany.innerText);
});
//===========================================================
/*
let bodyTab = document.querySelector('#bodyTab');
console.log(bodyTab.children);
let arrTable=[];
let arrRow = [];
for (let i = 0; i < bodyTab.children.length; i++) {
    for (let j = 0; j < bodyTab.children[i].cells.length; j++) {
        arrRow[j] = bodyTab.children[i].cells[j].innerText;    
    }
   
    arrTable[i]=arrRow.slice();
}    
console.log(arrTable)
*/
//===========================================================
class Person{
    firctName;
    lastName;
    age;
    company;
    constructor(firctName, lastName, age, company){
        this.firctName = firctName;
        this.lastName = lastName;
        this.age = age;
        this.company = company;
    }
}
//===========================================================
let bodyTab = document.querySelector('#bodyTab');
console.log(bodyTab.children);
let person = new Person();
let personTab= [];
for (let i = 0; i < bodyTab.children.length; i++) {
    person.firctName = bodyTab.children[i].cells[0].innerText;    
    person.lastName = bodyTab.children[i].cells[1].innerText;    
    person.age = bodyTab.children[i].cells[2].innerText;    
    person.company = bodyTab.children[i].cells[3].innerText;  
    personTab[i]=person.assign();
}    
console.log(personTab);