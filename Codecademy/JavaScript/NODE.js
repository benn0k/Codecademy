<<<<<<< HEAD
let str = 'ryan';
let len = 1;

let padding = Math.floor((str.length - len) % 2);
console.log(padding);
=======
<<<<<<< HEAD



// Write your code here:



const sortYears = (yearNum) => {
  sortedYears = [];
  sortedYears = yearNum.sort();
  


}



// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

=======
const _ = {
  inRange(num, start, end) {
    if (end === undefined) {
      start = 0;
    }
    if (start > end) {
      tempEnd = end;
      start = end;
      end = tempEnd;
      console.log(start);
      console.log(end);
      console.log(num);
    }
  },
};

inRange(1, 2, 3);
>>>>>>> f9c296b987822e8a2b954c1f066ae179bd00dcb5
>>>>>>> 4d7d94df90c8adcae611cc39763f61f8e519941e
