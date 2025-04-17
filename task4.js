let name1 = prompt("Ism va Familiyangizni kiriting: ");
let sozlar = name1.split(" ");
if(sozlar.length==2){
    let ism = sozlar[0];
    let familiya = sozlar[1];
    ism = ism.split("")
    ism = ism[0]
    console.log(ism + "." + familiya);
} else {
    console.log("Notog'ri ma'lumot kiritdingiz");
}