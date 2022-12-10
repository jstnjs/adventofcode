import * as fs from "fs";
import path from 'path';

interface Point {
  x: number;
  y: number;
}

const rope: Point[] = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
]

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

export function day0902(): number {
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

    const head = { ...rope[0] }

    for (let i = 0; i < Number(amount); i++) {

      switch (dir) {
        case 'R':
          head.x++;
          break;
        case 'L':
          head.x--;
          break;
        case 'U':
          head.y++;
          break;
        case 'D':
          head.y--;
          break;
      }

      rope[0] = head;

      for (let j = 1; j < rope.length; j++) {
        const prev = rope[j - 1];
        const current = rope[j];
        const diffX = prev.x - current.x;
        const diffY = prev.y - current.y;

        if (Math.abs(diffX) > 1) {
          current.x += diffX > 0 ? 1 : -1;

          if (Math.abs(diffY) !== 0) current.y += diffY > 0 ? 1 : -1;
        } else if (Math.abs(diffY) > 1) {
          current.y += diffY > 0 ? 1 : -1;
          if (Math.abs(diffX) !== 0) current.x += diffX > 0 ? 1 : -1;
        }
        rope[j - 1] = prev;
        rope[j] = current;
        setTailPos(rope[9].x, rope[9].y)
      }


    }

  })

  return grid.size;
}
