{
  function checkNotNullBad(value: number | null): number {
    if (value === null) {
      throw new Error('not valid number!');
    }
    return value;
  }
  const result1 = checkNotNullBad(2);

  function checkNotNullAnyBad(value: any | null): any {
    if (value === null) {
      throw new Error('not valid number!');
    }
    return value;
  }
  const result2 = checkNotNullAnyBad(3);

  function checkNotNull<T>(value: T | null): T {
    if (value === null) {
      throw new Error('not valid number!');
    }
    return value;
  }

  const result3: number = checkNotNull(2);
  const result4: boolean = checkNotNull(true);
}
