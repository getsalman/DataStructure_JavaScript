# DataStructure_JavaScript

1. Linked List
Linked List:- A list that is linked. contain a set of nodes. Node has two elements the value of data and the pointer to the next node in list.
-> first node is called head and last is called tail. Null indicates the end of the list.
Why linked list:- Allow you to insert value in the middle of the list by simply resetting a few pointers.
-> This is same for deleting node.
-> Sorted data.

Scalability:-
   prepend - O(1),
   append - O(1),
   lookup - O(n),
   insert - O(n),
   delete - O(n)

2. Doubly Linked List:- It has an extra pices of data that also link to the previous node. It allows us to traverse our list backward.

Scalability:-
prepend -> O(1),
append -> O(1),
lookup -> O(n),
insert -> O(n),
delete -> O(n)


3. Hash Table
Hash Table:- A hash table is a data structure that maps keys to values.
-> Object in JavaScript are types of Hash Table.

Example:- basket.grapes = 1000.
    we have key that is "grapes", sended through a hash function that is going to hash and map whatever the hash come out to be into a memory address where stored data.
     O(1):- because it happen really fast.
     -> key uses index as index of where to find value in memory.
     -> it stored both grapes and value 1000 in memory.
     Scalability:-
      insert- O(1),
      lookup- O(1),
      delete- O(1),
      search- O(1),

Disadvantage:- Hash collisons -> Where the hash function generates the same index for more than one key. when you have collision it slow down reading/writing. O(n)

    -> You can resolved hash collision problem via linked list and also there are many ways to solve.
    -> Note:- Good collison resolution needed

4. Stack:- It is linear data structure.
   - You can only access the top elements.
   - It follow LIFO pricipal which is last in first out.
   - Stck can be implemented using arrays and linked list. both work very well in case of stack implementation

   Scalability:-
  lookup:- O(n),
  pop:- O(1),
  push:- O(1),
  top:- O(1)

5. Queue:- It is linear data structure.
  - It follows FIFI principal which is first in first out.
  - ideally it is implemented using linked list.

Scalability:-
lookup - O(n),
push   - O(1),
pop    - O(1),
top    - O(1)

5. Binary Tree:- kind of tree that has few rules that should apply.
 - Each node can be only have either 0,1 and 2 nodes.
 - Each child can only have one parents.

- Perfect binary tree:- A node has zero or two children. it has two importatnt properties
  - the No. of total nodes on each level is doubled as we move down the tree.
  - No. of nodes on last level is equla to the sum of no. of nodes on all other's level plus one.

Scalability:-
 lookup - O(log N),
 insert - O(log N),
 delete - O(log N),

- Binary search tree data structure preserved relationship.
- All child node in the tree to the right of root node must be greater than the current node.
  

