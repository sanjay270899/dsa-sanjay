class KthLargest {

  int k;
  PriorityQueue<Integer> pq;

  public KthLargest(int k, int[] nums) {
    this.k = k;
    pq = new PriorityQueue<>(k + 1);
    for (int element : nums) {
      pq.add(element);

      if (pq.size() > k) {
        pq.poll();
      }
    }
  }

  public int add(int val) {
    pq.add(val);
    if (pq.size() > k) {
      pq.poll();
    }
    return pq.peek();
  }
}