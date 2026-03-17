let employees=[];
function addEmployee(){
let name=document.getElementById("name").value;
let empId=document.getElementById("empId").value;
let salary=parseFloat(document.getElementById("salary").value);
let department=document.getElementById("department").value;
let employee={
    name:name,
    empId:empId,
    salary:salary,
    department:department
};
employees.push(employee);
alert("Employee added successfully!");
document.getElementById("name").value="";
document.getElementById("empId").value="";
document.getElementById("salary").value="";
document.getElementById("department").value="";
}
function displayEmployees(){
    let output="<h3>All Employees:</h3><ul>";
    employees.forEach(emp)=>{
        
    }
    };