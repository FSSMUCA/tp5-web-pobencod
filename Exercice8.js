function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let total = Number(prompt("Entrez le total HT : "));
let remise = Number(prompt("Entrez la remise en % : "));

let totalFinal = totalAvecRemise(total, remise);
console.log("Total final après remise:", totalFinal.toFixed(2) + " €");