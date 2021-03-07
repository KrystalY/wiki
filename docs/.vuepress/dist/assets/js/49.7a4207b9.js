(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{396:function(t,s,e){"use strict";e.r(s);var a=e(41),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ee-first"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ee-first"}},[t._v("#")]),t._v(" EE First")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://npmjs.org/package/ee-first",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/ee-first.svg?style=flat-square",alt:"NPM version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://travis-ci.org/jonathanong/ee-first",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/travis/jonathanong/ee-first.svg?style=flat-square",alt:"Build status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/r/jonathanong/ee-first?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/coveralls/jonathanong/ee-first.svg?style=flat-square",alt:"Test coverage"}}),e("OutboundLink")],1),t._v(" "),e("RouterLink",{attrs:{to:"/resource/Node/socket-io-chat/node_modules/ee-first/LICENSE.html"}},[e("img",{attrs:{src:"http://img.shields.io/npm/l/ee-first.svg?style=flat-square",alt:"License"}})]),t._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/ee-first",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://img.shields.io/npm/dm/ee-first.svg?style=flat-square",alt:"Downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.gittip.com/jonathanong/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/gittip/jonathanong.svg?style=flat-square",alt:"Gittip"}}),e("OutboundLink")],1)],1),t._v(" "),e("p",[t._v("Get the first event in a set of event emitters and event pairs,\nthen clean up after itself.")]),t._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ee-first\n")])])]),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" first "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ee-first'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"first-arr-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#first-arr-listener"}},[t._v("#")]),t._v(" first(arr, listener)")]),t._v(" "),e("p",[t._v("Invoke "),e("code",[t._v("listener")]),t._v(" on the first event from the list specified in "),e("code",[t._v("arr")]),t._v(". "),e("code",[t._v("arr")]),t._v(" is\nan array of arrays, with each array in the format "),e("code",[t._v("[ee, ...event]")]),t._v(". "),e("code",[t._v("listener")]),t._v("\nwill be called only once, the first time any of the given events are emitted. If\n"),e("code",[t._v("error")]),t._v(" is one of the listened events, then if that fires first, the "),e("code",[t._v("listener")]),t._v("\nwill be given the "),e("code",[t._v("err")]),t._v(" argument.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("listener")]),t._v(" is invoked as "),e("code",[t._v("listener(err, ee, event, args)")]),t._v(", where "),e("code",[t._v("err")]),t._v(" is the\nfirst argument emitted from an "),e("code",[t._v("error")]),t._v(" event, if applicable; "),e("code",[t._v("ee")]),t._v(" is the event\nemitter that fired; "),e("code",[t._v("event")]),t._v(" is the string event name that fired; and "),e("code",[t._v("args")]),t._v(" is an\narray of the arguments that were emitted on the event.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ee1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventEmitter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ee2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventEmitter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ee1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ee2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listener invoked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"cancel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cancel"}},[t._v("#")]),t._v(" .cancel()")]),t._v(" "),e("p",[t._v("The group of listeners can be cancelled before being invoked and have all the event\nlisteners removed from the underlying event emitters.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" thunk "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ee1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ee2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listener invoked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cancel and clean up")]),t._v("\nthunk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);