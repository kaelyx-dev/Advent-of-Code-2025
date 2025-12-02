const fs = require('node:fs');
// const solve = f => fs.readFileSync(f, "utf8").split(",").map(e => e.split("-").map(Number)).map(([s, e]) => Array.from({ length: e - s + 1 }, (_, i) => i + s)).map(arr => ({a: arr.filter(n => /^(\d+)\1$/.test(n+"")), b: arr.filter(n => /^(\d+)\1+$/.test(n+""))})).reduce((r, o) => ({a: r.a + o.a.reduce((x, y) => x + y, 0),b: r.b + o.b.reduce((x, y) => x + y, 0)}),{ a: 0, b: 0 });

const solve = f => fs.readFileSync(f,"utf8").split(",").map(e=>e.split("-").map(Number)).reduce((r,[s,e])=>{for(let n=s,t;n<=e;n++)t=n+"",/^(\d+)\1$/.test(t)&&(r.a+=n),/^(\d+)\1+$/.test(t)&&(r.b+=n);return r},{a:0,b:0});

let start = performance.now();
const result = solve("input.txt");
let end = performance.now();

console.log(`Execution time: ${end - start} ms`);
console.log("Part A:", result.a);
console.log("Part B:", result.b);
