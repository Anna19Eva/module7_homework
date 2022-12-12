
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных cвойств. 
//Данная функция не должна возвращать значение.

let NoutBook = {
    brand: 'Samsung',
    cpu: 'iS7',
    price: 70000
}
function printObj(obj) {
  for(let key in obj) {
      console.log(`${key}: ${obj[key]}`);
  }
}

printObj(NoutBook)