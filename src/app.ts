import { run } from "./running";

async function start(text: string) {
  const response = await run(text);

  if (response == "no") {
    return true;
  } else if (response == "yes") {
    return false;
  }
}

module.exports = start;
