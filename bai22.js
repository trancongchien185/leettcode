/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let first = head;

  while (first && first.next) {
    let second = first.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
    first = first.next;
  }

  return dummy.next;
};
