const files = [];
 
while (true) {
  const file = await Deno.open("deno_first_app.ts");
  const fileCount = files.push(file);
  console.log(`Pushing... file #${fileCount}`);

  Deno.close(file.rid);
}