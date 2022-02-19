// Leetcode- 876

 class Solution {
    public int sizeofList(ListNode head){
        int size=0;
        ListNode curr=head;
        while(curr!=null){
            size++;
            curr=curr.next;            
        }
        return size;
    }
    
    public ListNode getNode( ListNode head,int idx){
        int Size =sizeofList(head);
       if(Size==0){
            return head;
        }
        else if(idx<0 || idx>=Size){
            return null;
        }
        else{
            ListNode temp=head;
        for(int i=0;i<idx;i++){
            temp=temp.next;
        }
            return temp;
        }
    }
    
    public ListNode middleNode(ListNode head) {
         int Size=sizeofList(head);
        return getNode(head,(Size/2));
        
    }
    
}