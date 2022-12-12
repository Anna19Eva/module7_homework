//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function StudensIn(obj, objKeyName) {
    return (objKeyName in obj);
}

const studentId01 = {
    name: "Anna", 
    ownCity: "Voroneg",
    age: 37,
    course: "Frontend"
  };


  console.log(StudensIn(studentId01, "same"));  // false
  console.log(StudensIn(studentId01, "name"));  // true
