(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{559:function(t,e,r){"use strict";r.r(e);var n=r(41),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),r("h4",{attrs:{id:"pull-vs-fetch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-vs-fetch"}},[t._v("#")]),t._v(" pull vs. fetch")]),t._v(" "),r("p",[t._v("pull = fecth + merge")]),t._v(" "),r("h4",{attrs:{id:"cherry-pick"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[t._v("#")]),t._v(" cherry pick")]),t._v(" "),r("p",[t._v("(..pending)")]),t._v(" "),r("h4",{attrs:{id:"자주-사용하는-것"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#자주-사용하는-것"}},[t._v("#")]),t._v(" 자주 사용하는 것")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('// **[브랜치명]은 `-`를 사용해 띄워쓴다.\n// 브랜치 갱신\n$ git remote update\n// 브랜치 확인\n$ git branch // local\n$ git branch -r // remote\n$ git branch -a // local + remote\n// 브랜치 생성\n$ git branch [브랜치명]\n// 브랜치 생성 + 이동\n$ git checkout -b [브랜치명]\n// 브랜치 변경\n$ git checkout [브랜치명]\n// remote 브랜치 가져오기\n$ git fetch && git checkout [브랜치명]\n$ git checkout -t [브랜치명]\n// Branch(브랜치) 삭제하기\n$ git branch -d [브랜치명] // local\n$ git push origin --delete [브랜치명] // remote\n// 유효하지 않은 브랜치\n$ git remote prune origin\n\n\n// 커밋 메시지 변경\n// #1 push 전\n$ git commit --amend -m "commit message"\n// #2 push 후\n// 1) $ git rebase HEAD~[커밋의 역순의 index] -i\n$ git rebase HEAD~1-i\n// 2) [insert] pick -> reword\n// 3) `i`를 입력하여 편집모드로 수정 -> `ESC` -> `:wq!`\n$ git push -f\n\n//수정 되돌리기\n//git add 명령을 하기 이전(stage에 올리지 않은 경우)\n//repository 내 모든\n$ git checkout .\n\n\n//특정 폴더||파일 아래의 모든\n$ git checkout {dir}||{file_name}\n\n\n//레파지토리 연결\n$ git remote add origin [연결할 git repo url]\n//upstream 연결후, 소스 상태 갱신\n$ git remote add upstream [연결할 git repo url]\n$ git remote // 연결확인 origin, upstream 존재\n$ git fetch upstream\n$ git merge upstream/main\n\n\n//레파지토리 이름 변경\n$ git remote set-url origin [변경할 git repo url]\n\n//사용자 이름, 이메일 변경\ngit config --global user.name "유수정"\ngit config --global user.email "yoosj0703@gmail.com"\n\n//삭제\n$ git config --unset  user.name\n$ git config --unset --global user.name\n\n// gitignore 나중에 선택할 때, 이전 커밋삭제\n$ git rm -r --cached .\n\n// stash\n$ git stash\n$ git stash save\n\n$ git stash list\n\n$ git stash apply\n$ git stash apply [stash 이름]\n$ git stash drop\n$ git stash drop [stash 이름]\n')])])]),r("h3",{attrs:{id:"git-commit-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-template"}},[t._v("#")]),t._v(" git commit template")]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("git commit msg template")])])]),t._v(" "),r("ol",[r("li",[r("code",[t._v("git-commit-template.txt")]),t._v("에 "),r("code",[t._v("commit convention")]),t._v("작성")]),t._v(" "),r("li",[t._v("git config commit.template에 설정해주기")]),t._v(" "),r("li",[r("code",[t._v("git commit")]),t._v(" -> 해당 템플릿으로 이동")]),t._v(" "),r("li",[r("code",[t._v("insert")]),t._v("키로 commit msg 작성후 -> "),r("em",[t._v(":qa")]),t._v("로 끝내기("),r("code",[t._v(":qw!")]),t._v("가 아님!!: Aborting commit; you did not edit the message 발생원인)")]),t._v(" "),r("li",[t._v("커밋 확인 -> "),r("code",[t._v("git push")])])]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global commit.template "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("해당루트"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/git-commit-template.txt\n")])])]),r("h3",{attrs:{id:"리눅스-linux-명령어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#리눅스-linux-명령어"}},[t._v("#")]),t._v(" 리눅스(Linux) 명령어")]),t._v(" "),r("blockquote",[r("p",[t._v("Git 이용시, 함께 자주 사용하는 스크립트 정리")])]),t._v(" "),r("ol",[r("li",[r("code",[t._v(";")]),t._v("(semicolon) vs. "),r("code",[t._v("&&")]),t._v(" "),r("blockquote",[r("p",[t._v("공통적으로 명령어들을 순차적으로 실행할 때 사용\n"),r("code",[t._v("&&")]),t._v(" 전제가 "),r("code",[t._v("true")]),t._v("여만 다음 명령어 실행 / "),r("code",[t._v(";")]),t._v("는 "),r("code",[t._v("true")]),t._v("여부와 상관없이 순차적으로 실행")])])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ rm -rf .next && npm run build && ..\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("rm(remove) 명령어 - 파일, 폴더 삭제")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 해당 폴더와 그 폴더 하위 모든 파일, 폴더 삭제\n$ rm -rf [폴더명]\n// rm -f 강제 삭제\n// rm -r 모든 파일, 폴더 삭제\n")])])]),r("h4",{attrs:{id:"issue-log"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#issue-log"}},[t._v("#")]),t._v(" Issue log")]),t._v(" "),r("h6",{attrs:{id:"git-push-to-private-git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-push-to-private-git"}},[t._v("#")]),t._v(" "),r("code",[t._v("git push")]),t._v(" to private git")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Issue")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fatal: remote error: Invalid username or password.\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Solved")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// #1 remote.origin.url 확인\n$ git config --list\n// #2 기존 url 제거\n$ git remote remove origin\n// #3 url 재연결\n$ git remote add origin https://USERNAME:PASSWORD@<REPOSITORY URL>\n// #4 변경된 url 확인 -> pull 정상작동 확인\n$ git config --list\n$ git pull\n\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/git%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%EC%95%8C%25E%5DC%95%84%EC%95%BC-%ED%95%A0-4-%EA%B0%80%EC%A7%80-f8a64f5fa558",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git을 사용할 때 알아야 할 4 가지"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://lhy.kr/git-workflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git을 이용한 협업 워크플로우"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://12bme.tistory.com/43",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 저장소 이름 및 url 변경하기"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://hochulshin.com/git-revert-changes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git - 수정한 것 되돌리기"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jeong-pro.tistory.com/207",target:"_blank",rel:"noopener noreferrer"}},[t._v("지금 당장 좋은 커밋 메시지를 남기는 방법(with Git Commit Template)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.outsider.ne.kr/1011",target:"_blank",rel:"noopener noreferrer"}},[t._v("git diff 에서 변경된 부분을 더 명확하게 보는 방법"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://trustyoo86.github.io/git/2017/11/28/git-remote-branch-create.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 리모트(remote) 브랜치 생성 및 삭제하기"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/@kkweon/%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4-%EC%9E%98-%EC%95%88%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-github-%ED%8C%81-941e4d644402",target:"_blank",rel:"noopener noreferrer"}},[t._v("사람들이 잘 안알려주는 GitHub 팁"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754",target:"_blank",rel:"noopener noreferrer"}},[t._v("효율적인 commit message 작성을 위한 conventional commits"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://karma-runner.github.io/0.10/dev/git-commit-msg.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("karma git-commit-msg"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.conventionalcommits.org/en/v1.0.0/#summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("conventionalcommits"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jeong-pro.tistory.com/207",target:"_blank",rel:"noopener noreferrer"}},[t._v("git template 설정하기 - 기본기를 쌓는 정아마추어 코딩블로그"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mylko72.gitbooks.io/git/content/remote/remote_update.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("리모트 브랜치 참조와 업데이트"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.kshgroup.kr/code-reviews-for-existing-code-with-github/",target:"_blank",rel:"noopener noreferrer"}},[t._v("[번역] Github 를 통해 이미 작성한 코드를 리뷰하는 방법"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/@kkweon/%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4-%EC%9E%98-%EC%95%88%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-github-%ED%8C%81-941e4d644402",target:"_blank",rel:"noopener noreferrer"}},[t._v("사람들이 잘 안알려주는 GitHub 팁"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.daftcode.pl/how-to-become-a-master-of-git-tags-b70fbd9609d9",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Become a Master of Git Tags"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Versioning"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);