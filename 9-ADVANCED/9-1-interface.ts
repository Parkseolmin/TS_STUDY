{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class
  // class Post1 implements PositionType {
  //   x: number;
  //   y: number;
  // }
  // class Post2 implements PositionInterface {
  //   x: number;
  //   y: number;
  //   z: number;
  // }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // Only interfaces can be merged. - 타입은 같은 이름의 인터페이스들을 병합할 수 있음
  interface PositionInterface {
    z: number;
  }

  // Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}
