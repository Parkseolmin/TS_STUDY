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
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    /**
     * 커피콩을 갈아주는 메서드
     * @param shots 그라인딩 할 커피콩
     */
    private grindBeans(shots: number) {
      console.log(`${shots}개의 커피콩을 그라인딩 중`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    /**
     * 데워주는 메서드
     */
    private preheat(): void {
      console.log('따뜻하게 데우는 중...🔥');
    }

    /**
     * 샷을 추출하는 메서드
     * @param shots 추출할 샷
     * @returns shot : 추출할 샷, hasMilk:우유 여부
     */
    private extract(shots: number): CoffeeCup {
      console.log(`${shots}샷의 커피를 추출하는 중...☕`);
      return {
        shots,
        hasMilk: false,
      };
    }

    /**
     * 커피를 만들어 주는 함수
     */
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
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

    clean() {
      console.log('커피머신을 청소하는 중...🫧');
    }
  }

  // ------------------------------------------------
  // 상속하기 위해서 construction을 public이나 protected로 되어있어야함

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
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

  // 최고급 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
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

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 캔디 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar candy 🍬');
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

  // 좋은 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar 🍬');
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

  // 우유
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // 설탕
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 머신
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkSteamer, noSugar);
  const sweetCoffeeLatteeMachine = new CoffeeMachine(
    12,
    cheapMilkMaker,
    candySugar
  );

  console.log(sweetCandyMachine);
  console.log(sweetMachine);
  console.log(latteMachine);
  console.log(coldLatteMachine);
  console.log(sweetCoffeeLatteeMachine);
}
