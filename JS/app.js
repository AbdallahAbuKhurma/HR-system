'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Employee(name, email, department){
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = getRandomArbitrary(100, 500);
  this.total = 0;
  Employee.all.push(this);
}

Employee.all = [];
gettingItem();


function tableHeader(){
  const container = document.getElementById('employeeTable');
  const trEl = document.createElement('tr');
  container.appendChild(trEl);

  const thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Name';
  
  const thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent = 'Email';
  
  const thEl2 = document.createElement('th');
  trEl.appendChild(thEl2);
  thEl2.textContent = 'Department';

  const thEl3 = document.createElement('th');
  trEl.appendChild(thEl3);
  thEl3.textContent = 'Salary';

}
tableHeader();


Employee.prototype.render = function(){
  const container = document.getElementById('employeeTable');
  const trEl = document.createElement('tr');
  container.appendChild(trEl);

  const tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = this.name;
  
  const tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = this.email;

  const tdEl2 = document.createElement('td');
  trEl.appendChild(tdEl2);
  tdEl2.textContent = this.department;

  const tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent = Math.floor(this.salary);

  let savedData = JSON.stringify(Employee.all);
  localStorage.setItem('employee', savedData);
}

const employeeForm = document.getElementById('employeeForm');

employeeForm.addEventListener('submit', displayInformation);

function displayInformation(event){
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let department = event.target.department.value;

  let addemployee = new Employee(name , email, department);
  addemployee.render();
}

function gettingItem(){
  let data = localStorage.getItem('employee');
  let displayedData = JSON.parse(data);
  console.log(displayedData);


  if(displayedData && displayedData.lenght){
    Employee.all = displayedData;
    return;
  }
}

