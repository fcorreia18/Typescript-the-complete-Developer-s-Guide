import fs from 'fs';

const data = fs.readFileSync("football.csv", {
    encoding: "utf-8"
});
console.log(data);
