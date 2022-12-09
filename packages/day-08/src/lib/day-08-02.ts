import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

export function day0802(): number {

  const lines = data.split('\n');
  const grid: number[][] = [];

  lines.forEach(line => {
    const trees: number[] = line.split('').map(Number);
    grid.push(trees);
  })

  const getRight = (i: number, j: number) => {
    const currentTree = grid[i][j];
    let treesVisible = 0;

    for (let x = j + 1; x < grid[i].length; x++) {
      treesVisible++;
      if (grid[i][x] >= currentTree) break;
    }

    return treesVisible;

  }

  const getTop = (i: number, j: number) => {
    const currentTree = grid[i][j];
    let treesVisible = 0;

    for (let x = i - 1; x >= 0; x--) {
      treesVisible++;
      if (grid[x][j] >= currentTree) break;
    }

    return treesVisible;
  }

  const getBot = (i: number, j: number) => {
    const currentTree = grid[i][j];
    let treesVisible = 0;

    for (let x = i + 1; x < grid.length; x++) {
      treesVisible++;
      if (grid[x][j] >= currentTree) break;
    }

    return treesVisible;
  }

  const getLeft = (i: number, j: number) => {
    const currentTree = grid[i][j];
    let treesVisible = 0;

    for (let x = j - 1; x >= 0; x--) {
      treesVisible++;
      if (grid[i][x] >= currentTree) break;
    }

    return treesVisible;
  }

  let score = 0;

  for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid[0].length; j++) {
      const right = getRight(i, j);
      const top = getTop(i, j);
      const bot = getBot(i, j);
      const left = getLeft(i, j);

      const treeScore = top * left * bot * right;
      if (treeScore > score) score = treeScore;
    }
  }

  return score;
}
