(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{482:function(a,t,s){"use strict";s.r(t);var n=s(15),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"parseint方法解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint方法解析"}},[a._v("#")]),a._v(" parseInt方法解析")]),a._v(" "),s("p",[a._v("这个问题要从一个面试题说起：")]),a._v(" "),s("blockquote",[s("p",[a._v("给出这句代码的执行结果 console.log([1, 2, 3, 4].map(parseInt))\n答案为 [1, NaN, NaN, NaN]")])]),a._v(" "),s("p",[a._v("这道题考察的点：")]),a._v(" "),s("ol",[s("li",[a._v("对数组map方法的掌握")]),a._v(" "),s("li",[a._v("对parseInt函数的了解")]),a._v(" "),s("li",[a._v("考察对进制转化的掌握")]),a._v(" "),s("li",[a._v("parseInt与parseFloat有何区别")])]),a._v(" "),s("p",[a._v("关键是要搞清楚数组的map方法和parseInt方法：")]),a._v(" "),s("h4",{attrs:{id:"数组map方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组map方法"}},[a._v("#")]),a._v(" "),s("strong",[a._v("数组map方法")])]),a._v(" "),s("p",[a._v("数组的map方法，是ES5中为数组定义的迭代方法，返回结果是一个新数组，其结果是该数组中的每一个元素调用一次提供的函数后的返回值：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("语法：")])])]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" new_array "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("currentValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 新数组的返回元素")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" thisArg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[s("strong",[a._v("参数：")])])]),a._v(" "),s("ol",[s("li",[a._v("callback：数组迭代的每一项执行的回调函数，可以有三个参数：")])]),a._v(" "),s("ul",[s("li",[a._v("currentValue：当前迭代项")]),a._v(" "),s("li",[a._v("index:当前迭代项的索引 (可选)")]),a._v(" "),s("li",[a._v("array: map 方法调用的数组(可选)")])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("thisObject：在执行回调函数时定义的 this 对象(没有传递或者为 null，将会使用全局对象)。")])]),a._v(" "),s("h4",{attrs:{id:"parseint方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint方法"}},[a._v("#")]),a._v(" "),s("strong",[a._v("parseInt方法")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("语法")])])]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" radix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[a._v("返回值")])])]),a._v(" "),s("p",[a._v("从给定的字符串中解析出一个整数，或者NaN。")]),a._v(" "),s("p",[a._v("关于返回NaN:")]),a._v(" "),s("ul",[s("li",[a._v("radix 小于 2 或大于 36")]),a._v(" "),s("li",[a._v("第一个非空格字符不能转换为数字。")])]),a._v(" "),s("p",[a._v("parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。")]),a._v(" "),s("h4",{attrs:{id:"参考文章链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章链接"}},[a._v("#")]),a._v(" 参考文章链接")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/avmH_DKbbrReG1ARC30Lng",target:"_blank",rel:"noopener noreferrer"}},[a._v("超详细解析 parseInt"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);