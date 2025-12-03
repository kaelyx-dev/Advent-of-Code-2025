const fs = require('fs');

const solve = f => fs.readFileSync(f,"utf8").split("\r\n").map(s => ((z=(s,n)=>+[...Array(n)].reduce((o,_,k)=>((w=s.slice(o.i,s.length-(n-k)+1)),(x=Math.max(...w)),{r:o.r+x, i:o.i+w.indexOf(String(x))+1}),{r:"",i:0}).r),{a:z(s,2) ,b: z(s,12)})).reduce((r, o)=>({ a: r.a + o.a, b: r.b + (o.b || 0)}),{a:0,b:0});
const start = performance.now();
const result = solve("input.txt")
const end = performance.now();

console.log(`Execution time: ${end - start} ms`);
console.log("Part A:", result.a);
console.log("Part B:", result.b);