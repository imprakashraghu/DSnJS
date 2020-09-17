/*
    Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

    k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

    Example:

    Given this linked list: 1->2->3->4->5

    For k = 2, you should return: 2->1->4->3->5

    For k = 3, you should return: 3->2->1->4->5

    Note:

    Only constant extra memory is allowed.
    You may not alter the values in the list's nodes, only nodes itself may be changed.

*/

function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}

var reverseKGroup = function(head, k) {
    var node = new ListNode(0);
    node.next = head;
    let current = head;
    let prev = node;
    
    while(current) {
        let tail = current;
        let index = 0;
        while(current && index < k) {
            current = current.next;
            index++;
        }
        if(index !== k) {
            prev.next = tail;
        } else {
            prev.next = reverseList(tail, k);
            prev = tail;
        }
    }
          
    return node.next;
};

function reverseList(head, k) {
    let prev = null;
    let current = head;
    let index = 0;
    while(current && index !== k) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        index++;
    }
    return prev;
}