{
  // Array
  const fruits: string[] = ['🍎', '🍌'];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple : 서로 다른 타입을 가질 수 있는 배열 - 권장❌ 각각의 데이터값의 타입을 알 수 없음
  // -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;
}
