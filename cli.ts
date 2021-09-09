import { Ask, assertEquals } from "./deps.ts";

const ask = new Ask();

const answers = await ask.prompt([
  {
    name: "textA",
    message: "Text A:",
  },
  {
    name: "textB",
    message: "Text B:",
  },
]) as { textA: string; textB: string };

main(answers.textA, answers.textB);

function main(str1: string, str2: string) {
  try {
    assertEquals(str1, str2);
  } catch (err) {
    console.log(err.message);
  }
}
