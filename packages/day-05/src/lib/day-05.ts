import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "");

const [top, bottom] = data.split('\n\n');

// console.log('top', top)
// console.log('bottom', bottom)

const outcome: any[][] = [];
const stacks = top.split('\n').reverse().slice(1);

for (let i = 0; i < stacks[0].length + 1; i++) {
  outcome.push([])
}

stacks.map((stack => {
  for (let i = 0; i < stack.length; i++) {
    if (stack.charAt(i).match(/[a-zA-Z]/)) {
      outcome[Math.floor((i / 4))]
        .push(stack.charAt(i));

    }
  }
}))

const moves = bottom.split('\n');
moves.pop();

export function challenge01(): string {
  moves.forEach(move => {
    const [count, rest] = move.replace("move ", "").split(" from ");
    const [from, to] = rest.split(" to ");

    for (let i = 0; i < Number(count); i++) {
      const pop = outcome[Number(from) - 1].pop();
      outcome[Number(to) - 1].push(pop);
    }

  })
  return 'day-05';
}

export function challenge02(): string {

  moves.forEach(move => {
    const [count, rest] = move.replace("move ", "").split(" from ");
    const [from, to] = rest.split(" to ");
    const items = outcome[(Number(from) - 1)].splice(Number(-count));
    items.forEach(item => outcome[Number(to) - 1].push(item));
  })

  return 'day-05';

}
