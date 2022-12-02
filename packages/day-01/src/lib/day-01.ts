import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

const groupsTotal = data.split(/\n{2,}/g)
  .map(group => group.split('\n')
    .map(Number)
    .reduce((acc, cv) => acc + cv, 0))


export function challenge01(): number {
  return Math.max(...groupsTotal);
}

export function challenge02(): number {
  return groupsTotal
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((acc, cv) => acc + cv, 0);
}
