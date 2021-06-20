setTimeout(()=> console.log('check'));
setTimeout(()=> console.log('check2'), 1000);

console.log(Deno.metrics());