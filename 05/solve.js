const fs = require('fs')

// const solve=f=>(o={a:0,b:0},_s="\r\n",_j="-",[r,i]=fs.readFileSync(f, "utf-8").split(_s+_s).map(e=>e.split(_s)),r=(m=[],r.map(e=>e.split(_j).map(Number)).sort((a,b)=>a[0]-b[0]).forEach(([s,e])=>(!m.length||s>m[m.length-1][1])?m.push([s,e]):m[m.length-1][1]=Math.max(m[m.length-1][1],e)), m),o.b=r.reduce((a,[x,y])=>a+y-x+1,0),i.map(e=>((v,r,f=(l=0,h=r.length-1)=>l>h?0:((m=l+h>>1),([s,e]=r[m]),v<s?f(l,m-1):v>e?f(m+1,h):o.a++))=>f())(e,r)),o)
const solve=f=>{const o={a:0,b:0},[_r,_i]=f.split(/\r?\n\r?\n/).map(e=>e.split(/\r?\n/)),m=[],r=_r.map(e=>e.split(`-`).map(Number)).sort((a,b)=>a[0]-b[0]);for(const [s,e]of r)!m.length||s>m[m.length-1][1]?m.push([s,e]):m[m.length-1][1]=Math.max(m[m.length-1][1],e);for(const [x,y]of m)o.b+=y-x+1;for(const v of _i){let l=0,h=m.length-1,n=+v;while(l<=h){const mid=l+h>>1,[s,e]=m[mid];if(n<s)h=mid-1;else if(n>e)l=mid+1;else{o.a++;break;}}}return o}

const times = []
const ITERATIONS = 10000;
const data = fs.readFileSync('input.txt', 'utf-8')

for(let i=0; i < ITERATIONS; i++){
    const start = performance.now();
    solve(data)
    const end = performance.now();
    times.push(end-start)
}

console.log('Results')
console.log(`Min   : ${Math.min(...times).toFixed(9)/ 1000} Seconds`)
console.log(`Avg   : ${((times.reduce((a,b) => a+b,0)/ ITERATIONS) / 1000).toFixed(9) } Seconds`)
console.log(`Median: ${times.sort((a,b) =>a-b)[Math.floor(times.length/2)].toFixed(9)/ 1000} Seconds`)
console.log(`Range : ${(Math.max(...times) - Math.min(...times)).toFixed(9)/ 1000} Seconds`)
console.log(`Max   : ${Math.max(...times).toFixed(9)/ 1000} Seconds`)
fs.writeFileSync("output.txt", times.join(","))