(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{321:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"filereader与url-createobjecturl实现图片、视频上传预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filereader与url-createobjecturl实现图片、视频上传预览","aria-hidden":"true"}},[t._v("#")]),t._v(" FileReader与URL.createObjectURL实现图片、视频上传预览")]),a("p",[a("a",{attrs:{href:"https://denzel.netlify.com/js/upload_using_filereader_createobjecturl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接")])]),a("p",[t._v("之前做图片、视频上传预览常用的方案是先把文件上传到服务器，等服务器返回文件的地址后，再把该地址字符串赋给img或video的src属性，这才实现所谓的文件预览。实际上这只是文件“上传后再预览”，这既浪费了用户的时间，也浪费了不可轻视的流量。")]),a("p",[t._v("最近上网查资料才知道其实可以很轻松地实现“上传前预览”。实现方法有两种：FileReader和URL.createObjectURL。\n关于FileReader的讲解可以看"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")])]),a("p",[t._v("关于URL.createObjectURL方法的讲解和应用可以看"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")])]),a("p",[a("a",{attrs:{href:"https://xiaotianxia.github.io/demos-2017/%E4%B8%8A%E4%BC%A0%E9%A2%84%E8%A7%88-%E4%B8%A4%E7%A7%8D%E6%96%B9%E6%A1%88/test.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo地址")])]),a("h4",{attrs:{id:"直接上代码："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接上代码：","aria-hidden":"true"}},[t._v("#")]),t._v(" 直接上代码：")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("preview"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token style language-css"}},[t._v("\n        "),a("span",{attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token selector"}},[t._v(".section")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("margin")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px auto"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #666"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("text-align")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token selector"}},[t._v(".preview")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("min-height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #999"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token selector"}},[t._v(".preview img,\n        .preview video")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("section"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("方案1"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("upload"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("onchange")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("onUpload1(this.files[0])")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preview preview1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("section"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("方案2"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("upload"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("onchange")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("onUpload2(this.files[0])")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preview preview2"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onUpload1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FileReader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readAsDataURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 将文件读取为Data URL")]),t._v("\n\n            fr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/image/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'<img src=\"'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'\">'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.preview1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/video/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vidoe "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'<video controls src=\"'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'\">'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.preview1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vidoe"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("onUpload2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Blob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 文件转化成二进制文件")]),t._v("\n                url "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("URL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createObjectURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//转化成url")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/image/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'<img src=\"'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" url "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'\">'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                img"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token constant"}},[t._v("URL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("revokeObjectURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 释放createObjectURL创建的对象")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.preview2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/video/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" video "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'<video controls src=\"'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" url "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'\">'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token function"}},[t._v("$")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'.preview2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("video"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                video"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{attrs:{class:"token constant"}},[t._v("URL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("revokeObjectURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 释放createObjectURL创建的对象")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h4",{attrs:{id:"demo截图："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo截图：","aria-hidden":"true"}},[t._v("#")]),t._v(" demo截图：")]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/31/859831cc976efa49662af63e457d5f15",alt:"方案1、2 上传图片"}})]),a("hr"),a("p"),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/31/ab8defb7ab25f4f8a31d52ce7df85369",alt:"方案1 上传视频"}})]),a("hr"),a("p"),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/31/1369cacb3d77541ec913ca7d6906041a",alt:"方案2 上传视频"}})]),a("p",[t._v("可以看出FileReader和URL.createObjectURL都能完美的实现图片的预览，但对于视频的上传，FileReader就不行了，浏览器立马崩溃了。。。，然而URL.createObjectURL方法却完美实现。")]),a("p",[t._v("关于二者的具体区别在网上一时没查清楚，但总体感觉URL.createObjectURL比FileReader性能更好一些。有什么说错的地方还望指正。")])])}],!1,null,null,null);s.default=o.exports}}]);