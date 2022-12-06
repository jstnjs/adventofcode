import * as fs from "fs";
import path from 'path';

const data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
  .replace(/\r/g, "")
  .trim();

const isUnique = (str: string) => !str.match(/(.)(?=.*\1)/);
 
export function challenge(distinct: number): number {
  let marker = 0;

  for(let i = 0; i < data.length; i++) {
    const start = 0 + i;
    const end = distinct + i;
    const substring = data.substring(start, end);

    if(isUnique(substring)) {
      marker = end;
      break;
    }
  }

  return marker;  
}
