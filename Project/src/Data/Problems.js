import java_twosum_1 from "../Codes/two-sum/Java/Solution1.java";
import java_twosum_2 from "../Codes/two-sum/Java/Solution2.java";
import java_containsduplicate_1 from "../Codes/contains-duplicate/Java/Solution2.java";
import java_containsduplicate_2 from "../Codes/contains-duplicate/Java/Solution2.java";
import java_3sum_1 from "../Codes/3sum/Java/Solution1.java";
import java_3sum_2 from "../Codes/3sum/Java/Solution2.java";
import java_kthlargestelementinastream_1 from "../Codes/kth-largest-element-in-a-stream/Java/Solution1.java";
import java_findmedianfromdatastream_1 from "../Codes/find-median-from-data-stream/Java/Solution1.java";

export const problems = [
  {
    title: "Two Sum",
    id: "two-sum",
    path: "/questions/two-sum",
    difficulty: "Easy",
    tags: ["devsnest", "arrays"],
    link: "https://leetcode.com/problems/two-sum/",
    codes: [java_twosum_1, java_twosum_2]
  },
  {
    title: "Contains Duplicate",
    id: "contains-duplicate",
    path: "/questions/contains-duplicate",
    difficulty: "Easy",
    tags: ["devsnest", "arrays"],
    link: "https://leetcode.com/problems/contains-duplicate/",
    codes: [java_containsduplicate_1, java_containsduplicate_2]
  },
  {
    title: "3Sum",
    id: "3sum",
    path: "/questions/3sum",
    difficulty: "Medium",
    tags: ["devsnest", "arrays"],
    link: "https://leetcode.com/problems/3sum/",
    codes: [java_3sum_1, java_3sum_2],
    tutorial: "https://youtu.be/onLoX6Nhvmg"
  },
  {
    title: "Kth Largest Element in a Stream",
    id: "kth-largest-element-in-a-stream",
    path: "/questions/kth-largest-element-in-a-stream",
    difficulty: "Easy",
    tags: ["devsnest", "heap"],
    link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    codes: [java_kthlargestelementinastream_1],
    tutorial: "https://youtu.be/4BfL2Hjvh8g"
  },
  {
    title: "Find Median From Data Stream",
    id: "find-median-from-data-stream",
    path: "/questions/find-median-from-data-stream",
    difficulty: "Medium",
    tags: ["devsnest", "heap"],
    link: "https://leetcode.com/problems/find-median-from-data-stream/",
    codes: [java_findmedianfromdatastream_1],
    tutorial: "https://youtu.be/EIm2n8iPA4I"
  }
];
