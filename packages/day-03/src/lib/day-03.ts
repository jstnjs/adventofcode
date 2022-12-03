import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

const getCharScore = (char: string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return alphabet.indexOf(char) + 1;
}

export function challenge01(): number {
  let totalpoints = 0;
  const rugsacks = data.split('\n');

  rugsacks.map(rugsack => {
    const half = Math.ceil((rugsack.length / 2));
    const firstCompartment = rugsack.slice(0, half);
    const secondCompartment = rugsack.slice(half);

    for (let i = 0; i < firstCompartment.length; i++) {
      const char = firstCompartment[i];
      if (secondCompartment.includes(char)) {
        totalpoints += getCharScore(char);
        break;
      }
    }
  })

  return totalpoints;
}

export function challenge02(): number {
  const rugsacks = data.split('\n')
  let totalpoints = 0;

  for (let i = 0; i < rugsacks.length; i += 3) {
    const first = rugsacks[i].split("");
    const second = rugsacks[i + 1];
    const third = rugsacks[i + 2];

    for (let j = 0; j < first.length; j += 1) {
      const char = first[j];

      if (second.includes(char) && third.includes(char)) {
        totalpoints += getCharScore(char);
        break;
      }
    }
  }

  return totalpoints;
}
