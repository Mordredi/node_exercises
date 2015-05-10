var num_array = process.argv;
var sum = 0;

for (var i = 2; i < num_array.length; i++) {
  sum += Number(num_array[i]);
}
console.log(sum);