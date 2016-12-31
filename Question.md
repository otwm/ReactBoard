# 생각해 볼 것!!! 
* 로깅은 어터케 할 것인가? => 별도 로깅 서버로??
* 파이어베이스 유틸리티는 너무나 빈약하다?
* 파이어베이스 검색, 조회, 정렬등 => 수많은 데이터를 매번 전체 조회 하나?
* 파베 로딩 전에 핸들러 제공이 필요하다.
* 레포지토리의 개념에서 한번 생각해보자. 하이버네이트는 프록시를 적극 이용한다. 
* 파베 오픈 소스 https://www.npmjs.com/package/redux-react-firebase https://github.com/firebase/reactfire
* 기타 다른 기술 블로그도 살펴보자.  
* 서버 사이드 렌더링? => 요새 같이 msa 개념이 난무하는 시대에 노드 하나 뛰우는 정도야...
* material ui, 파베, 그리고 로컬 상태와 서버 상태에 대해..., 어쨌든 매터리얼은 좀 번거롭다.
* 폼 시리얼 라이즈에 대해서도 한번 생각해보자. 예전부터 하고 있었던 것.
* jsr-303 같은 거는 없나요???

# 이것은 뭐 다?!
* https://github.com/davideast/Querybase#querybase-is-in-an-experiment-and-not-for-production-appssitesanything
 => 쿼리 베이스는 좋지만 역시 부족해 보인다.( 서버 사이드라는 점이 놀랍다.)
* https://github.com/firebase/geofire-js/blob/master/docs/reference.md#geofirequeryquerycriteria
 => 쿼리만이 아니라 파베 데이터베이스를 랩핑하는 좀 더 규모있는 라이브러리인듯.
* https://prescottprue.gitbooks.io/react-redux-firebase/content/queries.html
 => 오..음. 괜찮으나 파베의 정규 스펙을 뛰어 넘지는 못할 거 같애...
* 현재는 좀 더 고도화된 라이브러리를 기대하는 것은 조금 어려울 수도... 
* https://github.com/MicheleBertoli/react-fix-it
 => 긋!
* https://www.npmjs.com/package/react-immutable-proptypes 