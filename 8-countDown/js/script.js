var num = window.prompt("Enter the number to countdown from:");
num = parseInt(num);

if (num > 0) {
    for (let counter = num; counter >= 0; counter--) {
        window.console.log(counter);
    }
} else {
    window.console.log("Please a number greater than 0.")
}