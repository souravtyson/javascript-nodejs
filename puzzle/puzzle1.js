/* Write a JavaScript function called reverseLinkedList that takes in the head of a singly linked list and returns the head of the reversed linked list. Each node in the linked list is represented by an object with the properties value to hold the node's value, and next to hold the reference to the next node in the list. You need to reverse the direction of the links while maintaining the values.

i/p -     1 -> 2 -> 3 -> 4 -> 5
o/p -     5 -> 4 -> 3 -> 2 -> 1

*/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let listNode1 = new ListNode(5);
let listNode2 = new ListNode(4, listNode1);
let listNode3 = new ListNode(3, listNode2);
let listNode4 = new ListNode(2, listNode3);
let listNode5 = new ListNode(1, listNode4);

function printLinkedList(listNode) {
  while (listNode != null) {
    console.log(listNode.value);
    listNode = listNode.next;
  }
}

// printLinkedList(listNode5);

// 1 -> 2 -> 3 -> 4 -> 5
function reverseLinkedList(node) {
  let prev = null;
  let current = node;
  let next = null;
  while (current != null) {
    console.log('*******');
    // console.log(current);
    next = current.next;
    console.log(`backup - ${current.next}`);
    current.next = prev;
    console.log(`prev - ${prev}`);
    prev = current;
    console.log(`current - ${current}`);
    current = next;
    console.log(`next - ${next}`);
  }
  return prev;
}

let reversed = reverseLinkedList(listNode5);

// printLinkedList(reversed);
