const home = {
  path: "/",
  title: "Categories",
  buttonText: "Practice",
  data: [
    {
      title: "Devsnest DSA",
      to: "/devsnest"
    },
    {
      title: "Babbar 450",
      to: "/babbar-450"
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
      to: "/devsnest/arrays"
    },
    {
      title: "Interval Array",
      to: "/devsnest/interval-array"
    },
    {
      title: "Matrix",
      to: "/devsnest/matrix"
    },
    {
      title: "Stacks",
      to: "/devsnest/stacks"
    },
    {
      title: "Binary Search",
      to: "/devsnest/binary-search/"
    },
    {
      title: "String",
      to: "/devsnest/string"
    },
    {
      title: "Bitmap",
      to: "/devsnest/bitmap"
    },
    {
      title: "Math",
      to: "/devsnest/math"
    },
    {
      title: "Linked List",
      to: "/devsnest/linked-list"
    },
    {
      title: "Tree",
      to: "/devsnest/tree"
    },
    {
      title: "Heap",
      to: "/devsnest/heap"
    },
    {
      title: "Graph",
      to: "/devsnest/graph"
    },
    {
      title: "MST",
      to: "/devsnest/mst"
    },
    {
      title: "Backtracking",
      to: "/devsnest/backtracking"
    },
    {
      title: "Dynamic Programming",
      to: "/devsnest/dynamic-programming"
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
