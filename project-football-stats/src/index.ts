import fs from 'fs';

const data = fs.readFileSync("football.csv", {
    encoding: "utf-8"
})
    .split('\n')
    .map((rows: string): string[] => rows.split(','));


