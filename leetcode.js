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
//===========================================================================
//solution 2
class Solution {
    public ListNode middleNode(ListNode head) {
        if (head==null){
            return null;
        }
        ListNode slow=head;
        ListNode fast=head;
        //fas
        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    }
}
//===========================================================================
//Leetcode-234 Palindrome Linked List:
//The following solution will give timelimit exceeded
class Solution {
    public ListNode getNode(ListNode head, int idx){
        ListNode temp=head;
        
        for(int i=0;i<idx;i++){
            temp=temp.next;
        }
        return temp;
    }
    
    public int sizeoflist(ListNode head){
        int Size=0;
        ListNode curr=head;
        while(curr!=null){
            curr=curr.next;
            Size++;
        }
        return Size;
    }
    
    public boolean isPalindrome(ListNode head) {
        int size=sizeoflist(head);
        int i=0;
        int j=size-1;
        
        while(i<j){
            ListNode left=getNode(head,i);
            ListNode right=getNode(head,j);
            
            if(left.val!=right.val)
            {
                return false;
            }
                
            i++;
            j--;
        }
        return true;
    }
}
//====================================================================
//Leetcode-234 Palindrome Linked List:
//we will make this solution more optimized
class Solution {
    public ListNode leftmid(ListNode head){
        if (head==null ||head.next==null){
            return head;
        }
        ListNode slow=head;
        ListNode fast=head;
        
        while(fast.next!=null && fast.next.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    }
   
    public ListNode reverse(ListNode newHead){
        if(newHead==null ||newHead.next==null){
            return newHead;
        }
        ListNode prev=null;
        ListNode curr=newHead;
        
        while(curr!=null){
            ListNode forw=curr.next;
            curr.next=prev;
            
            prev=curr;
            curr=forw;
        }
      return prev;
    }
    
    public boolean isPalindrome(ListNode head) {
        
        if(head==null ||head.next==null){
            return true;
        }
        ListNode Slow=leftmid(head);
        ListNode newHead=Slow.next;
        Slow.next=null;
        
        
        newHead=reverse(newHead); //update
        
        ListNode A=head;
        ListNode B=newHead;
        
        
        
        while(A!=null && B!=null){
            if(A.val==B.val)
            {
                A=A.next;
                B=B.next;
            }
            else
            {
                return false;
            }
        }
        return true;
    }
}
//====================================================================
//Leetcode-143 Reorder List:
class Solution {
    public ListNode leftmid(ListNode head){
        if(head==null ||head.next==null){
            return head;
        }
        ListNode slow=head;
        ListNode fast=head;
        
        while(fast.next!=null && fast.next.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    }
    public ListNode reverse(ListNode newHead){
        if(newHead==null ||newHead.next==null){
            return newHead;
        }
        ListNode prev=null;
        ListNode curr=newHead;
        
        while(curr!=null){
            ListNode forw=curr.next;
            curr.next=prev;
            prev=curr;
            curr=forw;
        }
        return prev;
    }
    
    public void reorderList(ListNode head) {
        if(head==null ||head.next==null){
            return;
        }
        ListNode Slow=leftmid(head);
        ListNode newHead=Slow.next;
        Slow.next=null;
        
        newHead=reverse(newHead);
        
        ListNode A=head;
        ListNode B=newHead;
        
        while(A!=null && B!=null)
        {
            ListNode save1=A.next;
            ListNode save2=B.next;
            
            A.next=B;
            B.next=save1;
            A=save1;
            B=save2;
        }        
    }
}
//====================================================================
//Leetcode 148. Sort List
class Solution {
    public ListNode mid(ListNode head){
        if(head==null || head.next==null){return head;}
        ListNode slow=head;
        ListNode fast=head;
        
        while(fast.next!=null && fast.next.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    }
    
    public ListNode mergeList(ListNode List1,ListNode List2){
        if(List1==null || List2==null){
            return List1==null?List2:List1;
        }
        ListNode head=new ListNode(-1);
        ListNode prev=head;
        ListNode A=List1;
        ListNode B=List2;
        
        while(A!=null && B!=null)
        {
            if(A.val<B.val){
                prev.next=A;
                prev=A;
                A=A.next;
                
            }
            else
            {
                prev.next=B;
                prev = B;
                B=B.next;
                
            }
        }
        if(A!=null){
            prev.next=A;
            
        }
        else
        {
            prev.next=B;
        }
        return head.next;
    }
    
    public ListNode sortList(ListNode head) {
        if(head==null ||head.next==null){return head;}
        
        ListNode Slow=mid(head);
        ListNode nHead=Slow.next;
        Slow.next=null;
        
        head=sortList(head);
        nHead=sortList(nHead);
        return mergeList(head,nHead);
    }
}
//====================================================================
//Leetcode 141. Linked List Cycle
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow=head;
        ListNode fast=head;
        
        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        
        if (slow==fast){
            return true;
        }
        }
        return false;
        
    }
}
//====================================================================

