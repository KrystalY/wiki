(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{444:function(t,e,s){"use strict";s.r(e);var a=s(41),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mime-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-types"}},[t._v("#")]),t._v(" mime-types")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/mime-types",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/v/mime-types",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/mime-types",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/dm/mime-types",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/node/mime-types",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/jshttp/mime-types/actions?query=workflow%3Aci",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/github/checks/jshttp/mime-types/master?label=ci",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/mime-types?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/coveralls/c/github/jshttp/mime-types/master",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The ultimate javascript content-type utility.")]),t._v(" "),s("p",[t._v("Similar to "),s("a",{attrs:{href:"https://www.npmjs.com/package/mime",target:"_blank",rel:"noopener noreferrer"}},[t._v("the "),s("code",[t._v("mime@1.x")]),t._v(" module"),s("OutboundLink")],1),t._v(", except:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("No fallbacks.")]),t._v(" Instead of naively returning the first available type,\n"),s("code",[t._v("mime-types")]),t._v(" simply returns "),s("code",[t._v("false")]),t._v(", so do\n"),s("code",[t._v("var type = mime.lookup('unrecognized') || 'application/octet-stream'")]),t._v(".")]),t._v(" "),s("li",[t._v("No "),s("code",[t._v("new Mime()")]),t._v(" business, so you could do "),s("code",[t._v("var lookup = require('mime-types').lookup")]),t._v(".")]),t._v(" "),s("li",[t._v("No "),s("code",[t._v(".define()")]),t._v(" functionality")]),t._v(" "),s("li",[t._v("Bug fixes for "),s("code",[t._v(".lookup(path)")])])]),t._v(" "),s("p",[t._v("Otherwise, the API is compatible with "),s("code",[t._v("mime")]),t._v(" 1.x.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("p",[t._v("This is a "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" module available through the\n"),s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),s("OutboundLink")],1),t._v(". Installation is done using the\n"),s("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("npm install")]),t._v(" command"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mime-types\n")])])]),s("h2",{attrs:{id:"adding-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-types"}},[t._v("#")]),t._v(" Adding Types")]),t._v(" "),s("p",[t._v("All mime types are based on "),s("a",{attrs:{href:"https://www.npmjs.com/package/mime-db",target:"_blank",rel:"noopener noreferrer"}},[t._v("mime-db"),s("OutboundLink")],1),t._v(",\nso open a PR there if you'd like to add mime types.")]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mime-types'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("All functions return "),s("code",[t._v("false")]),t._v(" if input is invalid or not found.")]),t._v(" "),s("h3",{attrs:{id:"mime-lookup-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-lookup-path"}},[t._v("#")]),t._v(" mime.lookup(path)")]),t._v(" "),s("p",[t._v("Lookup the content-type associated with a file.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'application/json'")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.md'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'text/markdown'")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'text/html'")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'folder/file.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'application/javascript'")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'folder/.htaccess'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cats'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("h3",{attrs:{id:"mime-contenttype-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-contenttype-type"}},[t._v("#")]),t._v(" mime.contentType(type)")]),t._v(" "),s("p",[t._v("Create a full content-type header given a content-type or extension.\nWhen given an extension, "),s("code",[t._v("mime.lookup")]),t._v(" is used to get the matching\ncontent-type, otherwise the given content-type is used. Then if the\ncontent-type does not already have a "),s("code",[t._v("charset")]),t._v(" parameter, "),s("code",[t._v("mime.charset")]),t._v("\nis used to get the default charset and add to the returned content-type.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'text/x-markdown; charset=utf-8'")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'application/json; charset=utf-8'")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'text/html; charset=utf-8'")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html; charset=iso-8859-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'text/html; charset=iso-8859-1'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from a full path")]),t._v("\nmime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/file.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'application/json; charset=utf-8'")]),t._v("\n")])])]),s("h3",{attrs:{id:"mime-extension-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-extension-type"}},[t._v("#")]),t._v(" mime.extension(type)")]),t._v(" "),s("p",[t._v("Get the default extension for a content-type.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/octet-stream'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'bin'")]),t._v("\n")])])]),s("h3",{attrs:{id:"mime-charset-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mime-charset-type"}},[t._v("#")]),t._v(" mime.charset(type)")]),t._v(" "),s("p",[t._v("Lookup the implied default charset of a content-type.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("mime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/markdown'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'UTF-8'")]),t._v("\n")])])]),s("h3",{attrs:{id:"var-type-mime-types-extension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#var-type-mime-types-extension"}},[t._v("#")]),t._v(" var type = mime.types[extension]")]),t._v(" "),s("p",[t._v("A map of content-types by extension.")]),t._v(" "),s("h3",{attrs:{id:"extensions-mime-extensions-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extensions-mime-extensions-type"}},[t._v("#")]),t._v(" [extensions...] = mime.extensions[type]")]),t._v(" "),s("p",[t._v("A map of extensions by content-type.")]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=n.exports}}]);