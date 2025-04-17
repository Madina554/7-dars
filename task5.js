let daqiqa = +prompt("Minutlar kiriting: ");
let soat = Math.floor(daqiqa / 60);
let minut = daqiqa % 60;
console.log(`${soat}soat ${minut}daqiqa`);