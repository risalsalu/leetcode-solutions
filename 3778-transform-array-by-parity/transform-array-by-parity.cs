public class Solution {
    public int[] TransformArray(int[] nums) {
    int[] transformed = nums.Select(x => x % 2 == 0 ? 0 : 1).ToArray();
    Array.Sort(transformed);
    return transformed;
    }
}