{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public 공개설정
  // private  외부에서 접근 할 수 없음
  // protected  외부에서 접근할 수 없지만 이 클래스를 상속받은 자식클래스에서만 접근이 가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    /**
     * 커피머신의 커피콩을 채우는 함수
     */
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans must be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    /**
     * 커피를 만들어 주는 함수
     */
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(10);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        this.internalAge = num;
      }
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('seolmin', 'park');
  user.age = 6;
  console.log(user.age);
}
