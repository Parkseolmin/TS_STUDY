{
  // // Javascript 😥
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript 😆
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // Javascript 😥
  // function jsFetchNum(id) {
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript 😆
  // function fetchNum(id: string): Promise<number> {
  //   // code...
  //   // code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Javascript => TypeScript
  // 옵셔널 파라미터 Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('steve', 'jobs');
  console.log('-----------');
  printName('seolmin');
  console.log('-----------');
  printName('은우');

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...num: number[]): number {
    return num.reduce((a, b) => a + b, 0);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
/**
 * 함수의 확장 기능 사용
 * 옵셔널 파라미터(Optional Parameter)
 * 함수의 매개변수가 선택적일 때 사용합니다. 모든 매개변수 뒤에 ?를 붙여서, 해당 매개변수가 없어도 함수를 호출할 수 있게 합니다.
 * 예) function printName(firstName: string, lastName?: string) {}
 * 기본 매개변수(Default Parameter)
 * 매개변수에 기본값을 제공합니다. 호출 시 해당 매개변수를 생략하면 기본값이 사용됩니다.
 * 예) function printMessage(message: string = 'default message') {}
 * 나머지 매개변수(Rest Parameter)
 * 함수에 전달된 인수의 수가 고정되어 있지 않을 때 사용합니다. 함수 내에서 배열로 인수를 사용할 수 있게 합니다.
 * 예) function addNumbers(...nums: number[]): number {}
 */
