import { readLines } from "https://deno.land/std/io/mod.ts";

const f = await Deno.open("./input.txt", { read: true});

let sum = 0

const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

function extractDigit(value: string): string {
  switch (value) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6"
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      return value;
  }
}

for await (const line of readLines(f)) {
  const digits = [...line.matchAll(regex)];
  if (!digits || (digits?.length ?? 0) < 1) {
    continue;
  }

  const first = extractDigit(digits[0][1]);
  const last = extractDigit(digits.at(-1)![1]);

  const raw = `${first}${last}`;
  sum += parseInt(raw);
}

console.log(`Sum: ${sum}`);