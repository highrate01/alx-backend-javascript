// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// creates class director that implements Director interface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// creates a function 'createEmployee' that accept one arg
function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if ((typeof salary === 'number') && salary < 500) {
    return new Teacher();
  } else {
      return new Director();
  }
}

// Test function
const employee1 = createEmployee(400);
const employee2 = createEmployee(1000);
console.log(employee1, employee2);
