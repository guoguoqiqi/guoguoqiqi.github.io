(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{887:function(s,n,t){"use strict";t.r(n);var a=t(15),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("请完成一个函数，输入一个二叉树，该函数输出它的镜像。")]),s._v(" "),t("p",[s._v("例如输入：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("     4\n   /   \\\n  2     7\n / \\   / \\\n1   3 6   9\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("镜像输出：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("     4\n   /   \\\n  7     2\n / \\   / \\\n9   6 3   1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p"),s._v(" "),t("p",[s._v("示例 1：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：root = [4,2,7,1,3,6,9]\n输出：[4,7,2,9,6,3,1]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("mirrorTree")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" temp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left\n    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right\n    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("temp\n    \n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mirrorTree")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mirrorTree")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("blockquote",[t("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof")])])])}),[],!1,null,null,null);n.default=e.exports}}]);