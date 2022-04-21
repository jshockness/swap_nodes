// create a f(x)


 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
// write a function that will add 2 linked lists
let l1 = new ListNode(1)
l1.next = new ListNode(5)
l1.next.next = new ListNode(7)
l1.next.next.next = new ListNode(10)
l1.next.next.next.next = new ListNode(12)
l1.next.next.next.next.next = new ListNode(15)

// swap 5 / 12


// current
// 1 => 5 => 7 => 10 => 12 => 15 => null

console.log(l1)