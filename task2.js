let harid = +prompt("Harid qilgan buyumingizni narxini va sonini ko'rsating: ");
let data = harid.split(",");
let narx = parseFloat(data[0]);
let son = parseInt(data[1]);
let sum = narx * son;
if (sum > 100000) {
    sum = Math.round(sum * 0.9);
    console.log("Umumiy xarid summasi:" + sum+"+10% chigirma");
} else {
    console.log("Umimiy xarid summasi:" + sum);
}
if (isNaN(narx) || isNaN(son)) {
    console.log("Noto'g'ri ma'lumot!");
}