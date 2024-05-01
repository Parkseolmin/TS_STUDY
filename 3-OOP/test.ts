{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number, private milk: MilkFrother) {
      this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots: number) {
      console.log(`${shots}개의 커피콩을 그라인딩 중`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
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

    // 샷을 내리는 메서드
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      return this.milk.makeMilk(coffee);
    }

    // 커피콩 채우는 메서드
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value must be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    // 커피머신 청소하는 메서드
    clean() {
      console.log('머신을 청소하는 중...🫧');
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 좋은 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();

  const sweetCandyMachine = new CoffeeMachine(7, cheapMilkMaker);
  const sweetMachine = new CoffeeMachine(12, fancyMilkSteamer);

  console.log(sweetCandyMachine.makeCoffee(1));
}
