function sumFibs(num){
  let sum = 0;
  let first = 0;
  let second = 1;
  while(first<=num){
    if(first%2 !==0){
      sum+=first;
    }
    let next = first + second;
    first = second;
    second = next;
  }
  return sum;
}

console.log(sumFibs(100));