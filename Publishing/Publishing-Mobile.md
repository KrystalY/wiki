## 모바일 작업시 고려사항
> 모바일 기기의 해상도는 PC모니터 해상도와 다르다.

  모바일 기기의 물리적인 가로, 세로값이 아닌 ratio(비율)라는 해상도 개념 존재
  (모바일 기기 ratio 2 = 물리적 1px = css 1px; 즉 물리적인 1*1 픽셀 크기에 2*2픽셀이 들어가게 되어, 총 4픽셀이 물리적인 1픽셀 안에 들어가게 된다.)
  
> input
- css에 line-height 적용시, 디바이스에서 커서가 이상하게 나온다.  
  
> IOS Issue
- placeholder issue