// deno run --allow-read .\async_vs_sync\async_vs_sync.ts

const currentWorkingDirectory = Deno.cwd();
console.log(currentWorkingDirectory);

for await (const dirEntry of Deno.readDir(currentWorkingDirectory)) {
  console.log(dirEntry.name);
}