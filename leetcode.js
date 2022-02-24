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
    if(head==null ||head.next==null){
        return false;
    }

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
//Leetcode -237. Delete Node in a Linked List

class Solution {
    public void deleteNode(ListNode node) {
        if(node==null){
            return;
        }
        node.val=node.next.val;
        node.next=node.next.next;
    }
}
//====================================================================
//Leetcode-19. Remove Nth Node From End of List
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if(head==null || head.next==null){return null;}
        
        ListNode slow=head;
        ListNode fast=head;
        
        for(int i=0;i<n;i++){
            fast=fast.next;
        }
        if (fast==null){return head.next;}
        
        while(fast.next!=null){
            slow=slow.next;
            fast=fast.next;
        }
        slow.next=slow.next.next;
        return head;
    }
}
//====================================================================
//Leetcode-25. Reverse Nodes in k-Group
class Solution {
    public static ListNode th=null;
    public static ListNode tt=null;
    
   
    public int sizeofList( ListNode head){
        ListNode curr=head;
        int size=0;
        while(curr!=null){
            size++;
            curr=curr.next;
        }
        return size;
    }
    
    public void addFirst(ListNode node){
       if(th==null){
           th=node;
           tt=node;
           
       }
        else
        {
            node.next=th;
            th=node;
        }
    }
    
    public ListNode reverseKGroup(ListNode head, int k) {
       ListNode oh=null;
        ListNode ot=null;
        
        int length=sizeofList(head);
        ListNode curr=head;
        
        while(length>=k){
            
            for(int i=0;i<k ; i++){
                ListNode save=curr.next;
                
                 //remove and add
                curr.next=null;
                addFirst(curr);
                curr=save;   
            }
            
            if(oh==null){
                oh=th;
                ot=tt;
            }
            else
            {
                ot.next=th;
                ot=tt;
            }
            th=null;
            tt=null;
            
            length-=k;
        }
        ot.next=curr;
        return oh;
    }
    
}
//====================================================================
//gfg- Insert in Middle of Linked List
class Solution {
    public Node findmid(Node head){
        Node slow=head;
        Node fast=head;
        
        while(fast.next!=null && fast.next.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    }
    
    public Node insertInMid(Node head, int data){
        
        
        //Insert code here, return the head of modified linked list
        Node key=new Node(data);
        Node mid=findmid(head);
        Node temp=mid.next;
        mid.next=key;
        key.next=temp;
        return head;
    }
}
//====================================================================