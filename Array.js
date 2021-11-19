//Array without sort
var array = [];
for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 900) + 99;
}
console.log(array);
for (var i = 0; i < 10; i++)         //Sorting Array
{
    var temp;
    for (var j = i + 1; j < 10; j++) {
        if (array[i] < array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array[array.length - 2]);

console.log(array[1]);

//Array with sort
var array = [];
for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 900) + 99;
}

array.sort();
console.log(array[array.length - 2]);
console.log(array[1]);

//Prime factorization
function primeFactors(n) {
    var array = [];
    while (n % 2 == 0) {
        console.log(2 + " ");
        n = Math.floor(n / 2);
    }

    for (let i = 3; i <= Math.floor(Math.sqrt(n));
        i = i + 2) {

        while (n % i == 0) {

            array.push(i);
            n = Math.floor(n / i);
        }
    }

    if (n > 2) {
        array.push(n);
    }

    console.log(array);

}

let n = 315;

primeFactors(n);

//Repeat Twice
var lastNo,firstNo,sum;
var array=[];
for(var i=0;i<100;i++){
    lastNo=i%10;
    firstNo=Math.floor(i/10);
    sum=lastNo*10+firstNo;
    if(sum===i){
        array.push(i);;
    }
}
console.log(array);
