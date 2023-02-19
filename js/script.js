//====================    Class   ===========================
class Person {
  firctName;
  lastName;
  age;
  company;
  constructor(firctName, lastName, age, company) {
    this.firctName = firctName;
    this.lastName = lastName;
    this.age = age;
    this.company = company;
  }
}
//===========================================================
let thead = document.querySelector("#headerTab");
let theadFirstnName = thead.cells[0];
let theadLastName = thead.cells[1];
let theadAge = thead.cells[2];
let theadCompany = thead.cells[3];
let sortSettingMinToMaxFirstnName = true;
let sortSettingMinToMaxLastName = true;
let sortSettingMinToMaxAge = true;
let sortSettingMinToMaxCompany = true;

//====================    Array   ===========================
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

let bodyTab = document.querySelector("#bodyTab");
//console.log(bodyTab.children);
let person = new Person();
let personTab = [];
for (let i = 0; i < bodyTab.children.length; i++) {
  person.firctName = bodyTab.children[i].cells[0].innerText;
  person.lastName = bodyTab.children[i].cells[1].innerText;
  person.age = bodyTab.children[i].cells[2].innerText;
  person.company = bodyTab.children[i].cells[3].innerText;
  let newPerson = Object.assign({}, person);
  personTab[i] = newPerson;
}

//====================    Functions  click ========================
theadFirstnName.addEventListener("click", () => {
  if (sortSettingMinToMaxFirstnName) {
    sortSettingMinToMaxFirstnName = false;
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].firctName <= personTab[j].firctName) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
  } else {
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].firctName >= personTab[j].firctName) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
    sortSettingMinToMaxFirstnName = true;
  }
  updateTab();
  });

theadLastName.addEventListener("click", () => {
  if (sortSettingMinToMaxLastName) {
    sortSettingMinToMaxLastName = false;
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].lastName <= personTab[j].lastName) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
  } else {
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].lastName >= personTab[j].lastName) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
    sortSettingMinToMaxLastName = true;
  }
  updateTab();
});

theadAge.addEventListener("click", () => {
  if (sortSettingMinToMaxAge) {
    sortSettingMinToMaxAge = false;
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].age <= personTab[j].age) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
  } else {
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].age >= personTab[j].age) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
    sortSettingMinToMaxAge = true;
  }
  updateTab();
});

theadCompany.addEventListener("click", () => {
  if (sortSettingMinToMaxCompany) {
    sortSettingMinToMaxCompany = false;
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].company <= personTab[j].company) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
  } else {
    let tmp;
    for (let i = 0; i < personTab.length; i++) {
      for (let j = 0; j < personTab.length; j++) {
        if (personTab[i].company >= personTab[j].company) {
          tmp = personTab[i];
          personTab[i] = personTab[j];
          personTab[j] = tmp;
        }
      }
    }
    sortSettingMinToMaxCompany = true;
  }
  updateTab();
});

//====================    Functions   ===========================
function updateTab() {
  for (let i = 0; i < personTab.length; i++) {
    bodyTab.children[i].cells[0].innerText = personTab[i].firctName;
    bodyTab.children[i].cells[1].innerText = personTab[i].lastName;
    bodyTab.children[i].cells[2].innerText = personTab[i].age;
    bodyTab.children[i].cells[3].innerText = personTab[i].company;
  }
}
