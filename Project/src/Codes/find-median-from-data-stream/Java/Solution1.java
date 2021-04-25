class MedianFinder {

  PriorityQueue<Integer> min;
  PriorityQueue<Integer> max;

  public MedianFinder() {
    min = new PriorityQueue<>();
    max = new PriorityQueue<>(10, Collections.reverseOrder());
  }

  public void addNum(int num) {
    max.add(num);
    min.add(max.poll());

    if (max.size() < min.size()) {
      max.add(min.poll());
    }
  }

  public double findMedian() {
    if (max.size() == min.size()) {
      return ((double) max.peek() + min.peek()) / 2;
    } else {
      return max.peek();
    }
  }
}