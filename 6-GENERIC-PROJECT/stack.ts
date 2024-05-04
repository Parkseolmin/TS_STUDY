{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }
    push(value: T): void {
      if (this._size === this.capacity) {
        throw new Error('Stack overflow');
      }
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push('설민 1');
  stack.push('융혁 2');
  stack.push('온유 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  // stack.pop();

  const stack2 = new StackImpl<number>(10);
  stack2.push(123);
  stack2.push(456);
  stack2.push(789);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
  // stack2.pop();
}

/**
 * 스택(Stack)
 * 스택(Stack)은 컴퓨터 과학에서 매우 기본적인 자료구조 중 하나입니다.
 * 이 자료구조는 LIFO(Last In, First Out) 원칙을 따릅니다.
 * 즉, 가장 마지막에 추가된 항목이 가장 먼저 제거되는 구조를 가지고 있습니다.
 * 스택의 주요 연산은 다음과 같습니다:
 
  1. push: 스택의 맨 위에 항목을 추가합니다.
  2. pop: 스택의 맨 위에 있는 항목을 제거하고 그 값을 반환합니다.
  3. peek: 스택의 맨 위에 있는 항목을 반환하지만 제거하지는 않습니다. (이 코드 예제에서는 구현되지 않았습니다.)
  4. size: 스택에 있는 항목의 수를 반환합니다.
 */
