// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>100Algorithim Challenge</h1>\n<h2>Challenge 2</h2>`;

function add(param1: number, param2: number): number {
  const result: number = param1 + param2;
  return result;
}

function add2(param1: number[], ...params: number[]): number {
  let result: number = 0;
  param1.forEach(element => result = result + element);
  return result;
}
//console.log(add(1, 2));
//console.log(add(3, 2));

// console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
