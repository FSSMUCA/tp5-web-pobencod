function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    if (n === 0) {
        return 0;
    }
    return n + sommeRecursive(n - 1);
}


console.log("Somme itérative(10):", sommeIterative(10)); // 55
console.log("Somme récursive(10):", sommeRecursive(10)); // 55

