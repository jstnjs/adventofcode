import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

export function day08(): number {

  const lines = data.split('\n');
  const grid: number[][] = [];

  lines.forEach(line => {
    const trees: number[] = line.split('').map(Number);
    grid.push(trees);
  })

  const checkRight = (i: number, j: number) => {
    const currentTree = grid[i][j];
    let isVisible = true;

    for (let x = j; x < grid[i].length; x++) {
      const right: number = grid[i][x];

      if (x === j) continue;
      if (right >= currentTree) isVisible = false;
    }

    if (isVisible) return true;
    return false;
  }

  const checkTop = (i: number, j: number) => {
    const currentTree = grid[i][j];
    let isVisible = true;

    for (let x = 0; x < i; x++) {
      const right: number = grid[x][j];

      if (x === i) continue;
      if (right >= currentTree) isVisible = false;
    }

    if (isVisible) return true;
    return false;
  }

  const checkBottom = (i: number, j: number) => {
    const currentTree = grid[i][j];
    let isVisible = true;

    for (let x = i; x < grid.length; x++) {
      const bottom: number = grid[x][j];

      if (x === i) continue;
      if (bottom >= currentTree) isVisible = false;
    }

    if (isVisible) return true;
    return false;
  }



  let left = -1;
  let totalVisibleTrees = 0;

  for (let i = 0; i < grid.length; i++) {
    left = -1;

    for (let j = 0; j < grid[0].length; j++) {
      const currentTree = grid[i][j];

      if (currentTree > left) {
        totalVisibleTrees++;
        left = currentTree;
        continue;
      }

      if (checkRight(i, j)) {
        totalVisibleTrees++;
        continue;
      }

      if (checkTop(i, j)) {
        totalVisibleTrees++;
        continue;
      }

      if (checkBottom(i, j)) {
        totalVisibleTrees++;
        continue;
      }
    }
  }

  return totalVisibleTrees;
}
