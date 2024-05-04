{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time!!');
    }
    workFullTime() {}
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time!!');
    }
    workPartTime() {}
  }
  // 인터페이스를 구현하는 객체를 생성자의 인수로 받음.
  // 이는 각 클래스가 해당 인터페이스가 제공하는 메서드를 사용할 수 있는 객체를 필요로 한다는 말
  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 안 좋다.
  // function pay(employee: any) {
  //   employee.pay();
  //   return employee;
  // }
  //
  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  const seolmin = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  seolmin.workFullTime();
  bob.workPartTime();

  const seolminAfterPay = pay(seolmin);
  const bobAfterPay = pay(bob);
}
