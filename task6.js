let matn = "Salom Dunyo";
let harf = "o";
matn = matn.toLowerCase();
harf = harf.toLowerCase();
let count = 0;
for (let i = 0; i <= matn.length; i++){
    if (matn[i] == harf) {
        count += 1;
    }
}
console.log("Natija: "+count);