{
  function checkNotNullBad(arg: number | null): number {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result1 = checkNotNullBad(2);

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result2 = checkNotNullAnyBad(3);

  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const result3 = checkNotNull(2);
  const result4 = checkNotNull(true);
}
