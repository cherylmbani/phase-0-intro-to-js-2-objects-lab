// Write your solution in this file!
const employee = {
    name: "Cheryl",
    streetAddress:"123 Main Street",
};
//nondestructively modifying an object
function updateEmployeeWithKeyAndValue(employee, key, value){
    return{
        ...employee,
        [key]:value
    };

}
//destrucively modifying an object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
// nondestructively deleting a property
function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
//destructively deteling a property
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}