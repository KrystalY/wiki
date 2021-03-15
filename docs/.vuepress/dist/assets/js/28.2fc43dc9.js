(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{376:function(t,s,e){"use strict";e.r(s);var a=e(41),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bytes-utility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bytes-utility"}},[t._v("#")]),t._v(" Bytes utility")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://npmjs.org/package/bytes",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/npm/node/bytes",alt:"NPM Version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/bytes",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/npm/dm/bytes",alt:"NPM Downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://travis-ci.org/visionmedia/bytes.js",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/travis/visionmedia/bytes.js/master",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/r/visionmedia/bytes.js?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badgen.net/coveralls/c/github/visionmedia/bytes.js/master",alt:"Test Coverage"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Utility to parse a string bytes (ex: "),e("code",[t._v("1TB")]),t._v(") to bytes ("),e("code",[t._v("1099511627776")]),t._v(") and vice-versa.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("This is a "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1),t._v(" module available through the\n"),e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm registry"),e("OutboundLink")],1),t._v(". Installation is done using the\n"),e("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("npm install")]),t._v(" command"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" bytes\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bytes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bytes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"bytes-format-number-value-options-string-null"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bytes-format-number-value-options-string-null"}},[t._v("#")]),t._v(" bytes.format(number value, [options]): string｜null")]),t._v(" "),e("p",[t._v("Format the given value in bytes into a string. If the value is negative, it is kept as such. If it is a float, it is\nrounded.")]),t._v(" "),e("p",[e("strong",[t._v("Arguments")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[t._v("Value in bytes")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[e("code",[t._v("Object")])]),t._v(" "),e("td",[t._v("Conversion options")])])])]),t._v(" "),e("p",[e("strong",[t._v("Options")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("decimalPlaces")]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("｜"),e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Maximum number of decimal places to include in output. Default value to "),e("code",[t._v("2")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("fixedDecimals")]),t._v(" "),e("td",[e("code",[t._v("boolean")]),t._v("｜"),e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Whether to always display the maximum number of decimal places. Default value to "),e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[t._v("thousandsSeparator")]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v("｜"),e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Example of values: "),e("code",[t._v("' '")]),t._v(", "),e("code",[t._v("','")]),t._v(" and "),e("code",[t._v(".")]),t._v("... Default value to "),e("code",[t._v("''")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("unit")]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v("｜"),e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("The unit in which the result will be returned (B/KB/MB/GB/TB). Default value to "),e("code",[t._v("''")]),t._v(" (which means auto detect).")])]),t._v(" "),e("tr",[e("td",[t._v("unitSeparator")]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v("｜"),e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Separator to use between number and unit. Default value to "),e("code",[t._v("''")]),t._v(".")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("results")]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v("｜"),e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Return null upon error. String value otherwise.")])])])]),t._v(" "),e("p",[e("strong",[t._v("Example")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: '1KB'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: '1000B'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("thousandsSeparator"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: '1 000B'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("decimalPlaces"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: '2KB'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("unitSeparator"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: '1 KB'")]),t._v("\n\n")])])]),e("h4",{attrs:{id:"bytes-parse-string-number-value-number-null"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bytes-parse-string-number-value-number-null"}},[t._v("#")]),t._v(" bytes.parse(string｜number value): number｜null")]),t._v(" "),e("p",[t._v("Parse the string value into an integer in bytes. If no unit is given, or "),e("code",[t._v("value")]),t._v("\nis a number, it is assumed the value is in bytes.")]),t._v(" "),e("p",[t._v("Supported units and abbreviations are as follows and are case-insensitive:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("b")]),t._v(" for bytes")]),t._v(" "),e("li",[e("code",[t._v("kb")]),t._v(" for kilobytes")]),t._v(" "),e("li",[e("code",[t._v("mb")]),t._v(" for megabytes")]),t._v(" "),e("li",[e("code",[t._v("gb")]),t._v(" for gigabytes")]),t._v(" "),e("li",[e("code",[t._v("tb")]),t._v(" for terabytes")]),t._v(" "),e("li",[e("code",[t._v("pb")]),t._v(" for petabytes")])]),t._v(" "),e("p",[t._v("The units are in powers of two, not ten. This means 1kb = 1024b according to this parser.")]),t._v(" "),e("p",[e("strong",[t._v("Arguments")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v("｜"),e("code",[t._v("number")])]),t._v(" "),e("td",[t._v("String to parse, or number in bytes.")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("results")]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("｜"),e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Return null upon error. Value in bytes otherwise.")])])])]),t._v(" "),e("p",[e("strong",[t._v("Example")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1KB'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: 1024")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1024'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: 1024")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: 1KB")]),t._v("\n")])])]),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[e("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);s.default=n.exports}}]);