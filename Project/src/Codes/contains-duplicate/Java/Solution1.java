class Solution {
  public boolean containsDuplicate(int[] nums) {
    HashSet<Integer> set = new HashSet<>();
    for (int i : nums) {
      set.add(i);
    }
    return set.size() != nums.length;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)