
function romanToArabic(roman) {
    const values = { I: 1,
        V: 5, 
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 };
    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        total += values[roman[i]] || 0; 
    } 

    return total;
}

const input = prompt("Введите римские цифры:").toUpperCase().trim();

alert("Арабские цифры: " + romanToArabic(input));




function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false; 
        
        for (let j = 0; j < n - 1 - i; j++) {
          
            if (arr[j] > arr[j + 1]) {
                // Меняем местами
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr; 
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); 