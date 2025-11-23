public class Solution {
    public int[] RecoverOrder(int[] order, int[] friends) {
        var set = new HashSet<int>(friends);
        var result = new List<int>();
        foreach (var x in order) {
            if (set.Contains(x)) result.Add(x);
        }
        return result.ToArray();
    }
}
