class Solution {
  public List<List<Integer>> threeSum(int[] a) {

    int n = a.length;
    Set<List<Integer>> set = new HashSet<>();
    HashMap<Integer, Integer> map = new HashMap<>();

    for (int i = 0; i < n; i = i + 1) {
      if (map.containsKey(a[i])) {
        map.put(a[i], map.get(a[i]) + 1);
      } else {
        map.put(a[i], 1);
      }
    }

    for (int i = 0; i < n; i = i + 1) {

      map.put(a[i], map.get(a[i]) - 1);
      for (int j = i + 1; j < n; j = j + 1) {

        map.put(a[j], map.get(a[j]) - 1);

        if (map.containsKey(-1 * (a[i] + a[j])) && map.get(-1 * (a[i] + a[j])) > 0) {
          List<Integer> list = new ArrayList<>();
          list.add(a[i]);
          list.add(a[j]);
          list.add(-1 * (a[i] + a[j]));
          Collections.sort(list);
          set.add(list);
        }

        map.put(a[j], map.get(a[j]) + 1);
      }
      map.put(a[i], map.get(a[i]) + 1);

    }
    return new ArrayList<>(set);
  }
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)