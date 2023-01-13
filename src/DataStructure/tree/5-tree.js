// 树的遍历
// 按照遍历规则的不同
// 1、前序遍历
// 2、中序遍历
// 3、后序遍历
// 4、层次遍历
// 按照实现方式的不同
// 1、递归遍历（前、中、后）
// 2、迭代遍历（层次）

// 递归： 编程语言中，函数Fun（Type, ...）直接或间接调用函数本身，则该函数称为递归。
// 二叉树的三个组成部分：根节点、左子树、右子树
// 假设保证左子树一定先于右子树遍历这个前提，那么可能顺序又以下三种：
// 根节点 - 左子树 - 右子树
// 左子树 - 根节点 - 右子树
// 左子树 - 右子树 - 根节点

// 上述的三个遍历顺序分别对应着二叉树的现需遍历，中序遍历、后续遍历（根据根节点遍历的时机来决定遍历的命名）

// 定义一个二叉树
const tree1 = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
    },
    right: {
      value: E,
    },
  },
  right: {
    value: 'C',
    right: {
      value: 'F',
    },
  },
}
// 递归函数的编写要点
// 递归式： 你每次重复的内容是什么，比如这里的先序每次重复的就是“根节点 - 左节点 - 右节点”这个旅行路线
// 递归边界：指的是什么时候停下来

// 前序遍历
function preorder(node) {
  if (!node) return
  console.log(node.value)
  preorder(node.left)
  preorder(node.right)
}

// 中序遍历
function inorder(node) {
  if (!node) return
  inorder(node.left)
  console.log(node.value)
  inorder(node.right)
}

// 后序遍历
function postorder(node) {
  if (!node) return
  postorder(node.left)
  postorder(node.right)
  console.log(node.value)
}
