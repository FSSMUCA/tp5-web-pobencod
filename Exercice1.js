
let x = "150";
let y = 150;
let z = true;

console.log("Type de x:", typeof x); // string
console.log("Type de y:", typeof y); // number
console.log("Type de z:", typeof z); // boolean

x = Number(x);
console.log("Nouveau type de x:", typeof x); // number
console.log("Valeur de x:", x); // 150

console.log("\nExplication:");
console.log("JavaScript est un langage à typage dynamique.");
console.log("Les variables peuvent changer de type pendant l'exécution.");
console.log("Le type est déterminé automatiquement selon la valeur assignée.");