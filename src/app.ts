import { run } from "./running";

async function start() {
  const response = await run("ola");
  console.log(response);
}

start();
