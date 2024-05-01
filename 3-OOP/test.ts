{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffee(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    private grindBeans(shots: number) {
      console.log(`${shots}개의 커피콩을 그라인딩 중`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('따뜻하게 데우는 중...🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`${shots}샷의 커피를 추출하는 중...☕`);
      return {
        shots,
        hasMilk: false,
      };
    }

    clean() {
      console.log('커피머신을 청소하는 중...🫧');
    }

    // 커피머신에 커피콩을 채우는 함수
    fillCoffee(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans must be greater than 0');
      }
      this.coffeeBeans += beans;
      console.log(`${beans}개의 커피콩을 채웠습니다!`);
    }

    // 커피 만들어 주는 함수
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker.makeCoffee(2);
  maker.fillCoffee(14);
  maker.clean();
  console.log(maker);

  console.log('------------------------------------');

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(14);
  maker2.makeCoffee(2);
  console.log(maker2);
}
