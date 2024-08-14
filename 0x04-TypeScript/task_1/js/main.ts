interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [property: string]: string | number | boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));

interface Class {
  workOnHomework(): string;
  displayName(): string;
}
interface Constructor {
  firstName: string;
  lastName: string;
}
class StudentClass implements Class {
  firstName: string;
  lastName: string;
  constructor(params: Constructor) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}
