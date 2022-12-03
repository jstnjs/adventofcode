import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();


export function challenge01(): number {
  const rounds = data.split('\n');
  let totalPoints = 0;

  const myMap = new Map<string, number>([
    ['A X', 4],
    ['A Y', 8],
    ['A Z', 3],
    ['B X', 1],
    ['B Y', 5],
    ['B Z', 9],
    ['C X', 7],
    ['C Y', 2],
    ['C Z', 6],
  ]);

  rounds.map(round => totalPoints += myMap.get(round) ?? 0)
  return totalPoints;
}

export function challenge02(): number {
  const rounds = data.split('\n');
  let totalPoints = 0;

  const myMap = new Map<string, number>([
    ['A X', 3],
    ['A Y', 4],
    ['A Z', 8],
    ['B X', 1],
    ['B Y', 5],
    ['B Z', 9],
    ['C X', 2],
    ['C Y', 6],
    ['C Z', 7],
  ]);

  rounds.map(round => totalPoints += myMap.get(round) ?? 0);
  return totalPoints;
}
