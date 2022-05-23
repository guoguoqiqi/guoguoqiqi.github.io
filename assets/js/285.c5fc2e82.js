(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{702:function(a,e,t){"use strict";t.r(e);var s=t(15),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"webpack的工作机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack的工作机制"}},[a._v("#")]),a._v(" webpack的工作机制")]),a._v(" "),t("h4",{attrs:{id:"_1-webpack的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack的理解"}},[a._v("#")]),a._v(" 1. webpack的理解")]),a._v(" "),t("p",[a._v("webpack是一个前端的构建工具，用于将种类数目繁多的前端工程中的资源打包整合到一起。")]),a._v(" "),t("p",[a._v("举例来说，目前的前端工程一般都是使用了单页面应用框架的，如Vue或React等，这种项目中有很多种类的资源文件，比如js文件、css文件、图片文件、字体文件，甚至各种需要转译的比如less文件、sass文件、ts文件、jsx文件等等。")]),a._v(" "),t("p",[a._v("并且由于现在基本都会使用较新的语法特性来开发，比如使用ES6及更高版本等等，所以兼容性较差，最终必须要经过babel转译成浏览器都支持的ES5语法才能上线，包括上面说到的less文件、sass文件、ts文件等也都需要对应的工具来转译成css、js文件，而webpack就能完成以上的所有工作。")]),a._v(" "),t("p",[a._v("webpack可以通过不同的loader处理不同的文件类型，通过plugin实现更多扩展功能。总之经过webpack的打包，一个庞大复杂的前端工程最终可以被整合成数量很少，体积较小的前端资源包。")]),a._v(" "),t("h4",{attrs:{id:"_2-webpack工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack工作流程"}},[a._v("#")]),a._v(" 2. webpack工作流程")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Webpack 启动后，会根据我们的配置，找到项目中的某个指定文件（一般这个文件都会是一个 JS 文件）作为入口。然后顺着入口文件中的代码，根据代码中出现的 import（ES Modules）或者是 require（CommonJS）之类的语句，解析推断出来这个文件所依赖的资源模块，然后再分别去解析每个资源模块的依赖，经过深度遍历查找，最后形成整个项目中所有用到的文件之间的依赖关系树")])]),a._v(" "),t("li",[t("p",[a._v("Webpack 会遍历（递归）这个依赖树，找到每个节点对应的资源文件，然后根据配置选项中的 Loader 配置，交给对应的 Loader 去加载这个模块，最后将加载的结果放入 bundle.js（打包结果）中，从而实现整个项目的打包")])]),a._v(" "),t("li",[t("p",[a._v("对于依赖模块中无法通过 JavaScript 代码表示的资源模块，例如图片或字体文件，一般的 Loader 会将它们单独作为资源文件拷贝到输出目录中，然后将这个资源文件所对应的访问路径作为这个模块的导出成员暴露给外部")])]),a._v(" "),t("li",[t("p",[a._v("至于自定义插件机制，它并不会影响 Webpack 的核心工作过程，只是 Webpack 为了提供一个强大的扩展能力，它为整个工作过程的每个环节都预制了一个钩子，也就是说我们可以通过插件往 Webpack 工作过程的任意环节植入一些自定义的任务，从而扩展 Webpack 打包功能以外的能力")])])]),a._v(" "),t("h4",{attrs:{id:"参考文章链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章链接"}},[a._v("#")]),a._v(" 参考文章链接")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_43334673/article/details/107598708",target:"_blank",rel:"noopener noreferrer"}},[a._v("webpack运行机制与核心工作原理"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);