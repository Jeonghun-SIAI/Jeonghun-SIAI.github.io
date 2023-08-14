var store = [{
        "title": "Python 크롤링 코드 예시 (PubMed 사이트에서 논문 정보 크롤링)",
        "excerpt":"의사인 절친이 PubMed 사이트에서 수동으로 논문을 수집하고 있길래, 총 두 시간 정도를 써서 (초안 작성 후 개량 시간 포함) Python으로 아래의 web scrapper를 만들어 준 적이 있다. 아래의 web scrapper로 검색어에 대응하는 논문들의 URL/ 출판일/ 저자/ 소속/ 키워드/ 저널명 수집이 가능하다. 특히 검색 option을 포함한 상세 검색도 가능하다. 또한 $\\texttt{urlopen}$...","categories": ["etc"],
        "tags": ["크롤링","Python"],
        "url": "/scrapper.html",
        "teaser": null
      },{
        "title": "회귀분석 관련 정리",
        "excerpt":"Ordinary least squares 선형회귀모델 $y=X \\beta + \\epsilon$ 에는 아래의 다섯가지 가정이 들어감. A1: $X$는 full rank임 (즉 특정 설명변수를 다른 설명변수들의 선형결합으로 완전하게 나타낼 수 없으며, $X’X$의 역행렬이 존재). 이 조건이 깨지면 estimator를 구할 수 없음. A2: 설명변수와 반응변수 간에 선형관계가 성립하고, 오차항의 편향이 없음 (즉 $\\text{E}[\\epsilon] = 0$)....","categories": ["mathstat"],
        "tags": [],
        "url": "/regression.html",
        "teaser": null
      },{
        "title": "내 Applied Energy 논문의 수학 설명 - '가짜' curtailment 문제",
        "excerpt":"필자가 국제학술지 Applied Energy (IF: 11.4)에 게재한 논문들 중 첫 번째 논문의 주제는, ‘태양광/ 풍력/ ESS를 포함한 고립계통에서 재생에너지 출력제한(curtailment)의 총량에 상한을 둘 경우’에 대한 최적화 문제 세팅 및 분석이다. (조금 자기PR 하자면, Applied Energy의 Impact Factor는 2020년 이전에도 7~8이었고 지금은 10이 넘으며, SJR에서 Energy(Miscellaneous) 부문에 속하는 100개 이상의 저널들...","categories": ["mypapers"],
        "tags": ["녹색섬","출력제한","선형계획법"],
        "url": "/mypaperone.html",
        "teaser": "/assets/images/mypaperone/islandsystem.png"
      },{
        "title": "내 Applied Energy 논문의 수학 설명 - 도심지 건축물 신재생 확대 영향 분석 시의 계산비용 절감",
        "excerpt":"필자가 국제학술지 Applied Energy (IF: 11.4)에 게재한 논문들 중 두 번째 논문의 주제는, ‘건축물에 설치되는 신재생에너지의 보급 확대 시의 도시 단위 영향 추정’을 보다 적은 계산비용으로 수행하는 방법이다. (조금 자기PR 하자면, Applied Energy의 Impact Factor는 2020년 이전에도 7~8이었고 지금은 10이 넘으며, SJR에서 Energy(Miscellaneous) 부문에 속하는 100개 이상의 저널들 중 한...","categories": ["mypapers"],
        "tags": ["건물 신재생에너지","건물 에너지 데이터","선형계획법","Clustering"],
        "url": "/mypapertwo.html",
        "teaser": "/assets/images/mypapertwo/result.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 1) 경제성을 고려한 시스템 구성 도출 (시간별 자료 기반)",
        "excerpt":"우리의 일상 생활에서 전기와 냉/난방 ‘에너지’는 떼어 놓을 수 없는 요소가 되었다. 또한 산업 현장에서도 전기와 고온의 열 ‘에너지’는 제품 생산에 필요하다. 버스/ 지하철/ 비행기 등 운송 수단도 연료 혹은 전기 ‘에너지’를 주입해야 움직인다. 이렇듯 에너지는 다양한 방식으로 우리 삶을 윤택하게 해 준다. 대신, 에너지를 쓰는 데는 비용이 든다. 개개인들이...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석"],
        "url": "/linprogone.html",
        "teaser": "/assets/images/linprogone/distributedenergysystem_iea.jpg"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 2) 배터리의 충/방전 스케줄 결정: 수식",
        "excerpt":"이제 본격적으로, 분산형 에너지시스템 도입의 경제적 안 도출을 위한 수학적 최적화 문제 구성을 알아보기로 한다. 대상 시스템 개요 이 글에서 설명할 예시 문제는, 일반용 (계시별) 요금제를 적용받는 건물에 100 kWh급 배터리가 설치되어 있을 경우, 평일 내 24시간 동안 각 시간별 배터리의 최적 충/방전 스케줄을 도출하는 문제이다. 최적이라 함은, 24시간 동안의...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석"],
        "url": "/linprogtwo.html",
        "teaser": "/assets/images/linprogtwo/system_batt.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 3) 배터리의 충/방전 스케줄 결정: Python 코드 및 결과",
        "excerpt":"이번 포스팅에서는, 건물 내 배터리 최적 스케줄 도출 문제를 선형계획법 (Linear Programming) 을 이용해서 풀어본다. Python에서 무료로 쓸 수 있는 cvxopt 패키지의 glpk 모듈로 문제를 풀 것이며, 문제를 코딩하는 방법을 상세히 설명한다. cvxopt는 무료인 만큼 성능은 떨어져 계산 시간이 많이 필요하지만, 그래도 적절한 가정들 하에 간소화된 에너지 최적화 문제들은 푸는...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogthree.html",
        "teaser": "/assets/images/linprogthree/result_24hour.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 4) 태양광과 배터리의 '용량' 결정: 목적함수 ('현재가치' 비용) 및 수식",
        "excerpt":"지난 포스팅에서는 ‘주어진 용량의’ 배터리가 건물에 설치된 경우의 스케줄링을 설명했다. 그런데, 실제 상황에서는 배터리의 ‘용량’도 경제성을 고려해 결정해야 할 것이다. 그래서 이번 포스팅에서는 용량까지 결정하는 문제를 설명한다. 더불어, 건물에 배터리 뿐 아니라 태양광 패널도 설치해서 태양광+배터리 연계 시스템을 구축 시 각각의 용량을 결정하는 경우를 상정한다. 태양광과 배터리를 포함하는 건물 전기...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogfour.html",
        "teaser": "/assets/images/linprogfour/system_pvbatt.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 5) 태양광과 배터리의 '용량' 결정: 코드, 결과, 투자회수기간 및 절감량 계산",
        "excerpt":"지난 포스팅에 이어, 분산에너지시스템 설비의 ‘용량’을 경제성 기반으로 결정하는 문제를 설명한다. 이번에는 지난 포스팅의 내용에 대한 코드, 결과 예시, 그리고 투자회수기간과 전기/ 전기요금/ 탄소 절감량 계산 방법을 설명한다. 1년치 자료로 계산하기 이미 지난 포스팅에서 눈치챈 사람도 있겠지만, 시간별 스케줄 뿐 아니라 용량을 결정하는 문제가 되면서, 문제의 scale이 매우 커졌다. 하루...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogfive.html",
        "teaser": "/assets/images/linprogfive/result_year.png"
      },{
        "title": "WSL2 Ubuntu 22.04에 CUDA & cuDNN 설치하기",
        "excerpt":"이 블로그의 글을 무리 없이 읽을 정도의 독자라면, 복잡한 컴퓨터 환경 구축 때문에 많은 시간을 소비해 본 경험이 있을 것이다. 필자도 마찬가지다. 빠른 딥러닝 연산을 위해 NVIDIA CUDA를 설치하려다가, 계속되는 시행착오에 반나절을 넘게 컴퓨터만 붙잡고 있었다. 이에, 필자가 WSL2 Ubuntu 22.04 환경에 CUDA &amp; cuDNN을 설치하는 데 거쳤던 스텝들을 해당...","categories": ["etc"],
        "tags": ["딥러닝","Python"],
        "url": "/cudadudnn.html",
        "teaser": null
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 6) 정수 (integer) 변수 도입으로 현실 설명력 증대",
        "excerpt":"지금까지의 선형계획 관련 포스팅들에서는, 모든 변수들을 ‘음이 아닌 실수’ 라고 가정했다. 그러나, 만약 규격 용량이 정해진 발전기를 도입한다면, ‘이 발전기를 3.5대 도입하는 것이 최적이다’ 라고 보고하는 것은 비현실적이다. 발전기 대수는 3대 또는 4대이기 때문이다. 이런 발전기의 ‘대수’는 정수 (integer) 이기 때문에, 현실적인 결과를 원한다면 최적해에서도 정수로 도출되어야 한다. 이번 포스팅에서는...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogsix.html",
        "teaser": "/assets/images/mypaperone/islandsystem.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 7) 공동주택의 '누진제' 전기요금 (단일계약) 수식",
        "excerpt":"이전에 건물 내 태양광/배터리 설치 시의 최적 용량/스케줄 도출에 대해 설명했는데, 이는 ‘시간별 요금제를 적용받는 일반용 건물’에 대한 내용이었다. 그런데 주택에서는, ‘누진제’라 불리는, 전기를 많이 쓰면 단가가 올라가 요금이 급증하는 요금 체계를 적용한다. 다들 여름에 집에서 에어컨을 빵빵하게 틀기 부담스러워했던 기억이 있을 것이다. 이는 에어컨 때문에 전기 사용량이 많아지면, 일정...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogseven.html",
        "teaser": "/assets/images/linprogseven/graph.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 8) 전기 부하와 냉/난방 부하를 동시에 고려 (섹터커플링)",
        "excerpt":"이전 포스팅들에서는 전기 부하만을 다루었으나, 실제로는 냉방/난방/급탕 등 열 부하 또한 에너지 소비에서 상당한 비중을 차지한다. 따라서 ‘전기와 열을 모두’ 공급하는 분산형 에너지시스템의 최적 구성 및 스케줄을 도출할 수 있어야 한다. 이전부터 열병합 발전기/ 히트펌프/ 흡수식 냉동기 등 설비 도입 고려 시, 전기와 열을 동시에 고려하는 문제를 구성하고 풀어야 했다....","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogeight.html",
        "teaser": "/assets/images/linprogeight/systemfigure.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 9) '부분'부하 관련 제약들",
        "excerpt":"지난 포스팅에서는 설비의 효율과 COP(성능계수)를 상수로 가정했지만, 실제로는 부하율에 따라 효율과 COP가 달라진다. 이를테면 열병합발전기의 경우, 최대 출력(정격 출력)으로 운전할 때 비해 더 낮은 출력으로 ‘부분부하’운전 시 발전효율이 저하됨이 알려져 있다. 이를 고려하지 않으면 열병합발전기의 경제성을 과대평가하게 될 위험이 있다. 열병합발전기의 통상적인 부하율-효율 그래프. 낮은 부하율에서 효율이 저하됨. 출처: “Modeling...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprognine.html",
        "teaser": "/assets/images/linprognine/chp_eff.png"
      },{
        "title": "데이터 결측치 처리 예시 - 주택의 분 단위 전기 부하 자료",
        "excerpt":"스마트그리드 분야에 머신러닝/ 딥러닝/ 강화학습 기법이 어떻게 적용되는지에 대해 자세한 정보를 제공해주는 책으로 ‘스마트그리드 빅데이터 분석의 활용’ 이 있다. 이 책의 7장 ‘딥러닝을 이용한 스마트그리드 데이터 분석’ 에서는, 널리 알려진 backpropagation 기반 ANN 모델 뿐 아니라 (Factored Conditional) Restricted Boltzmann Machine 기반 모델을 이용해 전력 부하를 예측하는 연구를 소개한다. Mocanu의...","categories": ["dataset"],
        "tags": ["SQL","부하패턴","건물 에너지 데이터","데이터 전처리","Python"],
        "url": "/preprocessmocanu.html",
        "teaser": "/assets/images/preprocessmocanu/data_questionmarks.png"
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 10) 출력 조정 관련 제약들",
        "excerpt":"에너지 전환기 이전의 전통적 발전 포트폴리오에서도, 연료비가 저렴하고 탄소 배출이 적은 원자력’만’을 쓰지 않고 석탄/ 가스(LNG)/ 중유/ 양수발전 등을 결합해 구성했다. 이는 시간별로 전기 부하가 달라지며, 전원별로 ‘부하 변동에 대응하는 출력 조정 능력’이 다르기 때문이다. 시간대별 발전 포트폴리오. 일정 출력을 유지하는 기저설비, 특정 시간대에만 가동되는 첨두설비로 구성됨. (출처: 전력거래소) 위...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogten.html",
        "teaser": "/assets/images/linprogten/portfolio.png"
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 1) 모든 월에 대한 통합 및 표제부와의 결합 후 SQLite DB화",
        "excerpt":"필자의 박사과정 졸업에 결정적인 역할을 했던 데이터셋이 있다. 건축물 별 월별 에너지 사용량 데이터다. 각 지번 주소 단위의 개별 비주거용 건물별로 특정 월에 소비한 전기와 가스의 양을 kWh 단위로 기록한 데이터셋이다. 어떤 건물의 1년 12개월 간 월별 전기 사용량과 가스 사용량은, 대부분 아래 그림과 같은 형태를 띤다. 특정 건물의 1월부터...","categories": ["dataset"],
        "tags": ["SQL","건물 에너지 데이터","Python"],
        "url": "/monthlyenergyone.html",
        "teaser": "/assets/images/monthlyenergyone/typicalpattern.png"
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 2) 월별 사용 추이가 이상한 data point 제거",
        "excerpt":"이전 포스팅에서, 건물 지번별/월별 전기/도시가스 사용량 데이터와 표제부의 결합을 소개했다. 해당 데이터셋을 그대로 쓰면 되는가? 그렇지 않다. 분명히 ‘이상한’ data point들이 존재할 것이며, 이상한 data point들을 ‘전처리’해야 올바른 연구 결과를 얻을 수 있다. 데이터 전처리 종류 가장 먼저 떠올릴 전처리는, 누락이 있는 point 제거이다. 이미 이전 포스팅의 마지막 부분에서 SQLite...","categories": ["dataset"],
        "tags": ["건물 에너지 데이터","회귀분석"],
        "url": "/monthlyenergytwo.html",
        "teaser": "/assets/images/monthlyenergytwo/teaser_monthlyenergytwo.png"
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 3) 월별 사용량 크기가 이상한 data point 제거",
        "excerpt":"이전 포스팅에서는 건물 월별 에너지 사용량의 ‘추이’가 이상한 data point를 판별하는 방법을 설명했다. 이번 포스팅에서는 월별 에너지 사용량의 ‘크기(magnitude)’가 이상한 data point를 판별하는 방법을 설명한다. 에너지 사용량 크기 측면에서의 outlier 상식적으로, 같은 용도의 건물이라면 크기가 큰 건물일수록 에너지 사용량이 큰 경향이 있을 것이다. 이를테면 서울 내 업무용 건물들의 1월 전기...","categories": ["dataset"],
        "tags": ["건물 에너지 데이터","회귀분석"],
        "url": "/monthlyenergythree.html",
        "teaser": "/assets/images/monthlyenergythree/outliers.png"
      },{
        "title": "건물의 시간별 전기부하 학습 후 예측하기 - 딥러닝 대신 회귀분석으로",
        "excerpt":"시계열 데이터에 대해, 경우에 따라서는 전통적인 선형회귀가 딥러닝보다 시간을 훨씬 덜 쓰고도 더 좋은 예측력을 보인다는 놀라운(?) 사실을 아는가? 건물의 시간별 전기 부하 다음 그림은, 어떤 건물의 특정 1주일 간 각 시간별 전기 사용량 그래프들이다. 파란색 곡선은 K년도의 특정 1주일이고 (K는 2010~2022 사이의 어떤 자연수), 초록색 곡선은 K+1년도에서의 같은 1주일이다....","categories": ["estimation"],
        "tags": ["회귀분석","딥러닝","부하패턴"],
        "url": "/predictionone.html",
        "teaser": "/assets/images/predictionone/predict_arma.png"
      },{
        "title": "건물의 시간별 전기부하 학습 후 예측하기 - 딥러닝을 쓴다면?",
        "excerpt":"지난 포스팅에서는, 건물의 시간별 전기부하 추정 문제에서 딥러닝이 아닌 ‘전통적인’ 선형회귀로도, 적절한 모델 구성 시 adjusted $R^2$ 0.95 이상의 우수한 성능을 얻을 수 있음을 보였다. 그렇다면, 딥러닝으로는 어떨까? Dense Neural Net 전기부하 데이터는 시계열 데이터이므로 Recurrent Neural Network (RNN) 을 쓸 수 있으나, 먼저 단순한 Dense Neural Network (DNN) 을...","categories": ["estimation"],
        "tags": ["회귀분석","딥러닝","부하패턴"],
        "url": "/predictiontwo.html",
        "teaser": "/assets/images/predictiontwo/predict_rnn_nodummy.png"
      },{
        "title": "강화학습 기반 마이크로그리드 control - 1) 미래를 모를 때의 '경제적' control을 위한 강화학습",
        "excerpt":"재생 발전의 비중이 커질수록, 당장 몇 시간 뒤의 발전량 및 순 부하 (재생발전량을 제한 net power load) 예측조차도 어려워진다. 이런 상황에서 과거 데이터들을 잘 이용해서 ‘경제적으로’ 전력을 공급하도록 설비들을 control하는 것이, ‘스마트’그리드의 중요한 과제이다. 풍력발전 예측 시의 신뢰구간이 큼. 즉, 재생발전 비중이 높으면 발전량의 단기적 예측도 어려움. (출처: http://www.ningzhang.net/Renewables.html) 선형계획법의...","categories": ["energymanagement"],
        "tags": ["선형계획법","부하패턴","경제성분석","강화학습","녹색섬","Python"],
        "url": "/reinforceone.html",
        "teaser": "/assets/images/reinforceone/system.png"
      },{
        "title": "로지스틱 회귀에서의 over-confidence에 대한 이해",
        "excerpt":"Logistic regression에서는 각 point 별로 response $y$가 0과 1 중 1일 확률 추정값 $\\hat{y}$를 제공한다 (물론 실제 $y$값들은 알려져 있다). 한편, feature space에서 response가 1인 point들과 0인 point들이 완전히 linearly separable하면 (즉 $\\hat{y}=0.5$를 기준으로 misclassified point가 하나도 없으면), logistic regression 추정이 되지 않음이 잘 알려져 있다. Over-confidence란 Feature space에서 response가...","categories": ["mathstat"],
        "tags": ["회귀분석"],
        "url": "/overconfidence.html",
        "teaser": null
      },{
        "title": "강화학습 기반 마이크로그리드 control - 2) 강화학습의 기본, Q-learning 리뷰",
        "excerpt":"지난 포스팅에서, Vincent의 태양광 기반 마이크로그리드의 누적 비용을 최소화하는 최적 control 문제를 소개했다. 또한 이를 선형계획법으로 풀 경우 ‘미래의 태양광 발전량과 부하를 안다’라는, ‘비현실적’인 가정 하의 control을 도출함을 보였다. 이번 포스팅에서는 ‘매 시점별로 과거의 자료만을 갖고’ control하는 데 필요한 강화학습의 이론적 내용을 최대한 간단히 소개한다 (강화학습에 대한 상세 내용은 Sutton의...","categories": ["energymanagement"],
        "tags": ["강화학습"],
        "url": "/reinforcetwo.html",
        "teaser": "/assets/images/reinforcetwo/reinforcement_deep.png"
      },{
        "title": "강화학습 기반 마이크로그리드 control - 3) Deep Q-Network를 통한 3-action control 도출",
        "excerpt":"Vincent의 마이크로그리드 사례에서 Q-learning의 concept를 이용하기 위해, 실제로는 수전/송전이 continuous한 값임에도 불구하고, 1.1kW 수전/ 1.1kW 송전/ idle 의 3가지 action만을 고려하기로 했다. 각 action 별 인덱스는 0, 1, 2라 하자. Vincent의 연구에서 가정된 마이크로그리드. 이 때 심층신경망은 state를 입력받아 3개 action 각각의 Q-value의 추정치 $Q(s_{t},0), Q(s_{t},1), Q(s_{t},2)$ 를 출력으로 계산한다....","categories": ["energymanagement"],
        "tags": ["강화학습","녹색섬","Python"],
        "url": "/reinforcethree.html",
        "teaser": "/assets/images/reinforcethree/nn.png"
      },{
        "title": "강화학습 기반 마이크로그리드 control - 4) DDPG를 이용한 'continuous' control 도출",
        "excerpt":"실제로는 수전/송전이 continuous action임에도, Vincent의 마이크로그리드 사례에선 ‘discrete’ action (1.1kW 수전/ 1.1kW 송전/ idle)으로도 충분히 economic control이 가능했다. 그렇다면, continuous action을 다루는 심층강화학습 기법을 적용하면 더 우수한 economic control이 가능할 지 궁금해진다. Vincent의 연구에서 가정된 마이크로그리드. 이번에는 continuous control의 기본적인 방법인 Deep Deterministic Policy Gradient (DDPG)를 적용해서, 수전/송전에 대한 continuous...","categories": ["energymanagement"],
        "tags": ["강화학습","녹색섬","Python"],
        "url": "/reinforcefour.html",
        "teaser": "/assets/images/reinforcefour/result_ddpg.png"
      },{
        "title": "강화학습 기반 마이크로그리드 control - 5) TD3/ SAC 등 '진보된' continuous control을 쓴다면?",
        "excerpt":"Deep Deterministic Policy Gradient (DDPG) 로 도출한 수전/송전의 continuous control이, 놀랍게도(?) Vincent의 마이크로그리드 사례에서는, DQN으로 도출한 3-actions discrete control 대비 더 좋지 않았다 (3개 action들은 각각 1.1kW 수전/ 1.1kW 송전/ idle). Vincent의 연구에서 가정된 마이크로그리드. 그렇다면 continuous control 도출을 위해 DDPG 이후에 개발된 더 진보된 방법을 쓴다면 어떨까? 진보된 방법들의...","categories": ["energymanagement"],
        "tags": ["강화학습","녹색섬","Python"],
        "url": "/reinforcefive.html",
        "teaser": "/assets/images/reinforcefive/result_td3sac.png"
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 4) 결측치 추정: 조건부 다변량정규분포를 이용해서",
        "excerpt":"건축물 별 월별 에너지 사용량 데이터셋에는 종종 값의 누락, 즉 결측치가 있다. 결측치가 있는 row들은 실제로는 활용이 불가능한데 용량만 차지하는 골칫덩어리이다. 대신 결측치를 ‘합리적으로’ 메꿀 수 있다면, 쓸 수 있는 데이터의 양이 많아지므로 분석의 정확도가 올라갈 것이다. 월별 사용량 데이터셋의 결측치 및 비정상적인 값들. 참값에 대한 합리적인 추정이 필요하다. Naive한...","categories": ["dataset"],
        "tags": ["건물 에너지 데이터","회귀분석"],
        "url": "/monthlyenergyfour.html",
        "teaser": "/assets/images/monthlyenergyfour/teaser_monthlyenergyfour.png"
      },{
        "title": "Beer-Quiche game (동태적 미비정보 게임) 답안",
        "excerpt":"아래 링크의 글을 보면, 자율주행차 구현을 위해서는 앞 차의 type을 고려한 Dynamic Bayesian update로 ‘equilibrium’ 을 계산하는 게임이론 방법론이 필요하다고 한다. 자율주행차에 게임이론이 들어간다고?” 관련 예시로 Beer-Quiche game을 들었는데, 해당 예시에 대해 필자 나름의 답안을 작성해보았다. 게임 구성 서부개척시대의 술집에 총잡이 두 명이 있다. 총잡이 1은 마실 것을 찾으러 왔으며,...","categories": ["mathstat"],
        "tags": ["게임이론"],
        "url": "/beerquiche.html",
        "teaser": "/assets/images/beerquiche/beerquiche.png"
      },{
        "title": "에너지 분야 최적화/ 게임이론/ 데이터과학 관련 교육 추천: DTU summer school",
        "excerpt":"에너지시스템 planning/ scheduling 관련 연구자라면 고급 최적화 기법, 시장 문제에서의 게임이론적 접근, 시계열 데이터 예측 등의 지식들이 필요하다고 느낀 적이 있을 것이다. 관련해 좋은 교육 자료를 소개한다. Technical University of Denmark에서 매년 주최하는 summer school이다. (홈페이지 (강의 슬라이드들 포함)) (Youtube 채널) 박사과정 동안 해당 채널에서 다루는 주제들의 존재 자체는 알았으나,...","categories": ["market"],
        "tags": ["최적화","게임이론","회귀분석","에너지시스템"],
        "url": "/dturecommendation.html",
        "teaser": "/assets/images/dturecommendation/channel.png"
      },{
        "title": "에너지시스템 최적화/게임이론 강의: 1) Market clearing as an optimization problem",
        "excerpt":"이 포스팅은, Technical University of Denmark의 박사과정 과목 “Advanced Optimization and Game Theory for Energy Systems” (Prof. Jalal Kazempour) 의 1강을 필자가 요약한 내용이다. (Course slides 링크) Market clearing price 결정 Market clearing이란, ‘수요와 공급을 일치시킬 때의 (단일)가격을 결정하는 과정’이다. 이를테면 아래 슬라이드처럼, 두 개의 발전기와 두 개의 수요처가 전력시장에서...","categories": ["market"],
        "tags": ["최적화","게임이론","에너지시스템"],
        "url": "/jalalone.html",
        "teaser": "/assets/images/jalal/Lecture1_1.png"
      },{
        "title": "에너지시스템 최적화/게임이론 강의: 2) Market clearing as an equilibrium problem",
        "excerpt":"이 포스팅은, Technical University of Denmark의 박사과정 과목 “Advanced Optimization and Game Theory for Energy Systems” (Prof. Jalal Kazempour) 의 2강을 필자가 요약한 내용이다. (Course slides 링크) 최적화 기반 market clearing 결과는 game의 ‘Nash 균형’인가? 지난 강의에서 최적화 문제를 풀어서 각 발전기의 발전량, 각 수요처의 전기부하, 그리고 가격을 결정했다. 그런데,...","categories": ["market"],
        "tags": ["최적화","게임이론","에너지시스템"],
        "url": "/jalaltwo.html",
        "teaser": "/assets/images/jalal/Lecture2_1.png"
      },{
        "title": "에너지시스템 최적화/게임이론 강의: 3) Desirable properties of market-clearing mechanisms",
        "excerpt":"이 포스팅은, Technical University of Denmark의 박사과정 과목 “Advanced Optimization and Game Theory for Energy Systems” (Prof. Jalal Kazempour) 의 3강을 필자가 요약한 내용이다. (Course slides 링크) Market clearing mechanism이 추구하는 4가지 성질들 1강에서는 market clearing이 social welfare를 최대화하는 최적화 문제의 풀이 결과임을 보였고, 2강에서는 최적화 결과가 Nash 균형이므로 어떤...","categories": ["market"],
        "tags": ["최적화","게임이론","에너지시스템"],
        "url": "/jalalthree.html",
        "teaser": "/assets/images/jalal/Lecture3_1.png"
      }]
