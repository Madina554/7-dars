let parol = prompt("Parolingizni kiriting: ");
function checkPassword(parol) {
    let reason = [];
    if (parol.length < 8) {
        reason.push("8ta belgidan kam!");
    }
    if (!/[a-z]/.test(parol)) {
        reason.push("Kickik harf mavjud emas!");
    }
    if (!/[A-Z]/.test(parol)) {
        reason.push("Katta harf mavjud emas!");
    }
    if (!/[0-9]/.test(parol)) {
        reason.push("Raqam mavjud emas!");
    }
    if (reason.length == 0) {
        console.log("Kuchli parol");
    } else {
        console.log(`Kuchsiz parol:${reason.join(",")}`);
    }
}
checkPassword(parol);