// create a f(x) that swaps the give value 


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
//1
//10
console.log(l1)

////   1 =>       5 =>     7 => 10 =>      12 =>       15 => null
// start list
//  middle list
//  end list

// firstVal = 5
// secondval = 12

//startList + secondVal + middleList + firtsVal + endList

/* 
save head...
moving pointer for the whole list
loop to find first value save previous list
save next after found value for middle and end list

point to null if no end List
*/

function swap (l1, target1, target2) {
  let current = li;
  let head = current;
  let start;
  let middle;
  let end;
  
  while(current !== null){
    
    current.next;
  }
}











console.log(swap(l1, 5, 12))