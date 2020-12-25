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


1. Hash Table
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

