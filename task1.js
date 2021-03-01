function qala(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log( key + ", " + obj[key]);
    }
  }
}


let qala1 = {
  name: 'A',
  age: '15',
  student: true
}

let qala2 = Object.create(qala1);
qala2.city = "Almaty";

qala(qala2)
