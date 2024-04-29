{
  /**
   * Javascript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array...
   */

  // number
  const num: number = 5;

  // string
  const str: string = 'hello world';

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 😥
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null 😥
  let person: null;
  let person2: string | null;

  // unknown 무슨 타입이 모름 😥
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any  😥
  let anything: any = 0;
  anything = 'hello';

  // void 생략 가능
  function print(): void {
    console.log('hello');
    // return; 생략되어있음
  }

  // never  이 함수를 호출하면 리턴할게 없으니 이 점을 감안해서 코딩해!
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  // object 😥 가능한 명시해야하기 때문에 비추
  let obj: object = [1, 2];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'seolmin' });
  acceptSomeObject({ animal: 'dog' });
}

/**
 * TypeScript의 기본 타입과 특수 타입
 * 기본 타입(Primitive Types)
 * number: 숫자 타입으로 모든 숫자를 포함합니다. 예) const num: number = 5;
 * string: 문자열 타입으로, 문자열 데이터를 다룹니다. 예) const str: string = 'hello world';
 * boolean: 불리언 타입으로, true 또는 false 값을 가집니다. 예) const bool: boolean = true;
 * 특수 타입(Special Types)
 * undefined & null: undefined는 선언된 변수에 값이 할당되지 않은 상태, null은 값이 비어있음을 명시적으로 표현합니다.
 * unknown: 어떤 타입의 값이 올지 모르는 경우 사용합니다. 예) let notSure: unknown = 0;
 * any: 어떤 타입의 값이든 할당할 수 있으며, 타입 체크를 하지 않습니다. 예) let anything: any = 0;
 * void: 함수에서 아무것도 반환하지 않을 때 사용합니다. 예) function print(): void {}
 * never: 절대 반환하지 않는 함수의 반환 타입으로 사용합니다. 예) function throwError(message: string): never {}
 * object: 객체 타입을 나타냅니다. 예) let obj: object = [1, 2];
 * 결합 타입
 * Union Type: 두 가지 이상의 타입을 허용합니다. 예) let age: number | undefined;
 */
