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
// console.dir(l1)

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

/*
lol
 :)
*/
const findVal = (list, target, target2) =>{
  let current = list;
  let prev = list;
  let value;
  
  while(current && current.next){
    if(current.next.val === target){
      prev = current;
      value = current.next;
    }
    current = current.next;
    // ur current moves to the  end and return the final node
    // that makes sense thanks =)
  }
  return [value, prev];
}

findVal(l1, 5)
function toArray(list){
  let arr = []
  while(list !== null){
    arr.push(list.val)
    list = list.next;
  }
  console.log(arr)
  return arr
}
toArray(l1)
function swap(list1, target1, target2){
  let [val1, prev1] = findVal(list1, target1)
  let [val2, prev2] = findVal(list1, target2)

  let firstNext = val1.next;
  let secondNext = val2.next;
  return firstNext;
// curr1.next = 7, 10
  
  // console.log(curr1.next) //10
  
}


let newArray1 = swap(l1, 5, 12)

toArray(newArray1)
// ////  start {1 =>   5 =>  7 => }     10 =>      12 =>       15 => null
// ////  start {1 =>  12 =>  7 => }     10 =>      5  =>       15 => null
// swap(l1, 5, 12)



// function swap (list1, target1, target2) {
//   let current = list1;
//   let head = current;
//   let firstNode = null
//   let secondNode = null
  
//   // let start = new ListNode(0);
//   // let startHead = start
//   // let middle = null;
//   // let middleHead = middle
//   // let end = null;
//   // let endHead = end
  
//   while(current !== null){
//     // let next = current.next
//     // if (current.val !== target1 && current.val !== target2 && !middle && !end){
//     //   start.next = current
//     //   start = start.next
//     // }
    
//     if(current.val === target1){
//        firstNode = current;
//        // middle = current.next
//        // // middle = middle.next
//       // current = current.next
//       // continue
//     }
    
//     // if (current.val === target1 && current.val !== target2 && middle){
//     //   middle.next = current
//     //   middle = middle.next
//     // }

//     if(current.val === target2) {
//       secondNode = current;
//       // end = current.next;
//       // current = current.next
//       // continue
//     }

//     current = current.next;
//   }

//   while (current !== null){
//      if(current.val === target1){
//        // swap second
//      }
//      if(current.val === target2){
//        // swap first
//      }

//     current = current.next
//   }

// ////  start {1 =>   5 =>  7 => }     10 =>      12 =>       15 => null
//   // start.next = secondNode
//   // secondNode.next = middle
  
// // console.log(firstNode, secondNode)
//   console.log('Start', start)
//   console.log('middle', middle)
//   console.log('end', end)
  
//   return 'hi'
// }











// console.log(swap(l1, 5, 12))