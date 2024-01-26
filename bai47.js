const s = "Hello World";

function length(s) {
  s = s.trim();
  console.log(s.length);
  const lastSpaceIndex = s.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return s.length;
  } else {
    return s.slice(lastSpaceIndex + 1).length;
  }
}

const lastWordLength = length(s);
console.log(lastWordLength);
