class Solution {
  public List<List<Integer>> threeSum(int[] a) {

    int n = a.length;
    Arrays.sort(a);
    List<List<Integer>> answer = new ArrayList<>();

    for (int i = 0; i < n - 2; i = i + 1) {

      if (i != 0 && a[i] == a[i - 1])
        continue;

      int left = i + 1;
      int right = n - 1;

      while (left < right) {

        if (a[left] + a[right] == -1 * a[i]) {
          List<Integer> list = new ArrayList<>();
          list.add(a[i]);
          list.add(a[left]);
          list.add(a[right]);
          answer.add(list);
          ++left;
          --right;

          while (left < right && a[left] == a[left - 1])
            ++left;
          while (left < right && a[right] == a[right + 1])
            --right;

        } else if (a[left] + a[right] < -1 * a[i]) {
          ++left;
        } else {
          --right;
        }

      }

    }
    return answer;
  }
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)