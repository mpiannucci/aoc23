import { readLines } from "https://deno.land/std/io/mod.ts";

const f = await Deno.open("./input.txt", { read: true});

let sum = 0;
for await (const line of readLines(f)) {
    const colonSplit = line.split(":");
    const id = colonSplit[0].split("Game")[1].trim();

    let failed = false;

    colonSplit[1].split(";").forEach(color => {
        color.split(",").forEach(rgb => {
            let [_, rawValue, color] = rgb.split(" ",);
            color = color.trim();
            const value = parseInt(rawValue.trim());

            if (color === "red" && value > 12) {
                failed = true;
            } else if (color === "green" && value > 13) {
                failed = true;
            } else if (color === "blue" && value > 14) {
                failed = true;
            }
        });
    });

    if (!failed) {
        sum += parseInt(id);
    }
}

console.log(`Sum: ${sum}`);