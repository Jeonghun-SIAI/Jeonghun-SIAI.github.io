var store = [{
        "title": "회귀분석 관련 정리",
        "excerpt":"Ordinary least squares 선형회귀모델 $y=X \\beta + \\epsilon$ 에는 아래의 다섯가지 가정이 들어감. A1: $X$는 full rank임 (즉 특정 설명변수를 다른 설명변수들의 선형결합으로 완전하게 나타낼 수 없으며, $X’X$의 역행렬이 존재). 이 조건이 깨지면 estimator를 구할 수 없음. A2: 설명변수와 반응변수 간에 선형관계가 성립하고, 오차항의 편향이 없음 (즉 $\\text{E}[\\epsilon] = 0$)....","categories": ["mathstat"],
        "tags": [],
        "url": "/regression.html",
        "teaser": null
      },{
        "title": "Python 크롤링 코드 예시 (PubMed 사이트에서 논문 정보 크롤링)",
        "excerpt":"의사인 절친이 PubMed 사이트에서 수동으로 논문을 수집하고 있길래, 총 두 시간 정도를 써서 (초안 작성 후 개량 시간 포함) Python으로 아래의 web scrapper를 만들어 준 적이 있다. 아래의 web scrapper로 검색어에 대응하는 논문들의 URL/ 출판일/ 저자/ 소속/ 키워드/ 저널명 수집이 가능하다. 특히 검색 option을 포함한 상세 검색도 가능하다. 또한 $\\texttt{urlopen}$...","categories": ["etc"],
        "tags": ["크롤링","Python"],
        "url": "/scrapper.html",
        "teaser": null
      },{
        "title": "건물의 시간별 전기부하 학습 후 예측하기 - 딥러닝 대신 회귀분석으로",
        "excerpt":"시계열 데이터에 대해, 경우에 따라서는 전통적인 선형회귀가 딥러닝보다 더 좋은 예측력을 보인다는 놀라운(?) 사실을 아는가? 건물의 시간별 전기 부하 다음 그림은, 어떤 건물의 특정 1주일 간 각 시간별 전기 사용량 그래프들이다. 파란색 곡선은 K년도의 특정 1주일이고 (K는 2010~2022 사이의 어떤 자연수), 초록색 곡선은 K+1년도에서의 같은 1주일이다. 특정 건물 내 1주일...","categories": ["estimation"],
        "tags": ["회귀분석","딥러닝","부하패턴"],
        "url": "/predictionone.html",
        "teaser": null
      },{
        "title": "건물의 시간별 전기부하 학습 후 예측하기 - 딥러닝을 쓴다면?",
        "excerpt":"지난 포스팅에서는 건물의 시간별 전기부하 추정 모델을 딥러닝이 아닌 선형회귀 (Weighted Least squares + 잔차에 대한 SARMA) 로 구성하는 과정을 설명했다. 또한, 전통적인 선형회귀로도 adjusted $R^2$ 0.95 이상의 우수한 모델을 얻을 수 있음을 보였다. 이번 포스팅에서는, 딥러닝을 써서 모델을 만들어 본다. Dense Neural Net 전기부하 데이터는 시계열 데이터이므로 Recurrent Neural...","categories": ["estimation"],
        "tags": ["회귀분석","딥러닝","부하패턴"],
        "url": "/predictiontwo.html",
        "teaser": null
      },{
        "title": "내 Applied Energy 논문의 수학 설명 - '가짜' curtailment 문제",
        "excerpt":"필자가 국제학술지 Applied Energy (IF: 11.4)에 게재한 논문들 중 첫 번째 논문의 주제는, ‘태양광/ 풍력/ ESS를 포함한 고립계통에서 재생에너지 출력제한(curtailment)의 총량에 상한을 둘 경우’에 대한 최적화 문제 세팅 및 분석이다. (조금 자기PR 하자면, Applied Energy의 Impact Factor는 2020년 이전에도 7~8이었고 지금은 10이 넘으며, SJR에서 Energy(Miscellaneous) 부문에 속하는 100개 이상의 저널들...","categories": ["optimalsystem"],
        "tags": ["녹색섬","출력제한","선형계획법"],
        "url": "/mypaperone.html",
        "teaser": null
      },{
        "title": "내 Applied Energy 논문의 수학 설명 - 도심지 건축물 신재생 확대 영향 분석 시의 계산비용 절감",
        "excerpt":"필자가 국제학술지 Applied Energy (IF: 11.4)에 게재한 논문들 중 두 번째 논문의 주제는, ‘건축물에 설치되는 신재생에너지의 보급 확대 시의 도시 단위 영향 추정’을 보다 적은 계산비용으로 수행하는 방법이다. (조금 자기PR 하자면, Applied Energy의 Impact Factor는 2020년 이전에도 7~8이었고 지금은 10이 넘으며, SJR에서 Energy(Miscellaneous) 부문에 속하는 100개 이상의 저널들 중 한...","categories": ["optimalsystem"],
        "tags": ["건물 신재생에너지","건물 에너지 데이터","선형계획법","Clustering"],
        "url": "/mypapertwo.html",
        "teaser": null
      },{
        "title": "데이터 결측치 처리 예시 - 주택의 분 단위 전기 부하 자료",
        "excerpt":"스마트그리드 분야에 머신러닝/ 딥러닝/ 강화학습 기법이 어떻게 적용되는지에 대해 자세한 정보를 제공해주는 책으로 ‘스마트그리드 빅데이터 분석의 활용’ 이 있다. (링크) 이 책의 7장 ‘딥러닝을 이용한 스마트그리드 데이터 분석’ 에서는, 널리 알려진 backpropagation 기반 ANN 모델 뿐 아니라 (Factored Conditional) Restricted Boltzmann Machine 기반 모델을 이용해 전력 부하를 예측하는 연구를 소개한다....","categories": ["dataset"],
        "tags": ["SQL","부하패턴","건물 에너지 데이터","데이터 전처리","Python"],
        "url": "/preprocessmocanu.html",
        "teaser": null
      },{
        "title": "로지스틱 회귀에서의 over-confidence에 대한 이해",
        "excerpt":"Logistic regression에서는 각 point 별로 response $y$가 0과 1 중 1일 확률 추정값 $\\hat{y}$를 제공한다 (물론 실제 $y$값들은 알려져 있다). 한편, feature space에서 response가 1인 point들과 0인 point들이 완전히 linearly separable하면 (즉 $\\hat{y}=0.5$를 기준으로 misclassified point가 하나도 없으면), logistic regression 추정이 되지 않음이 잘 알려져 있다. Over-confidence란 Feature space에서 response가...","categories": ["mathstat"],
        "tags": ["회귀분석"],
        "url": "/overconfidence.html",
        "teaser": null
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 1) 최소비용 시스템과 시간별 자료의 중요성",
        "excerpt":"우리의 일상 생활에서 전기와 냉/난방 ‘에너지’는 떼어 놓을 수 없는 요소가 되었다. 또한 산업 현장에서도 전기와 고온의 열 ‘에너지’는 제품 생산에 필요하다. 버스/ 지하철/ 비행기 등 운송 수단도 연료 혹은 전기 ‘에너지’를 주입해야 움직인다. 이렇듯 에너지는 다양한 방식으로 우리 삶을 윤택하게 해 준다. 대신, 에너지를 쓰는 데는 비용이 든다. 개개인들이...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석"],
        "url": "/linprogone.html",
        "teaser": null
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 2) 배터리의 충/방전 스케줄 결정: 수식",
        "excerpt":"이제 본격적으로, 분산형 에너지시스템 도입의 경제적 안 도출을 위한 수학적 최적화 문제 구성을 알아보기로 한다. 대상 시스템 개요 이 글에서 설명할 예시 문제는, 일반용 요금제를 적용받는 건물에 100 kWh급 배터리가 설치되어 있을 경우, 평일 내 24시간 동안 각 시간별 배터리의 최적 충/방전 스케줄을 도출하는 문제이다. 최적이라 함은, 24시간 동안의 전기요금의...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석"],
        "url": "/linprogtwo.html",
        "teaser": null
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 3) 배터리의 충/방전 스케줄 결정: Python 코드",
        "excerpt":"이번 포스팅에서는, 건물 내 배터리 최적 스케줄 도출 문제를 선형계획법 (Linear Programming) 을 이용해서 풀어본다. Python에서 무료로 쓸 수 있는 cvxopt 패키지의 glpk 모듈로 문제를 풀 것이며, 문제를 코딩하는 방법을 상세히 설명한다. cvxopt는 무료인 만큼 계산 시간이 많이 필요하지만, 그래도 적절한 가정들 하에 간소화된 에너지 최적화 문제들은 푸는 것 자체는...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogthree.html",
        "teaser": null
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 4) 태양광과 배터리의 용량 결정",
        "excerpt":"지난 포스팅에서는 ‘주어진 용량의’ 배터리가 건물에 설치된 경우의 스케줄링을 설명했다. 그런데, 실제 상황에서는 배터리의 ‘용량도 결정’해야 하는 경우가 대부분이다. 그것도 경제성을 고려한 최적 용량으로 말이다. 그래서 이번 포스팅에서는 용량까지 결정하는 문제를 설명한다. 더불어, 건물에 배터리 뿐 아니라 태양광 패널도 설치해서 태양광+배터리 연계 시스템을 구축 시 각각의 용량을 결정하는 경우를 상정한다....","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogfour.html",
        "teaser": null
      },{
        "title": "강화학습 기반 마이크로그리드 스케줄링 - 1) 문제의식 및 케이스 소개",
        "excerpt":"에너지 시스템에서 재생에너지의 비중이 점점 커지는 추세이다. 이러한 추세가 계속될수록, 불확실성이 커져 당장 몇 시간 뒤의 발전량 예측조차도 불확실하게 된다. 이러한 불확실성에도 불구하고, 지금 얼마만큼의 에너지를 저장하고 얼마만큼의 에너지를 계통으로부터 받을지 등을 ‘잘’ 결정할 수 있어야 한다. 그래야 장기적인 에너지 공급 비용 및 화석연료 사용량 등을 줄일 수 있다. 풍력발전...","categories": ["energymanagement"],
        "tags": ["선형계획법","부하패턴","경제성분석","강화학습","녹색섬","Python"],
        "url": "/reinforceone.html",
        "teaser": null
      },{
        "title": "강화학습 기반 마이크로그리드 스케줄링 - 2) Q-learning 개념",
        "excerpt":"지난 포스팅에서, Vincent의 태양광 기반 마이크로그리드의 누적 비용을 최소화하는 최적 control 문제를 소개했다. 또한 이를 선형계획법으로 풀 경우 ‘미래의 태양광 발전량과 부하를 안다’라는, ‘비현실적’인 가정 하에서 control을 얻게 됨을 논했다. 이번 포스팅에서는 ‘매 시점별로 과거의 자료만을 갖고’ control하는 데 필요한 강화학습의 이론적 내용을 최대한 간단히 소개한다 (강화학습에 대한 상세 내용은...","categories": ["energymanagement"],
        "tags": ["강화학습"],
        "url": "/reinforcetwo.html",
        "teaser": null
      },{
        "title": "강화학습 기반 마이크로그리드 스케줄링 - 3) Deep Q-Network를 통한 discrete control 도출",
        "excerpt":"Vincent의 마이크로그리드 사례에서 Q-learning의 concept를 이용하기 위해, 실제로는 수전/송전이 continuous한 값임에도 불구하고, 1.1kW 수전/ 1.1kW 송전/ idle 의 3가지 action만을 고려하기로 했다. 각 action 별 인덱스는 0,1,2라 하자. Vincent의 연구에서 가정된 마이크로그리드. 이 때 심층신경망은 state를 입력받아 3개 action 각각의 Q-value의 추정치 $\\hat{Q}(s_{t},0), \\hat{Q} (s_{t},1), \\hat{Q} (s_{t},2)$ 를 출력으로 계산한다....","categories": ["energymanagement"],
        "tags": ["강화학습","녹색섬","Python"],
        "url": "/reinforcethree.html",
        "teaser": null
      },{
        "title": "강화학습 기반 마이크로그리드 스케줄링 - 4) DDPG를 통한 continuous control 도출",
        "excerpt":"Vincent의 마이크로그리드 사례에 ‘discrete’ action (1.1kW 수전/ 1.1kW 송전/ idle) 기반의 Deep Q-Network (DQN) 을 적용한 결과, 미래를 모른 채 과거 24시간 동안의 태양광 발전량과 부하 정보를 활용하더라도 충분히 economic control이 가능했다. Vincent의 연구에서 가정된 마이크로그리드. 그러나 실제로는 수전/송전이 continuous action이다. 그러므로, continuous action을 다루는 심층강화학습 기법을 적용하면 더 우수한...","categories": ["energymanagement"],
        "tags": ["강화학습","녹색섬","Python"],
        "url": "/reinforcefour.html",
        "teaser": null
      },{
        "title": "강화학습 기반 마이크로그리드 스케줄링 - 5) TD3/ SAC를 통한 continuous control 도출",
        "excerpt":"Deep Deterministic Policy Gradient (DDPG) 로 도출한 수전/송전의 continuous control이, 놀랍게도(?) Vincent의 마이크로그리드 사례에서는, DQN으로 도출한 3-actions discrete control 대비 더 좋지 않았다 (3개 action들은 각각 1.1kW 수전/ 1.1kW 송전/ idle). Vincent의 연구에서 가정된 마이크로그리드. 그렇다면 continuous control 도출을 위해 DDPG 이후에 개발된 더 진보된 방법을 쓴다면 어떨까? 진보된 방법들의...","categories": ["energymanagement"],
        "tags": ["강화학습","녹색섬","Python"],
        "url": "/reinforcefive.html",
        "teaser": null
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 1) 모든 월에 대한 통합 및 표제부와의 결합 후 SQLite DB화",
        "excerpt":"필자의 박사과정 졸업에 결정적인 역할을 했던 데이터셋이 있다. 건축물 별 월별 에너지 사용량 데이터다. 각 지번 주소 단위의 개별 비주거용 건물별로 특정 월에 소비한 전기와 가스의 양을 kWh 단위로 기록한 데이터셋이다. 어떤 건물의 1년 12개월 간 월별 전기 사용량과 가스 사용량은, 대부분 아래 그림과 같은 형태를 띤다. 특정 건물의 1월부터...","categories": ["dataset"],
        "tags": ["SQL","건물 에너지 데이터","Python"],
        "url": "/monthlyenergyone.html",
        "teaser": null
      },{
        "title": "WSL2 Ubuntu 22.04에 CUDA & cuDNN 설치하기",
        "excerpt":"이 블로그의 글을 무리 없이 읽을 정도의 독자라면, 복잡한 컴퓨터 환경 구축 때문에 많은 시간을 소비해 본 경험이 있을 것이다. 필자도 마찬가지다. 빠른 딥러닝 연산을 위해 NVIDIA CUDA를 설치하려다가, 계속되는 시행착오에 반나절을 넘게 컴퓨터만 붙잡고 있었다. 이에, 필자가 WSL2 Ubuntu 22.04 환경에 CUDA &amp; cuDNN을 설치하는 데 거쳤던 스텝들을 해당...","categories": ["etc"],
        "tags": ["딥러닝","Python"],
        "url": "/cudadudnn.html",
        "teaser": null
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 2) 월별 사용 추이가 이상한 data point 제거",
        "excerpt":"이전 포스팅에서 건물 에너지 관련 연구를 위한, 각 건물의 지번별/월별 전기/도시가스 사용량 데이터와 표제부의 결합을 소개했다. 그렇다면 결합된 데이터를 그대로 쓰면 되는가? 그렇지 않다. 분명히 ‘이상한’ data point들이 존재할 것이기 때문이다. 데이터 기반의 연구개발을 한다면, 이러한 ‘이상한’ data point들을 제거하거나 수정하는 데이터 전처리는 필수이다. 각 건물의 지번별 데이터는 row의 수가...","categories": ["dataset"],
        "tags": ["건물 에너지 데이터","회귀분석"],
        "url": "/monthlyenergytwo.html",
        "teaser": null
      },{
        "title": "건축물 별 월별 에너지 사용량 데이터셋 - 3) 월별 사용량 크기가 이상한 data point 제거",
        "excerpt":"이전 포스팅에서는 건물 월별 에너지 사용량의 ‘추이’가 이상한 data point를 판별하는 방법을 설명했다. 이번 포스팅에서는 월별 에너지 사용량의 ‘크기(magnitude)’가 이상한 data point를 판별하는 방법을 설명한다. 에너지 사용량 크기 측면에서의 outlier 상식적으로, 같은 용도의 건물이라면 크기가 큰 건물일수록 에너지 사용량이 큰 경향이 있을 것이다. 이를테면 서울 내 업무용 건물들의 1월 전기...","categories": ["dataset"],
        "tags": ["건물 에너지 데이터","회귀분석"],
        "url": "/monthlyenergythree.html",
        "teaser": null
      },{
        "title": "선형계획법 기반 분산에너지시스템 최적화 - 5) 정수 (integer) 변수 도입으로 현실 설명력 증대",
        "excerpt":"지금까지의 선형계획 관련 포스팅들에서는, 모든 변수들을 ‘음이 아닌 실수’ 라고 가정했다. 그러나, 만약 규격 용량이 정해진 발전기를 도입한다면, ‘이 발전기를 3.5대 도입하는 것이 최적이다’ 라고 보고하는 것은 비현실적이다. 발전기 대수는 3대 또는 4대이기 때문이다. 이런 발전기의 ‘대수’는 정수 (integer) 이기 때문에, 현실적인 결과를 원한다면 최적해에서도 정수로 도출되어야 한다. 이번 포스팅에서는...","categories": ["optimalsystem"],
        "tags": ["선형계획법","부하패턴","경제성분석","Python"],
        "url": "/linprogfive.html",
        "teaser": null
      }]
