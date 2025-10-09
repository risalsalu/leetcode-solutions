public class Solution {
    public int MinimumOperations(int[] nums) {
       int count = 0;
       foreach(int number in nums){
        int a = number % 3;
        if(a != 0){
            count +=1;
        }
       }
       return count;
    }
}