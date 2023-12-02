import { readLines } from "https://deno.land/std/io/mod.ts";

const f = await Deno.open("./input.txt", { read: true });

let sum = 0;
for await (const line of readLines(f)) {
  const colonSplit = line.split(":");
  const id = colonSplit[0].split("Game")[1].trim();

  let red = 0;
  let green = 0;
  let blue = 0;

  colonSplit[1].split(";").forEach((color) => {
    color.split(",").forEach((rgb) => {
      let [_, rawValue, color] = rgb.split(" ");
      color = color.trim();
      const value = parseInt(rawValue.trim());

      if (color === "red" && value > red) {
        red = value;
      } else if (color === "green" && value > green) {
        green = value;
      } else if (color === "blue" && value > blue) {
        blue = value;
      }
    });
  });

  sum += (red * green * blue);
}

console.log(`Sum: ${sum}`);
