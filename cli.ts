import { assertEquals, BufReader, Color, readStringDelim } from "./deps.ts";

console.log(
  "Enter multiple-line text and finish entering it by ctrl+D on the beginning of a line.",
);

const reader = new BufReader(Deno.stdin);

const inputs: string[] = [];

console.log(Color.bold("Enter the first text (actual):"));
for await (const input of readStringDelim(reader, String.fromCharCode(26))) {
  inputs.push(input);
}

console.log(Color.bold("Enter the second text (expected):"));
for await (const input of readStringDelim(reader, String.fromCharCode(26))) {
  inputs.push(input);
}

if (!inputs[0] || !inputs[1]) {
  throw new Error("empty input");
}

main(inputs[0], inputs[1]);

function main(str1: string, str2: string) {
  try {
    assertEquals(str1, str2);
    console.log("");
    console.log("");
    console.log(Color.bold("The given two texts are equal."));
  } catch (err) {
    console.log("");
    console.log(err.message);
  }
}
