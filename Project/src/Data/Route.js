import { problems } from "./Problems.js";

const home = {
  path: "/",
  title: "Categories",
  buttonText: "Practice",
  data: [
    {
      title: "Devsnest DSA",
      to: "/devsnest",
      questionNumber: problems.filter(problem =>
        problem.tags.includes("devsnest")
      ).length
    },
    {
      title: "Babbar 450",
      to: "/babbar-450",
      questionNumber: problems.filter(problem =>
        problem.tags.includes("babbar-450")
      ).length
    }
  ]
};

const devsnest = {
  path: "/devsnest",
  title: "Devsnest DSA",
  buttonText: "Solve",
  data: [
    {
      title: "Arrays",
      to: "/devsnest/arrays",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("arrays")
      ).length
    },
    {
      title: "Interval Array",
      to: "/devsnest/interval-array",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") &&
          problem.tags.includes("interval-array")
      ).length
    },
    {
      title: "Matrix",
      to: "/devsnest/matrix",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("matrix")
      ).length
    },
    {
      title: "Stacks",
      to: "/devsnest/stacks",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("stacks")
      ).length
    },
    {
      title: "Binary Search",
      to: "/devsnest/binary-search/",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") &&
          problem.tags.includes("binary-search")
      ).length
    },
    {
      title: "String",
      to: "/devsnest/string",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("string")
      ).length
    },
    {
      title: "Bitmap",
      to: "/devsnest/bitmap",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("bitmap")
      ).length
    },
    {
      title: "Math",
      to: "/devsnest/math",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("math")
      ).length
    },
    {
      title: "Linked List",
      to: "/devsnest/linked-list",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") &&
          problem.tags.includes("linked-list")
      ).length
    },
    {
      title: "Tree",
      to: "/devsnest/tree",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("tree")
      ).length
    },
    {
      title: "Heap",
      to: "/devsnest/heap",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("heap")
      ).length
    },
    {
      title: "Graph",
      to: "/devsnest/graph",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("graph")
      ).length
    },
    {
      title: "MST",
      to: "/devsnest/mst",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") && problem.tags.includes("mst")
      ).length
    },
    {
      title: "Backtracking",
      to: "/devsnest/backtracking",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") &&
          problem.tags.includes("backtracking")
      ).length
    },
    {
      title: "Dynamic Programming",
      to: "/devsnest/dynamic-programming",
      questionNumber: problems.filter(
        problem =>
          problem.tags.includes("devsnest") &&
          problem.tags.includes("dynamic-programming")
      ).length
    }
  ]
};

const devsnestQuestions = {
  path: "/devsnest/:topic",
  from: "devsnest"
};

const solutions = {
  path: "/questions/:name"
};

export const route = {
  categories: [home, devsnest],
  questions: [devsnestQuestions],
  solutions: [solutions]
};
