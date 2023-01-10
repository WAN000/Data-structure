class Node {
  constructor(data, next = null, prev = null) {
    //이전 노드를 가리키기 위해서 생성자에 prev 프로퍼티 추가
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // 큐를 규현하기 위해 리스트의 끝을 가리키는 프로퍼티 추가
    this.count = 0;
  }

  /**
   * 1. 모든 데이터 출력
   */
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  /**
   * 2. 모든 데이터 제거
   */
  clear() {
    this.head = null;
    this.count = 0;
  }

  /**
   * 3. 인덱스 삽입 - 원하는 인덱스에 데이터 삽입.
   */
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let newNode = new Node(data);

    // head에 삽입하는 경우
    if (index == 0) {
      newNode.next = this.head;
      if (this.head != null) {
        // head가 null 일 때 에러가 나지 않도록 하기 위함
        this.head.prev = newNode; // head가 null이 아니면 이전 노드(this.head.prev)를 새로운 노드로 설정
      }
      this.head = newNode;
      // tail에 삽입하는 경우
    } else if (index == this.count) {
      newNode.next = null; // 새로운 노드의 다음 노드를 null로 설정
      newNode.prev = this.tail; // 새로운 노드의 이전 노드를 tail이 가리키던 노드로 설정
      this.tail.next = newNode; // tail이 가리키던 노드의 다음 노드를 새로운 노드로 설정
      // 그외 위치에 삽입하는 경우
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode; // 새로운 노드의 이전 노드를 currentNode로 설정
      currentNode.next = newNode;
      newNode.next.prev = newNode; // 새로 삽입한 노드의 다음 노드의 이전 노드를 새로 삽입한 노드로 설정
    }

    if (newNode.next == null) {
      // 새로 삽입한 노드가 마지막 노드라면
      this.tail = newNode;
    }
    this.count++;
  }

  /**
   * 4. 마지막 삽입
   */
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  /**
   * 5. 인덱스 삭제 - 원하는 인덱스의 데이터 삭제.
   */
  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;

    if (index == 0) {
      let deletedNode = this.head;
      //데이터가 1개 일 때
      if (this.head.next == null) {
        this.head = null;
        this.tail = null;
        //데이터가 2개 이상일 때
      } else {
        this.head = this.head.next; // head의 다음 노드를 새로운 head로 설정
        this.head.prev = null; // 새로 head가 된 노드의 이전 노드를 null로 설정
      }
      this.count--;
      return deletedNode;
      // 마지막 노드를 제거하는 경우
    } else if (index == this.count - 1) {
      let deletedNode = this.tail; // taildㅣ 가리키는 노드를 삭제할 노드로 설정
      this.tail.prev.next = null; // tail의 이전 노드의 다음 노드를 null로 설정
      this.tail = this.tail.prev; // tail 이전 노드를 tail로 설정
      this.count--;
      return deletedNode;
      // head와 tail을 제거하는 경우가 아닌 경우
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode; // 현재 노드의 다음 노드의 이전 노드를 현재 노드로 설정
      this.count--;
      return deletedNode;
    }
  }

  /**
   * 6. 마지막 삭제
   */
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  /**
   * 7. 인덱스 읽기 - 원하는 인덱스의 데이터를 읽기.
   */
  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { Node, DoublyLinkedList };
