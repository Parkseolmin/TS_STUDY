{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 10;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, WEDNESDAY: 1, TUESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday,
    Sunday,
  }
  console.log(Days.Thursday);
  let day: Days = Days.Saturday;
  day = Days.Saturday;
  day = 1;
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
}
