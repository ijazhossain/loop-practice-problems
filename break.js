var numbers = [11, 23, 45, 67, 89, 123, 456, 56];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 100) {
        break;
    }
    console.log(numbers[i]);
}