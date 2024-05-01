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

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
      return this.extract(shots);
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private plusSugar(): void {
      console.log('설탕을 추가했어요~🍬');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.plusSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('--------------------------------');
    machine.makeCoffee(1);
  });
}
