(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{485:function(t,v,_){"use strict";_.r(v);var a=_(15),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"var、let和const之间的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#var、let和const之间的区别"}},[t._v("#")]),t._v(" var、let和const之间的区别")]),t._v(" "),_("p",[t._v("主要从四点讨论这三者的异同：")]),t._v(" "),_("ul",[_("li",[t._v("作用域规则")]),t._v(" "),_("li",[t._v("重复声明/重复赋值")]),t._v(" "),_("li",[t._v("变量提升（hoisted）")]),t._v(" "),_("li",[t._v("暂时死区（TDZ）")])]),t._v(" "),_("h4",{attrs:{id:"_1-var"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-var"}},[t._v("#")]),t._v(" 1.var")]),t._v(" "),_("ul",[_("li",[t._v("在全局作用域下使用 var 声明一个变量，默认它是挂载在顶层对象 window 对象下（Node 是 global）")]),t._v(" "),_("li",[t._v("用 var 声明的变量的作用域是它当前的执行上下文，可以是函数也可以是全局")]),t._v(" "),_("li",[t._v("如果赋值给未声明的变量，该变量会被隐式地创建为全局变量（它将成为顶层对象的属性，造成全局环境变量不可控、混乱）")]),t._v(" "),_("li",[t._v("使用var声明的变量存在变量提升的情况")]),t._v(" "),_("li",[t._v("允许多次声明同一变量而不报错，造成代码不容易维护")])]),t._v(" "),_("h4",{attrs:{id:"_2-let"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-let"}},[t._v("#")]),t._v(" 2.let")]),t._v(" "),_("ul",[_("li",[t._v("let 与 var 的写法一致，不同的是它使用的是块作用域")]),t._v(" "),_("li",[t._v("块作用域变量在包含它们的块或 for 循环之外是不能访问的")]),t._v(" "),_("li",[t._v("使用 let 在全局作用域下声明的变量也不是顶层对象的属性")]),t._v(" "),_("li",[t._v("不允许同一块中重复声明")]),t._v(" "),_("li",[t._v("let 声明的变量在被声明之前不能被访问（暂时死区（TDZ））")])]),t._v(" "),_("blockquote",[_("p",[t._v("在 JavaScript 中，当控制流进入它们出现的范围时，所有绑定声明都会被实例化。传统的 var 和 function 声明允许在实际声明之前访问那些绑定，并且其值（value）为 undefined 。这种遗留行为被称为变量提升（hoisting）。当控制流进入它们出现的范围时，let 和 const 声明也会被实例化，但在运行到实际声明之前禁止访问。这称为暂时性死区（ Temporal Dead Zone）。TDZ 的存在是为了防止传统提升可能造成的那种错误。")])]),t._v(" "),_("h4",{attrs:{id:"_3-const"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-const"}},[t._v("#")]),t._v(" 3.const")]),t._v(" "),_("ul",[_("li",[t._v("const 声明一个只读的常量。一旦声明，常量的值就不能改变。")]),t._v(" "),_("li",[t._v("const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。")]),t._v(" "),_("li",[t._v("注意，这里 const 保证的不是变量的值不得改动，而是变量指向的那个内存地址不得改动，如果是基本类型的话，变量的值就保存在那个内存地址上，也就是常亮，如果是引用类型，它内部的值是可以变更的")]),t._v(" "),_("li",[t._v("只在声明所在的块级作用域内有效")]),t._v(" "),_("li",[t._v("常量也是不提升，同样存在暂时性死区")])]),t._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("ol",[_("li",[t._v("作用域规则")])]),t._v(" "),_("ul",[_("li",[t._v("let/const 声明的变量属于块作用域，只能在其块或子块中可用。而 var 声明的变量的作用域是是全局或者整个封闭函数")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("重复声明/重复赋值")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("var 可以重复声明和重复赋值")])]),t._v(" "),_("li",[_("p",[t._v("let 仅允许重复赋值，但不能重复声明")])]),t._v(" "),_("li",[_("p",[t._v("const 既不可以重复赋值，但不能重复声明")])])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("变量提升（hoisted）")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("var 声明的变量存在变量提升，即可以在变量声明前访问变量，值为undefined")])]),t._v(" "),_("li",[_("p",[t._v("let 和 const 不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错 ReferenceError")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/003.png",alt:"image"}})]),t._v(" "),_("h4",{attrs:{id:"参考文章链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文章链接"}},[t._v("#")]),t._v(" 参考文章链接")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/ZuiLh0jrQfJMnvd8c5FYQQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("var、let、const 有什么区别"),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"https://blog.csdn.net/qq_36995521/article/details/115991160",target:"_blank",rel:"noopener noreferrer"}},[t._v("var、let、const三者之间的区别"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);