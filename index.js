const fs = require('fs');

const data = fs.readFileSync('./demo/main.ns', 'utf-8');

let parsed = [];

const parseNS = (str) => {
  let match;
  if ((match = str.match(/print/))) {
    parsed.push({ type: 'PRINT', data: match.input.split('print: ')[1] });
    console.log(parsed);
  }
};

data.split(/\r?\n/).forEach((line) => {
  parseNS(line);
});
