/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
  // Trường hợp cơ bản
  if (!head || !head.next || k === 0) {
    return head;
  }

  let count = 1;
  let current = head;

  // Tìm cuối danh sách và đếm số lượng phần tử
  while (current.next) {
    current = current.next;
    count++;
  }

  // Tính số lần xoay thực sự
  let rotateCount = k % count;

  // Nếu số lần xoay bằng 0, trả về danh sách ban đầu
  if (rotateCount === 0) {
    return head;
  }

  // Tìm vị trí cuối danh sách sau khi xoay
  let rotateEnd = head;
  for (let i = 1; i < count - rotateCount; i++) {
    rotateEnd = rotateEnd.next;
  }

  // Lưu phần tử sau rotateEnd để trở thành đầu danh sách mới
  let newHead = rotateEnd.next;

  // Di chuyển rotateEnd tới cuối danh sách
  while (rotateEnd.next) {
    rotateEnd = rotateEnd.next;
  }

  // Gắn phần tử sau rotateEnd vào đầu danh sách ban đầu
  rotateEnd.next = head;

  // Đặt rotateEnd thành NULL để kết thúc danh sách sau khi xoay
  head = newHead;
  rotateEnd.next = null;

  return head;
}

// Ví dụ:
// 1 -> 2 -> 3 -> 4 -> 5
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
const k = 2;
const rotatedHead = rotateRight(head, k);
console.log(rotatedHead);
