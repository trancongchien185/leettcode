// Add Two Numbers
//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Bạn được cấp hai danh sách liên kết không trống, biểu thị hai số nguyên không âm. Các chữ số được lưu theo thứ tự ngược lại và mỗi nút của chúng chứa một chữ số. Cộng hai số và trả về tổng dưới dạng danh sách liên kết.

// Bạn có thể giả sử hai số không chứa số 0 đứng đầu, ngoại trừ chính số 0.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0); // Khởi tạo nút giả

  let p1 = l1;
  let p2 = l2;
  let current = dummyNode;
  let carry = 0;

  while (p1 !== null || p2 !== null) {
    let sum = carry;

    if (p1 !== null) {
      sum += p1.val;
      p1 = p1.next;
    }

    if (p2 !== null) {
      sum += p2.val;
      p2 = p2.next;
    }

    let newNode = new ListNode(sum % 10);
    current.next = newNode;
    current = current.next;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    let newNode = new ListNode(carry);
    current.next = newNode;
  }

  return dummyNode.next;
};
