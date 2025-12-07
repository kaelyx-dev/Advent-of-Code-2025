const fs = require('fs');

const solve = f => (
  i={i: fs.readFileSync(f,'utf-8').trimEnd().split('\n'),a:{s:0,b:new Set()},o:{a:0,b:0}},i.o.a=(i.i.reduce((a, b) =>b.split('').reduce((b, c, p, f) =>(c==='S' && b.add(p),c==='^' && b.has(p) &&(i.a.s++,b.delete(p),p>0 && b.add(p-1),p<f.length-1 && b.add(p+1)),b),a),i.a.b),i.a.s),i.o.b=(b=i.i[0].split('').map(c=>c==='S'?1:0),i.i.forEach(l=>{const f=Array.from(l);for(let p=1;p<f.length;p++){if(f[p]==='^'){const cb=b[p];b[p-1]+=cb;b[p+1]+=cb;b[p]=0;}}}),b.reduce((a,b)=>a+b,0)),i.o)


console.log(solve('input.txt'));