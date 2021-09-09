import { assertEquals, BufReader } from "./deps.ts";

console.log("Text A");

const readerA = new BufReader(Deno.stdin);
const inputA = await readerA.readString(String.fromCharCode(26));

console.log("Text C");

const readerB = new BufReader(Deno.stdin);
const inputB = await readerB.readString(String.fromCharCode(26));

if (!inputA || !inputB) {
  throw new Error("empty input");
}

main(inputA, inputB);

function main(str1: string, str2: string) {
  try {
    assertEquals(str1, str2);
  } catch (err) {
    console.log(err.message);
  }
}
