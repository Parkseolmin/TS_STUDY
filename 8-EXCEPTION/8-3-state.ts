{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      // 여기서는 예제를 위한 간단한 구현을 제공합니다. 실제 애플리케이션에서는 네트워크 상태를 확인하는 로직이 포함되어야 합니다.
      const isConnected = Math.random() > 0.5; // 50% 확률로 연결 성공 또는 실패를 시뮬레이션합니다.
      if (isConnected) {
        return { result: 'success' };
      } else {
        const reason: 'offline' | 'down' | 'timeout' = 'offline'; // 예시를 위해 'offline'을 사용합니다.
        return { result: 'fail', reason };
      }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login(): ResultState {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      const result = this.userService.login();
      if (result.result === 'fail') {
        console.error(`Login failed due to ${result.reason}`);
      } else {
        console.log('Login successful!');
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
