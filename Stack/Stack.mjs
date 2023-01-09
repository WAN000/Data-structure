import { LinkedList } from "../LinkedList/LinkedList.mjs";

class Stack {
  //생성자 초기화
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * 데이터 삽입
   */
  push(data) {
    this.list.insertAt(0, data);
  }

  /**
   * 데이터 제거
   */
  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  /**
   * 데이터 참조
   */
  peek() {
    return this.list.getNodeAt(0);
  }

  /**
   * 비어있는지 체크
   */
  isEmpty() {
    return this.list.count == 0;
  }
}

export { Stack };
