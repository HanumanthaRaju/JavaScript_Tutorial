let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}
let count1 = 0;
do {
  console.log(count1);
  count1++;
} while (count1 < 5);
for (let i = 1; i < 5; i++) {
    console.log(i);
  }
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        break;
      }
      console.log(i, j);
    }
  }
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
  let x = 10;
let y = (x++, x + 1);
console.log(x, y);  