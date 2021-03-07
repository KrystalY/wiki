(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{371:function(n,s,a){"use strict";a.r(s);var e=a(41),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"clean-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-code"}},[n._v("#")]),n._v(" Clean Code")]),n._v(" "),a("h2",{attrs:{id:"함수-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-function"}},[n._v("#")]),n._v(" # 함수(Function)")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("매개변수(parameter): 2개 이하, 없는 경우가 제일 좋다.")])]),n._v(" "),a("li",[a("p",[n._v("한 함수에 한가지 행동만 수행(순수 함수) -> *테스트에 용이하게 함수를 분해")])]),n._v(" "),a("li",[a("p",[n._v("중복된 코드는 한 함수로 묶기")])]),n._v(" "),a("li",[a("p",[a("strong",[n._v("매개변수로 플래그(flag) 사용 피하기")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//bad\nfunction createFile(name, flag) {\n    if(flag) {\n        //..\n        fs.create(`./test/${name}`);\n    } else {\n        //..\n        fs.create(name);\n    }\n}\n\n//good\nfunction createFile(name) {\n    fs.create(name);\n}\nfunction createTempFile(name) {\n    fs.create(`./test/${name}`);\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br")])])]),n._v(" "),a("li",[a("p",[a("strong",[n._v("부작용(side effect) 피하기")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//bad\nlet name = 'Yoo Sujeong';\n\nfunction splitIntoFirstandLastName() {\n    name = name.split(' ');\n}\n\nsplitIntoFirstandLastName();\n\nconsole.log(name); //['Yoo', 'Sujeong']\n\n//good\nfunction splitIntoFirstandLastName() {\n    name = name.split(' ');\n}\n\nlet name = 'Yoo Sujeong';\nlet newName = splitIntoFirstandLastName(name);\n\nconsole.log(name); //'Yoo Sujeong'\nconsole.log(newName); //['Yoo', 'Sujeong']\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("전역함수 변경 피하기")])]),n._v(" "),a("li",[a("p",[a("strong",[n._v("조건문 캡슐화")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//bad\nif(obj.state == 'working' && someFunc(list)) {\n    //...\n}\n\n//good\nfunction checkCodition(obj, list) {\n    return obj.state == 'working' && someFunc(list);\n}\nif(checkCodition(objInstance, listInstance)) {\n    //...\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("**다형성(객제지향 vs. 절차형)")])])]),n._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[n._v("#")]),n._v(" # References")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.slideshare.net/jrogue/2020-6-20?ref=https://jhrogue.blogspot.com/2020/06/b-2020-6-20.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("2020년 6월 20일 개발 이야기 특집(클린코드)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);