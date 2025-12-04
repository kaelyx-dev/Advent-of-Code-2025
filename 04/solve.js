const fs = require('fs');

const solve=f=>(p={r:'@',s:'.',c:4,_:{a:0,b:0},g:fs.readFileSync(f,"utf8").split("\r\n").map(l=>l.split(''))},fS=(G,x,y,s=0)=>{for(i=-1;i<2;i++)for(j=-1;j<2;j++)i|j&&(G[y+i]||0)[x+j]==p.r&&s++;return s},fG=G=>(rc=0,g2=G.map((r,y)=>r.map((c,x)=>(S=fS(G,x,y),c==p.r && S<p.c ? (rc++,p.s):(c==p.r?p.r:p.s)))),[g2,rc]),(p.g=fG(p.g),p._.a=p.g[1],p._.b=p.g[1],(_=>{ while(p.g[1]>0)p.g=fG(p.g[0]),p._.b+=p.g[1];})(0),p._))

const start = performance.now();
const result = solve("input.txt")
const end = performance.now();

console.log(`Execution time: ${end - start} ms`);
console.log("Part A:", result.a);
console.log("Part B:", result.b);
