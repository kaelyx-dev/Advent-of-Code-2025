const fs = require('fs');

const solve = f => (i={r:x=>x[0].map((_, i)=>x.map(r=>r[i]).reverse()).reverse().map(e=>e.reverse()),i:fs.readFileSync(f,'utf-8').split('\n'),o:{a:0,b:0}},i.o.a=i.r(i.i.map(l=>l.replace(/\s+/g,' ').trim().split(/\s/))).map(r=>(r.slice(0,r.length-1).map(Number).reduce((a,b)=>r.at(-1)==='+'?a+b:a*b,r.at(-1)==='+'?0:1))).reduce((a,b)=>a+b,0),i.o.b=i.r(i.i.map(l=>l.split(''))).map(r=>({n:r.slice(0,r.length-1).join(""),op:r.at(-1)!=' '?r.at(-1):undefined})).filter(e=>Number(e.n)).map(e=>({n:Number(e.n),o:e.op})).reduce(({c,s},{n,o})=>(!Number.isNaN(+n)?(o ? (s.push(+n),c+=(o==='+'?s.reduce((a,b)=>a+b,0):s.reduce((a,b)=>a*b,1)),s=[]):s.push(+n),{c,s}):{c,s}),{c:0,s:[]}).c,i.o)

console.log(solve('input.txt'));