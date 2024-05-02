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

  // 우유
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): boolean {
      console.log('우유를 스팀하는 중...');
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
    private steamMilk(): boolean {
      console.log('Fancy한 우유를 스팀하는 중...');
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
    private steamMilk(): boolean {
      console.log('Cold한 우유를 스팀하는 중...');
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

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕
  class CandySugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('캔디설탕으로부터 설탕을 가져오는 중...');
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

  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('순수설탕으로부터 설탕을 가져오는 중...');
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 머신
  class CoffeeMachine implements CoffeeMaker {
    // 하나의 클래스에서 공유할 경우 static
    // 외부에서 접근할 필요가 없을 경우 private
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(
      coffeeBeans: number,
      milk: MilkFrother,
      sugar: SugarProvider
    ): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans, milk, sugar);
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      console.log(`${shots}잔 분량의 커피콩을 그라인딩 중...`);
    }

    private preheat() {
      console.log('따뜻하게 데우는 중...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`${shots}개의 샷을 내리는 중`);
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

    // 커피콩 채우는 함수 - 외부에서 접근해도 됨
    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error('value must be greater than 0');
      }
      this.coffeeBeans += coffeeBeans;
      console.log(`${coffeeBeans}개의 커피콩을 추가로 채웠습니다.`);
    }

    clean() {
      console.log('커피 머신을 청소하는 중...');
    }
  }

  // 우유 인스턴스
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  // 설탕 인스턴스
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  const maker = new CoffeeMachine(14, cheapMilkMaker, sugar);
  const coffee = maker.makeCoffee(1);
  console.log(coffee);
}
