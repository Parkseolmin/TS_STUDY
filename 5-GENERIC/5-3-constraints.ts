{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee {
    pay(): void {
      console.log('full time!!');
    }
    workFullTime() {}
  }
  class PartTimeEmployee {
    pay(): void {
      console.log('part time!!');
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 안 좋다.
  // function pay(employee: any) {
  //   employee.pay();
  //   return employee;
  // }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const 설민 = new FullTimeEmployee();
  const 윤혁 = new PartTimeEmployee();
  설민.pay();
  윤혁.pay();
  const 설민AfterPay = pay(설민);
  const 윤혁AfterPay = pay(윤혁);

  const obj = {
    name: 'seolmin',
    age: 20,
  };

  const obj2 = {
    animal: '🐕',
  };
  console.log(getValue(obj, 'name'));
  console.log(getValue(obj, 'age'));
  console.log(getValue(obj2, 'animal'));

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
