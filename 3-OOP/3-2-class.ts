{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  //
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

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

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}
/**
 * static BEANS_GRAMM_PER_SHOT: number = 7;
 * 위의 상수가 static으로 선언된 이유는 이 값을 각 CoffeeMaker 인스턴스별로 다르게 관리할 필요가 없기 때문이다.
 * 대신 이 값은 CoffeeMaker 클래스 자체에 속하며, 모든 인스턴스 간에 공유된다.
 * 여기서 BEANS_GRAMM_PER_SHOT는 커피 한 잔을 만들 때 필요한 커피콩의 그램 수를 나타낸다.
 * 이값은 커피를 만드는 모든 기계에 대해 동일하므로 클래스 레벨에서 하나만 있으면 충분하고,
 * 각각의 인스턴스마다 별도로 저장할 필요가 없다.
 */
