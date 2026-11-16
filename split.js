function splitBill(bill, tipPercent, people) {
    if (people < 1) {
        console.log("Error: need at least 1 person");
        return;
    }
    let tip = bill * tipPercent / 100;
    let total = bill + tip;
    let each = total / people;
    console.log("Tip: " + tip.toFixed(2));
    console.log("Total: " + total.toFixed(2));
    console.log("Each pays: " + each.toFixed(2));
}

for (let p = 1; p <= 5; p++) {
    console.log("--- People:", p);
    splitBill(1250, 10, p);
}
splitBill(1250, 10, 0);