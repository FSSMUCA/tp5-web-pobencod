function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}

// Test
console.log("factorielle(5) =", factorielle(5)); // 120
console.log("factorielle(0) =", factorielle(0)); // 1
console.log("factorielle(7) =", factorielle(7)); // 5040