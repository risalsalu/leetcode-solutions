public class Solution {
    public int CountConsistentStrings(string allowed, string[] words) {
        var allowedSet = new HashSet<char>(allowed);
        int count = 0;

        foreach (var word in words) {
            bool isConsistent = true;

            foreach (var ch in word) {
                if (!allowedSet.Contains(ch)) {
                    isConsistent = false;
                    break;
                }
            }

            if (isConsistent) count++;
        }

        return count;
    }
}
