//Array Object
const Employee=[{name:'kural', role:'Angulardev'},
          {name:'moni',role:'Reactdev'}]


// Function Written to fetch data from the array of objects and potray in HTML         
const getEmployeedetails=()=>{
  let output="";
  let index='';
  setTimeout(()=>{
Employee.forEach((item)=>{
output=output+`<li>${item.name}</li>`;
document.body.innerHTML=output;
})
  },1000);
}

//Setting up a new object and calling a callback method as asyncronously 
const setEmployeedetails=(employee,callback)=>{
  setTimeout(()=>{
  Employee.push(employee);
  callback();
  },2000);
}
setEmployeedetails({name:"ruban",role:"webdev"},getEmployeedetails);
