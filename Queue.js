class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(value) {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueues = new Queue();
myQueues.enqueue("salman");
myQueues.enqueue("ahmad");
myQueues.enqueue("saad");
myQueues.enqueue("ashyam");
myQueues.peek();
myQueues.dequeue();
myQueues.dequeue();
myQueues.dequeue();
myQueues.dequeue();
