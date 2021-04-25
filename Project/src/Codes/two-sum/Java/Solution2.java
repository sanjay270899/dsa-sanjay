class Solution {
  public int[] twoSum(int[] num, int target) {

    HashMap<Integer, Integer> map = new HashMap<>();
    int answer[] = new int[2];

    for (int i = 0; i < num.length; i = i + 1) {
      if (map.containsKey(target - num[i])) {
        answer[0] = i;
        answer[1] = map.get(target - num[i]);
        return answer;
      } else {
        map.put(num[i], i);
      }
    }
    return answer;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)