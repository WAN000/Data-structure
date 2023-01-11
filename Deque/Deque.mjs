import { DoublyLinkedList } from "../DoublyLinkedList/DoublyLinkedList.mjs";

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  /**
   * printAll - 모든 데이터 출력
   */
  printAll() {
    this.list.printAll();
  }

  /**
   * addFirst - head에 데이터 삽입
   */
  //   addFirst(data) {
  //     this.list.insertAt(0, data);
  //   }

  addFirst(data) {
    return this.list.insertAt(0, data);
  }

  /**
   * removeFirst - head에 데이터 제거
   */
  removeFirst() {
    return this.list.deleteAt(0);
  }

  /**
   * addLast - tail에 데이터 삽입
   */
  addLast(data) {
    this.list.insertAt(this.list.count, data);
  }

  //   addLast(data) {
  //     this.list.insertLast(data);
  //   }

  /**
   * removeLast - tail에서 데이터 제거
   */
  removeLast() {
    return this.list.deleteLast();
  }

  /**
   * isEmpty - 비어 있는지 체크
   */
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Deque };
