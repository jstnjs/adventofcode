import * as fs from "fs";
import path from 'path';

interface Point {
  x: number;
  y: number;
}

const head: Point = {
  x: 0,
  y: 0,
}

const tail: Point = {
  x: 0,
  y: 0,
}

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

export function day09(): number {
  const lines = data.split('\n');

  const grid = new Map();

  const setTailPos = (x: number, y: number) => {
    const tailPosId = `${x}-${y}`;
    if (grid.get(tailPosId) < 1 || grid.get(tailPosId) === undefined) {
      grid.set(tailPosId, 1);
    }
  }

  setTailPos(0, 0);

  lines.forEach(line => {
    const [dir, amount] = line.split(' ');



    if (dir === 'R') {
      for (let i = 0; i < Number(amount); i++) {
        head.x++;

        const diff = Math.abs(head.x - tail.x);
        if (diff < 2) continue;

        tail.x = head.x - 1;
        tail.y = head.y;
        setTailPos(tail.x, tail.y)
      }
    }

    if (dir === 'L') {
      for (let i = 0; i < Number(amount); i++) {
        head.x--;

        const diff = Math.abs(head.x - tail.x);
        if (diff < 2) continue;
        tail.x = head.x + 1;
        tail.y = head.y;
        setTailPos(tail.x, tail.y)
      }
    }

    if (dir === 'U') {
      for (let i = 0; i < Number(amount); i++) {
        head.y++;

        const diff = Math.abs(head.y - tail.y);
        if (diff < 2) continue;
        tail.y = head.y - 1;
        tail.x = head.x;
        setTailPos(tail.x, tail.y)
      }
    }

    if (dir === 'D') {
      for (let i = 0; i < Number(amount); i++) {
        head.y--;

        const diff = Math.abs(head.y - tail.y);
        if (diff < 2) continue;
        tail.y = head.y + 1;
        tail.x = head.x;
        setTailPos(tail.x, tail.y)
      }
    }

  })

  return grid.size;
}
