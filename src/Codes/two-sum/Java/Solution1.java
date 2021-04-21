class Solution {
  public int[] twoSum(int[] nums, int target) {
    int[] index = new int[2];
    for (int i = 0; i < nums.length - 1; i = i + 1) {
      for (int j = i + 1; j < nums.length; j = j + 1) {
        if (nums[i] + nums[j] == target) {
          index[0] = i;
          index[1] = j;
          return index;
        }
      }
    }
    return index;
  }
}