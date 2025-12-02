const fs = require('node:fs');

const solve = f => fs.readFileSync(f, "utf8").split(",").map(e => e.split("-").map(e => +e)).map(([s, e]) => Array.from({ length: e - s + 1 }, (_, i) => i + s)).map(arr => ({a: arr.filter(n => /^(\d+)\1$/.test(n+"")), b: arr.filter(n => /^(\d+)\1+$/.test(n+""))})).reduce((r, o) => ({a: r.a + o.a.reduce((x, y) => x + y, 0),b: r.b + o.b.reduce((x, y) => x + y, 0)}),{ a: 0, b: 0 });

const result = solve("input.txt");
console.log("Part A:", result.a);
console.log("Part B:", result.b);

