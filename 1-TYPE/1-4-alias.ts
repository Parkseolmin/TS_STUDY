{
  /**
   * Type Aliases
   * 복잡한 타입을 단순한 이름으로 참조할 수 있게 해주는 기능
   * 기본적인 타입부터 복잡한 객체, 배열, 함수의 타입까지 다양하게 정의 가능
   *
   * ex) type alias의 기본 구문
   * type TypeName = Type;
   *
   * ex) 기본 타입에 대한 alias
   * type ID = string;
   * type PopularTag = string;
   * type MaybePopularTag = PopularTag | null;  유니언 타입의 별칭
   *
   * ex) 인터페이스 타입 alias
   * type User = {
   *   id: ID;
   *   name: string;
   *   age: number;
   * };
   *
   * const user: User = {
   *   id: 'user-123',
   *   name: 'John Doe',
   *   age: 30
   * };
   *
   * ex) 함수 타입 alias
   * type GreetFunction = (name:sting) => string;
   * const greet: GreetFunction = (name) => `Hello, ${name}`;
   *
   */
  type Text = string;
  const name: Text = 'seolmin';
  const address: Text = 'korea';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'seolmin',
    age: 20,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let seolminName: Name;
  seolminName = 'name';

  type Boal = true;
  const isCat: Boal = true;
}
