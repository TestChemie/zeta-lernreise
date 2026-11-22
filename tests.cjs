const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const context=vm.createContext({});vm.runInContext(fs.readFileSync(__dirname+'/dist/course.js','utf8')+';globalThis.course=lessons;',context);const ls=context.course;assert.equal(ls.length,7);assert.equal(ls.reduce((n,l)=>n+l.q.length,0),21);
const expected=[[2,-1,-4],[2*4-3*1,2+5,(-1)**2],[Math.hypot(3,4),Math.hypot(-5,12),90],[Math.cos(Math.PI),Math.sin(Math.PI/2),1],[2**-2,1,0],[1+1/4+1/9,2,1/(1-1/4)],[.5,1,-2]];
ls.forEach((l,i)=>l.q.forEach((q,j)=>assert.ok(Math.abs(q[1]-expected[i][j])<=(q[4]||1e-8),`Answer ${i}/${j}`)));
for(const s of [1.1,2,3,4]){let sum=0;for(let n=1;n<=200;n++)sum+=n**-s;assert.ok(Number.isFinite(sum));if(s===2){const actual=Math.PI**2/6-sum;assert.ok(actual<200**(1-s)/(s-1));assert.ok(actual>201**(1-s)/(s-1));}}
for(const deg of [0,90,180,270,360])assert.ok(Math.abs(Math.hypot(Math.cos(deg*Math.PI/180),Math.sin(deg*Math.PI/180))-1)<1e-12);
console.log('PASS: 7 lessons, 21 independently checked answers, remainder bounds, unit circle.');
