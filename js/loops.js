//the hash triangle
function func(num) {
    let result;
    for (let count = "#"; count.length <= num; count += "#") {
        console.log(count);
    }
    result;
}
func(5);

//fuzzbuzz
function numbers(num){

let count = num;

for (count = 1; count <= num; count++) {
    if (count % 3 == 0) {
        console.log("fizz");

    } else if (count % 5 == 0) {
        console.log("buzz");
    } else if (count % 15) {
        console.log("fizzbuzz");
    } else{
        console.log(count);
    }
}
}
numbers(20);