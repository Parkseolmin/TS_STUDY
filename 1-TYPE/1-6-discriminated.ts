{
  /**
   *  Discriminated Union
   * 여러 타입 중 하나만을 가질 수 있는 데이터 구조로, 각 타입을
   * 구분할 수 있는 고유한 상수(보통 문자열 또는 숫자)를 가진다.
   */
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState (state)
  // success -> 🎇 body
  // fail -> 🥲 reason

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎇 ${state.response.body}`);
    } else {
      console.log(`🎇 ${state.reason}`);
    }
  }
}
