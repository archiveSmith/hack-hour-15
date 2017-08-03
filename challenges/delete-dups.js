/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function deleteDups(head) {
    let nodeTracker = head
    const tracker = [];
    while(nodeTracker.next) {
        if(nodeTracker.value !== nodeTracker.next.value){
            tracker.push(nodeTracker)
            nodeTracker = nodeTracker.next;
        } else {
            nodeTracker = nodeTracker.next.next
        }
    }
    return tracker;
}

module.exports = deleteDups;
