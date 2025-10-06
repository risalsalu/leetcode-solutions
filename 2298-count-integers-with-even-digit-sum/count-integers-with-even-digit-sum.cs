public class Solution {
    public int CountEven(int num) {
       int count = 0;
       for(int i=1; i<=num; i++){
        int sum = 0;
        string str = i.ToString();
        foreach(char c in str){
            sum+= c- '0';
        }
        if(sum %2 == 0){
        count ++;
        }
       }
       return count;
    }
}