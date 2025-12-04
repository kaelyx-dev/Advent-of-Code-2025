const fs = require('fs');

const solve = f => (_i={r:'@',s:'.',c:4,_: {a:0,b:0},g: fs.readFileSync(f,"utf8").split("\r\n").map(l=>l.split(''))},fS=(G,x,y,s=0)=>{for(i=-1;i<2;i++)for(j=-1;j<2;j++)i|j&&(G[y+i]||0)[x+j]==_i.r&&s++;return s},fG=G=>(rc=0,g2=G.map((r,y)=>r.map((c,x)=>(S=fS(G,x,y),c==_i.r && S<_i.c ? (rc++,_i.s) : (c==_i.r?_i.r:_i.s)))),[g2,rc]),(_i.g = fG(_i.g),_i._.a = _i.g[1],_i._.b = _i.g[1],(_ => { while(_i.g[1]>0) _i.g=fG(_i.g[0]), _i._.b+=_i.g[1]; })(0),_i._))

const start = performance.now();
const result = solve("input.txt")
const end = performance.now();

console.log(`Execution time: ${end - start} ms`);
console.log("Part A:", result.a);
console.log("Part B:", result.b);
