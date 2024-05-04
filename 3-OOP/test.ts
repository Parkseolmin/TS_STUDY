{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //우유 종류
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('값싼 우유 스팀하는 중....');
      return true;
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('고급 우유 스팀하는 중....');
      return true;
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log('최고급 우유 스팀하는 중....');
      return true;
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  // 설탕 종류
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('캔디설탕을 가져오는 중...');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class FancySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('고급설탕을 가져오는 중...');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('coffeeBeans must be greater than 0');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      console.log(`${shots}개 커피를 위한 커피콩을 그라인딩 중...`);
    }

    private preheat() {
      console.log('커피를 데우는 중...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`${shots}개의 커피를 추출 중...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('coffeeBeans must be greater than 0');
      }
      this.coffeeBeans += coffeeBeans;
    }
    clean() {
      console.log('커피머신을 청소하는 중...');
    }
  }

  // 우유
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const colidMilkMaker = new ColdMilkSteamer();

  // 설탕
  const candySugar = new CandySugarMixer();
  const fancySugar = new FancySugarMixer();

  const maker = new CoffeeMachine(14, colidMilkMaker, fancySugar);
  const coffee = maker.makeCoffee(2);
  console.log(coffee);
}
