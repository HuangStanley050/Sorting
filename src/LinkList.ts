class NodeLink {
  next: NodeLink | null = null;
  constructor(public data: number) {}
}

class LinkList {
  head: NodeLink | null = null;
  print(): void {
    if (!this.head) {
      return;
    }
    let node: NodeLink | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("Nothing in the list");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  at(index: number): NodeLink {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let counter = 0;
    let node: NodeLink | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }
  add(data: number): void {
    const nodeLink = new NodeLink(data);
    if (!this.head) {
      this.head = nodeLink;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = nodeLink;
  }
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
}
