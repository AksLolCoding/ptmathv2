function onClick() {
    // Get Inputs
    const n = parseInt(document.getElementById("n").value);

    // Calculate Primes
    const primes = [2]; // 2 is the first prime regardless
    let counter = 3; // check this number, if not then inc
    const startTime = window.performance.now();
    while (primes.length < n) {
        let prime = true;
        for (let i = 2; i <= Math.sqrt(counter); i++) {
            if (counter % i == 0) prime = false; // check if divisible by anything less than sqrt
        }
        if (prime) primes.push(counter); // add to list if prime
        counter++;
    }
    const endTime = window.performance.now();

    // Display Calculation Time
    document.getElementById("time").innerText = `Elapsed Time: ${endTime - startTime} ms`

    // Display Primes
    // create header
    let output = `<table><tr><td></td>`;
    for (let i = 0; i < Math.min(n, 10); i++) {
        output += `<td><strong>${i+1}</strong></td>`;
    }
    output += "</tr>";

    // create data
    for (let i = 0; i < Math.ceil(n / 10); i++) {
        output += `<tr><td><strong>${i*10}</strong></td>`;
        for (let j = 0; j < Math.min(10, n - i*10); j++) {
            console.log(n, i, j)
            output += `<td>${primes[i * 10 + j]}</td>`;
        }
        output += "</tr>";
    }

    document.getElementById("table").innerHTML = output;
}