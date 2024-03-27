import { run } from "./running";

async function start() {
  const response = await run("ola");

  if (response == "no") {
    return true;
  } else if (response == "yes") {
    return false;
  }
}

module.exports = start;
start();
