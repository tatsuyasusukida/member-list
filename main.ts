import { readFileSync, writeFileSync } from "fs";
import Mustache from "mustache";

function main() {
  const text = readFileSync("input.txt", "utf-8");
  const members = text.split("\n\n\n\n").map((str) => {
    const pieces = str.split("\n\n");
    const [name, kana, title, image] = pieces[0].split("\n");
    const text = pieces[1].split("\n").join('');
    const header = pieces[2];
    const items = pieces[3].split("\n").map((line) => ({ line }));

    return { name, kana, title, image, text, header, items };
  });

  const template = readFileSync("template.html", "utf-8");
  const html = Mustache.render(template, { members });

  writeFileSync("output.html", html);
}

main();
