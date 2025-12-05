const fs = require('fs')

const solve = f => (o={a:0,b:0},_s="\r\n",_j="-",[r,i]=fs.readFileSync(f, "utf-8").split(_s+_s).map(e=>e.split(_s)),r=(m=[],r.map(e=>e.split(_j).map(Number)).sort((a,b)=>a[0]-b[0]).forEach(([s,e])=>(!m.length||s>m[m.length-1][1])?m.push([s,e]):m[m.length-1][1]=Math.max(m[m.length-1][1],e)), m),o.b=r.reduce((a,[x,y])=>a+y-x+1,0),o.a=i.map(e=>((v,r,f=(l=0,h=r.length-1)=>l>h?0:((m=l+h>>1),([s,e]=r[m]),v<s?f(l,m-1):v>e?f(m+1,h):1))=>f())(e,r)).reduce((a,b)=>a+b,0),o)

const start = performance.now();
const result = solve("input.txt")
const end = performance.now();

console.log(`Execution time: ${end - start} ms`);
console.log("Part A:", result.a);
console.log("Part B:", result.b);