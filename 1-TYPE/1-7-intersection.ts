{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyee: number;
    work: () => void;
  };

  function internWorker(person: Student & Worker) {
    console.log(person.name, person.empolyee, person.work());
  }

  internWorker({
    name: 'seolmin',
    score: 1,
    empolyee: 123,
    work: () => {},
  });
}

/**
 * Union Types은 타입이 여러 타입 중 하나일 수 있다는 것을 나타냄.
 * 즉, 변수에 할당될 수 있는 타입이 여러 개이며,
 * 그 중 하나만 선택될 수 있다는 것을 의미함.
 * 이는 논리적인 "OR"과 유사하다.
 *
 * Intersection Types은 여러 타입을 모두 만족하는 하나의 타입을 나타냄.
 * 즉, 여러 타입의 특성을 모두 갖는 단일 타입이며,
 * 이는 논리적인 "AND"와 유사하다.
 */
