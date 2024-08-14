var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe"));
