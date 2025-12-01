import fs from 'fs'

const solve = f => fs.readFileSync(f, "utf8").split("\n").map(l => ({d: l[0], c: +l.slice(1)})).reduce(({_d, a, b}, {d, c}) => { d == "L" && (c *= -1, b += (((_d + c) % 100 == 0 ? 1 : 0) - (_d % 100 == 0 ? 1 : 0))); b += Math.abs(Math.floor(_d / 100) - Math.floor((_d += c) / 100)) + ((_d % 100 == 0) ? (a++, 0) : 0); return {_d, a, b};}, {_d: 50, a: 0, b: 0});

const result = solve("input.txt");
console.log("Part A:", result.a);
console.log("Part B:", result.b);
