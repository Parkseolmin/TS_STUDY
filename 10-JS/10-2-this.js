console.log(this); // window 글로벌객체

function simpleFunc() {
  console.log(this);
}

window.simpleFunc(); // == simpleFunc()
console.clear();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter);

caller();

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
