function max(numbers){
    let max = numbers[0];
    let i = 0;
    while (i < numbers.length){
        if (numbers[i] > max){
            max = numbers[i];
        }
        i++;
    }
    return max;
}

function min(numbers){
    let min = numbers[0];
    let i = 0;
    while (i < numbers.length){
        if (numbers[i] < min){
            min = numbers[i];
        }
        i++;
    }
    return min;
}

function average(numbers) {
    let sum = numbers[0];
    let i = 0;
    numbers.forEach(function(number){
        sum += numbers[i];
        i++;
    })
    return sum / numbers.length;
}