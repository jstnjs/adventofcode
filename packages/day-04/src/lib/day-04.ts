import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

export function challenge01(): number {
  const pairs = data.split('\n');
  let totalPoints = 0;

  pairs.forEach(pair => {
    const [leftSection, rightSection] = pair.split(',');
    const [lLeft, lRight] = leftSection.split('-').map(Number);
    const [rLeft, rRight] = rightSection.split('-').map(Number);

    if (lLeft >= rLeft && lRight <= rRight) {
      totalPoints++;
    } else if (lLeft <= rLeft && lRight >= rRight) {
      totalPoints++;
    }
  })

  return totalPoints;
}

export function challenge02(): number {
  const pairs = data.split('\n');
  let totalPoints = 0;

  pairs.forEach(pair => {
    const [leftSection, rightSection] = pair.split(',');
    const [lLeft, lRight] = leftSection.split('-').map(Number);
    const [rLeft, rRight] = rightSection.split('-').map(Number);

    if (lLeft <= rRight && rLeft <= lRight) {
      totalPoints++;
    }
  })

  return totalPoints;
}
