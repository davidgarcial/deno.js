import { join } from "https://deno.land/std/path/mod.ts";

async function readFile() {
    const path = join(".", "deno_first_app.ts");
    const data = await Deno.readFile(path);
    console.log(data);
}

await readFile();