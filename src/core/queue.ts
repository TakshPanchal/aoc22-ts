import { lastItem } from './../utils/array';

export class Queue<T> {
  constructor(private readonly queue: T[] = []) {}

  enqueue(item: T) {
    this.queue.unshift(item);
  }

  dequeue(): T | undefined {
    return this.queue.pop();
  }

  front(): T | undefined {
    return lastItem(this.queue);
  }

  rear(): T | undefined {
    return this.queue[0];
  }

  length(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }
}
