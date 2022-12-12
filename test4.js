//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  } // метод, который определяет прибор как включенный в розетку 
  
  ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
  }
  
  
  const lampa = new ElectricalAppliance('lampa', 45);
  const tv = new ElectricalAppliance('tv', 1000);
  
  console.log(lampa.getPowerUsed() + tv.getPowerUsed());
  
  lampa.plugIn();
  console.log(lampa.getPowerUsed() + tv.getPowerUsed());
  
  tv.plugIn();
  console.log(lampa.getPowerUsed() + tv.getPowerUsed());