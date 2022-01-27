let demomap = new Map([
  ["A", "a"],
  ["B", "b"],
  ["C", "c"],
  ["D", "d"],
  ["E", "e"]

]);
for (let key of demomap) {
  console.log(`Ключ - ${key[0]}, Значение - ${key[1]}`);
}
