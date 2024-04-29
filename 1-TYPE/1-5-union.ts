{
  /**
   * Union Types: OR
   * Union Types는 여러 타입 중 하나가 될 수 있는 값을 정의할 때 사용되며,
   * 이를 통해 함수나 변수가 받을 수 있는 값의 범위를 넓히면서도
   * 타입 안전성을 보장할 수 있다.
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  /**
   * 'left' | 'right' | 'up' | 'down'과 같이 문자열 리터럴을 이용해
   * Direction이라는 타입을 정의하고 있음
   * 이는 함수 move의 매개변수로 들어갈 수 있는 값의 범위를
   * 이 네 가지 문자열 중 하나로 제한함.
   */

  function move(direction: Direction) {
    console.log(direction);
  }

  move('left');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState (state)
  // success -> 🎇 body
  // fail -> 🥲 reason

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎇 ${state.response.body}`);
    } else {
      console.log(`🎇 ${state.reason}`);
    }
  }
}
