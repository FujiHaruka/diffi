import { assertEquals, BufReader, Color } from "./deps.ts";

console.log(
  "You can enter multiple-line text and finish entering text by ctrl+D on the beginning of a line",
);
console.log(Color.bold("Enter the first text (actual):"));

const readerA = new BufReader(Deno.stdin);
const inputA = await readerA.readString(String.fromCharCode(26));

console.log(Color.bold("Enter the second text (expected):"));

const readerB = new BufReader(Deno.stdin);
const inputB = await readerB.readString(String.fromCharCode(26));

if (!inputA || !inputB) {
  throw new Error("empty input");
}

main(inputA, inputB);

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
