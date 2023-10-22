const leastBricks = (wall) => {
  const hashMap = {};
  let max = 0;
  wall.forEach((row) => {
    let sum = 0;
    for (let i = 0; i < row.length - 1; i++) {
      sum += row[i];
      hashMap[sum] = hashMap[sum] ? hashMap[sum] + 1 : 1;
      max = Math.max(hashMap[sum], max);
    }
  });
  console.log(hashMap);

  return wall.length - max;
};

// Пример использования
const wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1]
];
const result = leastBricks(wall);
console.log(result); // Вывод: 2
