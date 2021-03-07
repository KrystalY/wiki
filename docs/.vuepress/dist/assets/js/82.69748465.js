(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{428:function(t,e,r){"use strict";r.r(e);var s=r(41),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-errors"}},[t._v("#")]),t._v(" http-errors")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://npmjs.org/package/http-errors",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badgen.net/npm/v/http-errors",alt:"NPM Version"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badgen.net/npm/dm/http-errors",alt:"NPM Downloads"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badgen.net/npm/node/http-errors",alt:"Node.js Version"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://travis-ci.org/jshttp/http-errors",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badgen.net/travis/jshttp/http-errors/master",alt:"Build Status"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://coveralls.io/r/jshttp/http-errors?branch=master",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badgen.net/coveralls/c/github/jshttp/http-errors/master",alt:"Test Coverage"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Create HTTP errors for Express, Koa, Connect, etc. with ease.")]),t._v(" "),r("h2",{attrs:{id:"install"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),r("p",[t._v("This is a "),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),r("OutboundLink")],1),t._v(" module available through the\n"),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),r("OutboundLink")],1),t._v(". Installation is done using the\n"),r("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("npm install")]),t._v(" command"),r("OutboundLink")],1),t._v(":")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" http-errors\n")])])]),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" createError "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-errors'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("req"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please login to view this page.'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h2",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),r("p",[t._v("This is the current API, currently extracted from Koa and subject to change.")]),t._v(" "),r("h3",{attrs:{id:"error-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-properties"}},[t._v("#")]),t._v(" Error Properties")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("expose")]),t._v(" - can be used to signal if "),r("code",[t._v("message")]),t._v(" should be sent to the client,\ndefaulting to "),r("code",[t._v("false")]),t._v(" when "),r("code",[t._v("status")]),t._v(" >= 500")]),t._v(" "),r("li",[r("code",[t._v("headers")]),t._v(" - can be an object of header names to values to be sent to the\nclient, defaulting to "),r("code",[t._v("undefined")]),t._v(". When defined, the key names should all\nbe lower-cased")]),t._v(" "),r("li",[r("code",[t._v("message")]),t._v(" - the traditional error message, which should be kept short and all\nsingle line")]),t._v(" "),r("li",[r("code",[t._v("status")]),t._v(" - the status code of the error, mirroring "),r("code",[t._v("statusCode")]),t._v(" for general\ncompatibility")]),t._v(" "),r("li",[r("code",[t._v("statusCode")]),t._v(" - the status code of the error, defaulting to "),r("code",[t._v("500")])])]),t._v(" "),r("h3",{attrs:{id:"createerror-status-message-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#createerror-status-message-properties"}},[t._v("#")]),t._v(" createError([status], [message], [properties])")]),t._v(" "),r("p",[t._v("Create a new error object with the given message "),r("code",[t._v("msg")]),t._v(".\nThe error object inherits from "),r("code",[t._v("createError.HttpError")]),t._v(".")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" err "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This video does not exist!'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("ul",[r("li",[r("code",[t._v("status: 500")]),t._v(" - the status code as a number")]),t._v(" "),r("li",[r("code",[t._v("message")]),t._v(" - the message of the error, defaulting to node's text for that status code.")]),t._v(" "),r("li",[r("code",[t._v("properties")]),t._v(" - custom properties to attach to the object")])]),t._v(" "),r("h3",{attrs:{id:"createerror-status-error-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#createerror-status-error-properties"}},[t._v("#")]),t._v(" createError([status], [error], [properties])")]),t._v(" "),r("p",[t._v("Extend the given "),r("code",[t._v("error")]),t._v(" object with "),r("code",[t._v("createError.HttpError")]),t._v("\nproperties. This will not alter the inheritance of the given\n"),r("code",[t._v("error")]),t._v(" object, and the modified "),r("code",[t._v("error")]),t._v(" object is the\nreturn value.")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("fs"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.txt'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buf")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ENOENT'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" httpError "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" expose"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" httpError "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("createError")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("ul",[r("li",[r("code",[t._v("status")]),t._v(" - the status code as a number")]),t._v(" "),r("li",[r("code",[t._v("error")]),t._v(" - the error object to extend")]),t._v(" "),r("li",[r("code",[t._v("properties")]),t._v(" - custom properties to attach to the object")])]),t._v(" "),r("h3",{attrs:{id:"new-createerror-code-name-msg"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-createerror-code-name-msg"}},[t._v("#")]),t._v(" new createError[code || name]([msg]))")]),t._v(" "),r("p",[t._v("Create a new error object with the given message "),r("code",[t._v("msg")]),t._v(".\nThe error object inherits from "),r("code",[t._v("createError.HttpError")]),t._v(".")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" err "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("createError"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotFound")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("ul",[r("li",[r("code",[t._v("code")]),t._v(" - the status code as a number")]),t._v(" "),r("li",[r("code",[t._v("name")]),t._v(' - the name of the error as a "bumpy case", i.e. '),r("code",[t._v("NotFound")]),t._v(" or "),r("code",[t._v("InternalServerError")]),t._v(".")])]),t._v(" "),r("h4",{attrs:{id:"list-of-all-constructors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#list-of-all-constructors"}},[t._v("#")]),t._v(" List of all constructors")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Status Code")]),t._v(" "),r("th",[t._v("Constructor Name")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("400")]),t._v(" "),r("td",[t._v("BadRequest")])]),t._v(" "),r("tr",[r("td",[t._v("401")]),t._v(" "),r("td",[t._v("Unauthorized")])]),t._v(" "),r("tr",[r("td",[t._v("402")]),t._v(" "),r("td",[t._v("PaymentRequired")])]),t._v(" "),r("tr",[r("td",[t._v("403")]),t._v(" "),r("td",[t._v("Forbidden")])]),t._v(" "),r("tr",[r("td",[t._v("404")]),t._v(" "),r("td",[t._v("NotFound")])]),t._v(" "),r("tr",[r("td",[t._v("405")]),t._v(" "),r("td",[t._v("MethodNotAllowed")])]),t._v(" "),r("tr",[r("td",[t._v("406")]),t._v(" "),r("td",[t._v("NotAcceptable")])]),t._v(" "),r("tr",[r("td",[t._v("407")]),t._v(" "),r("td",[t._v("ProxyAuthenticationRequired")])]),t._v(" "),r("tr",[r("td",[t._v("408")]),t._v(" "),r("td",[t._v("RequestTimeout")])]),t._v(" "),r("tr",[r("td",[t._v("409")]),t._v(" "),r("td",[t._v("Conflict")])]),t._v(" "),r("tr",[r("td",[t._v("410")]),t._v(" "),r("td",[t._v("Gone")])]),t._v(" "),r("tr",[r("td",[t._v("411")]),t._v(" "),r("td",[t._v("LengthRequired")])]),t._v(" "),r("tr",[r("td",[t._v("412")]),t._v(" "),r("td",[t._v("PreconditionFailed")])]),t._v(" "),r("tr",[r("td",[t._v("413")]),t._v(" "),r("td",[t._v("PayloadTooLarge")])]),t._v(" "),r("tr",[r("td",[t._v("414")]),t._v(" "),r("td",[t._v("URITooLong")])]),t._v(" "),r("tr",[r("td",[t._v("415")]),t._v(" "),r("td",[t._v("UnsupportedMediaType")])]),t._v(" "),r("tr",[r("td",[t._v("416")]),t._v(" "),r("td",[t._v("RangeNotSatisfiable")])]),t._v(" "),r("tr",[r("td",[t._v("417")]),t._v(" "),r("td",[t._v("ExpectationFailed")])]),t._v(" "),r("tr",[r("td",[t._v("418")]),t._v(" "),r("td",[t._v("ImATeapot")])]),t._v(" "),r("tr",[r("td",[t._v("421")]),t._v(" "),r("td",[t._v("MisdirectedRequest")])]),t._v(" "),r("tr",[r("td",[t._v("422")]),t._v(" "),r("td",[t._v("UnprocessableEntity")])]),t._v(" "),r("tr",[r("td",[t._v("423")]),t._v(" "),r("td",[t._v("Locked")])]),t._v(" "),r("tr",[r("td",[t._v("424")]),t._v(" "),r("td",[t._v("FailedDependency")])]),t._v(" "),r("tr",[r("td",[t._v("425")]),t._v(" "),r("td",[t._v("UnorderedCollection")])]),t._v(" "),r("tr",[r("td",[t._v("426")]),t._v(" "),r("td",[t._v("UpgradeRequired")])]),t._v(" "),r("tr",[r("td",[t._v("428")]),t._v(" "),r("td",[t._v("PreconditionRequired")])]),t._v(" "),r("tr",[r("td",[t._v("429")]),t._v(" "),r("td",[t._v("TooManyRequests")])]),t._v(" "),r("tr",[r("td",[t._v("431")]),t._v(" "),r("td",[t._v("RequestHeaderFieldsTooLarge")])]),t._v(" "),r("tr",[r("td",[t._v("451")]),t._v(" "),r("td",[t._v("UnavailableForLegalReasons")])]),t._v(" "),r("tr",[r("td",[t._v("500")]),t._v(" "),r("td",[t._v("InternalServerError")])]),t._v(" "),r("tr",[r("td",[t._v("501")]),t._v(" "),r("td",[t._v("NotImplemented")])]),t._v(" "),r("tr",[r("td",[t._v("502")]),t._v(" "),r("td",[t._v("BadGateway")])]),t._v(" "),r("tr",[r("td",[t._v("503")]),t._v(" "),r("td",[t._v("ServiceUnavailable")])]),t._v(" "),r("tr",[r("td",[t._v("504")]),t._v(" "),r("td",[t._v("GatewayTimeout")])]),t._v(" "),r("tr",[r("td",[t._v("505")]),t._v(" "),r("td",[t._v("HTTPVersionNotSupported")])]),t._v(" "),r("tr",[r("td",[t._v("506")]),t._v(" "),r("td",[t._v("VariantAlsoNegotiates")])]),t._v(" "),r("tr",[r("td",[t._v("507")]),t._v(" "),r("td",[t._v("InsufficientStorage")])]),t._v(" "),r("tr",[r("td",[t._v("508")]),t._v(" "),r("td",[t._v("LoopDetected")])]),t._v(" "),r("tr",[r("td",[t._v("509")]),t._v(" "),r("td",[t._v("BandwidthLimitExceeded")])]),t._v(" "),r("tr",[r("td",[t._v("510")]),t._v(" "),r("td",[t._v("NotExtended")])]),t._v(" "),r("tr",[r("td",[t._v("511")]),t._v(" "),r("td",[t._v("NetworkAuthenticationRequired")])])])]),t._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),r("p",[r("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=a.exports}}]);