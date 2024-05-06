// Java : Exception
// Javascript : Error
// Error(Exception) Handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`File ${fileName} not exist!`);
  }
  return 'file contexts📜';
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = 'not exist!';
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`에러를 잡음: ${error}`);
  } finally {
    closeFile(fileName);
    console.log('무조건 실행됨');
  }
}
run();
