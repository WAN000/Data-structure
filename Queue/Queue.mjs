import { DoublyLinkedList } from "../DoublyLinkedList/DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  /**
   * 데이터 삽입 <---> Stack의 push와 동일
   */
  enqueue(data) {
    this.list.insertAt(0, data);
  }

  /**
   * 데이터 제거 <---> Stack의 pop과 동일
   */
  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }
  /**
   * 데이터 참조 <---> Stack의 peek과 동일
   */
  front() {
    return this.list.tail;
  }

  /**
   * 비었는지 확인
   */
  isEmpty() {
    return this.list.count == 0;
  }
}

export { Queue };
