---
layout: categories
classes: wide
title:  "회귀분석 관련 정리"
categories: Theory
typora-root-url: ../
toc: true
toc_sticky: true
toc_label:  Contents
toc_icon: "fas fa-smile-beam"
use_math: true
author_profile: false
sidebar:
    nav: "docs"
redirect_from:
    - /Regression/regression
---

## Ordinary least squares

* 선형회귀모델 $y=X \beta + \epsilon$ 에는 아래의 다섯가지 가정이 들어감.

    A1:  $X$는 full rank임 (즉 특정 설명변수를 다른 설명변수들의 선형결합으로 완전하게 나타낼 수 없으며, $X'X$의 역행렬이 존재). 이 조건이 깨지면 estimator를 구할 수 없음.

    A2: 설명변수와 반응변수 간에 선형관계가 성립하고, 오차항의 편향이 없음 (즉 $\text{E}[\epsilon] = 0$).

    A3: 설명변수 $X$와 오차항 $\epsilon$ 간에는 상관관계가 없음. $X$가 fixed된 값들이거나 (A3F) random이더라도 $\epsilon$과 완전히 독립인 경우 (A3Rfi), 또는 random인 $X$가 전부 주어졌을 때 오차항의 조건부평균 $\text{E}[ \epsilon\_{t} \| X] = 0$ 이면 (A3Rmi), estimator는 unbiased이면서 consistent함. 만약 $x\_i$가 적어도 같은 row의 $\epsilon\_{i}$와는 상관이 없다면 (A3Rsru), estimator는 biased일 수는 있으나 consistent함 (이를 테면 시계열에서 시점 $t$의 설명변수는, 과거의 오차항과는 상관이 있으나 현재 및 미래의 오차항과는 상관이 없음.

    A4: 오차항은 서로 독립이고 같은 분포를 따름, 즉 상관되어 있지 않고 일정한 분산을 가짐 (즉 $\text{E}[\epsilon \epsilon' \| X] = \sigma^2 I_N$). 이 조건이 깨지면 Generalized least square가 필요.

    A5: 오차항이 정규분포를 따름. A5가 만족될 경우 MLE estimator가 OLS estimator와 같으므로 OLS가 효율적임. 꼭 정규분포는 아니라도 오차항의 분포를 알아야 MLE를 쓸 수 있음.

* OLS에서 목적함수는 반응변수의 실제값과 추정값(설명변수 및 선형모델로 계산된) 간 차이의 제곱합인 $\sum_{i=1}^N [(y_i - x_i' \beta)^2 ] = (y-X\beta)'(y-X\beta)$ 이며, 이를 최소화하는 해는 $\hat{\beta}\_{OLS}=(X'X)^{-1}X'y$ 임.

* Vector space 관점에서 보면, $X\hat{\beta}\_{OLS}$는 $X$의 열공간의 원소이므로 $X\hat{\beta}\_{OLS} = X(X'X)^{-1}X'y = \hat{y}$ 는 $y$를 $X$의 열공간에 정사영한 벡터, 즉 $X$의 열공간에 속하는 벡터 중 $y$에 가장 가까운 벡터임. 이로부터 $y$를 $X$의 열공간 내의 벡터로 변환하는 사상에 대응되는 행렬 $X(X'X)^{-1}X'$를 hat matrix라 하며, $y$의 정보 중 $X$로 설명되는 정보만 남긴 결과로 볼 수 있음.

* A3Rsru 조건 $\text{E}[x_i \epsilon_i] = 0$ 으로부터 sample moment condition $\sum_{i=1}^N x_i (y_i - x_i' \beta)/N = 0$ 을 세워 계산한 method of moments estimator $\hat{\beta}\_{MME}$ 는 $\hat{\beta}\_{OLS}$와 같음.

* $y$와 $\hat{y}$ 간 차이는 잔차(residual, $\hat{\epsilon}$)임. 잔차벡터를 식으로 나타내면 $\epsilon = y - \hat{y} = (I-X(X'X)^{-1}X')y$ 임. 행렬 $I-X(X'X)^{-1}X'$를 projection matrix라 하며, $y$의 정보 중 $X$로 설명되지 않는 정보만 남긴 결과로 볼 수 있음.

* OLS에서의 잔차는 실제 오차와 다른 개념임. 실제로는 오차가 A4GM 가정을 만족하지 않더라도 OLS 잔차는 A4GM이 만족됨을 가정하고 계산된 값임. 그러므로 반드시 잔차 plot을 그려서 이분산이나 오차의 자기상관 등이 의심되는지를 확인해야 함. 또한 오차가 설명변수와 상관이 있든 없든, OLS 계산 결과인 잔차는 항상 $X$와 직교함 ($X \hat{\epsilon} = 0$). 그러므로 A3가정의 만족 여부는 잔차만으로는 알 수 없으며 endogeneity 관련 방법론이 필요함.

* A1, A2, A3Rmi가 만족되면, $\text{E}[\hat{\beta}\_{OLS} \| X] = \beta$, 즉 OLS estimator는 unbiased임 ($y=X\beta+\epsilon$으로부터 유도). 또한 OLS estimator의 공분산행렬을 계산하면 $\text{Var}[\beta\|X] = \sigma^2 (X'X)^{-1}$ 임 ($\hat{\beta}\_{OLS} - \beta = (X'X)^{-1}X'\epsilon$ 으로부터 유도).

* A1, A2, A3Rmi, A4가 만족되면, OLS estimator는 unbiased linear estimator ($\text{E}[\tilde{\beta}] = \beta$ 즉 unbiased 이면서, 어떤 full rank 행렬 A ($AX=I$) 에 대해 $\tilde{\beta} = Ay$ 즉 $y$에 대해 linear인 임의의 estimator) 들 중 분산이 가장 작은 (즉 가장 효율적인) estimator임. 이를 Gauss-Markov theorem이라 함.

* Gauss-Markov theorem에서는 A5 (오차항의 정규분포 가정) 가 필요하지 않았음에 주의. 또한 biased되어 있거나 nonlinear인 estimator 중에서는 $\hat{\beta}\_{OLS}$ 대비 분산이 더 작은 estimator가 존재할 수 있음 (이를 테면 $X$에 multicollinearity 문제가 있을 경우 이를 완화하기 위한 Ridge 회귀의 estimator는 biased estimator이지만 분산은 더 작음).

* A1, A2, A3Rsru, A4가 만족되면, 표본크기가 무한히 많아질 때 OLS estimator는 true $\beta$에 확률수렴함 (확률수렴이란 말은, $X$의 DGP를 고려 시 엄연히 확률변수인 $\hat{\beta}\_{OLS}$가, $N$이 무한히 커질 경우 true $\beta$에 매우 가까운 값으로 나올 확률이 100%임을 의미). 
이는 $ \hat{\beta}\_{OLS} - \beta = (X'X)^{-1}X'\epsilon = (X'X/N)^{-1} (X'\epsilon/N) $ 에 A3Rsru 조건 만족 시 $\text{plim} X'\epsilon/N=0$, 그리고 Slutsky theorem으로부터 $\text{plim}(X'X)^{-1}X'\epsilon$을  $\text{plim}(X'X/N)^{-1}=\Sigma_{xx}^{-1}$와 $\text{plim}X'\epsilon/N=0$의 곱으로 나타낼 수 있다는 사실로부터 유도됨.

* A1, A2, A3Rmi, A4가 만족되면, OLS estimator는 asymptotically normal, 즉 표본크기가 크다면 따로 A5 가정을 하지 않아도 근사적으로 정규분포를 따름. $X'\epsilon/N$을 $\epsilon_i$의 표본평균에 $X'$가 곱해진 것으로 해석하면, 중심극한정리에 의해 $\sqrt{N} (X'\epsilon/N - 0) \rightarrow N(0,\sigma^2 \Sigma\_{xx})$ 이고 $\sqrt{N} ((X'X/N)^{-1}X'\epsilon/N - 0) = \sqrt{N}(\hat{\beta}\_{OLS}-\beta) \rightarrow N(0,\sigma^2 \Sigma_{xx}^{-1})$ 이기 때문.

* 실제로는 오차분산 $\sigma^2$를 정확히 알지 못하므로 표본 기반으로 추정함. A1, A2, A3Rmi, A4 조건이 만족될 경우, $s^2 = \sum_{i=1}^N \hat{\epsilon}^2/(N-k)$ 는 $\sigma^2$의 unbiased and consistent estimator임 ($k$는 intercept를 포함한 parameter의 수). 또한 A5 조건까지 만족될 경우, $(N-k) s^2/\sigma^2 \sim \chi^2(N-k)$ 임.

* 선형회귀모델 $y = X \beta + \epsilon$ 을 설명변수의 group 기준으로 분해해서 $y = X_1 \beta_1 + X_2 \beta_2 + \epsilon$ 으로 볼 때, $\beta_1$은 $X_2$가 통제된 상태에서 $X_1$만의 변화에 따른 $y$의 변화를 나타내야 함. 그러므로 $\hat{\beta}_1$을 구할 때는, $X_1$로부터 $X_2$의 정보를 projection matrix를 곱해 제거한 $(I - X_2(X_2'X_2)^{-1}X_2')X_1 = M_2 X_1$ 을 기반으로 회귀해 구해야 함. 즉 $\hat{\beta}_1 = (X_1'M_2 X_1)^{-1} X_1' M_2 y$ 임 (projection matrix가 idempotent, 즉 $M_2^2 = M_2$임을 이용함).

* 선형회귀모델 $y = X \beta + \epsilon$ 을 위에서는 $X$의 column을 기준으로 분해했는데, 이와 달리 모델을 row 기준으로 분해할 경우 (이를테면 특정 행 기준으로 old와 new로 구분할 경우), $X'X \hat{\beta} = X'y$ 로부터 아래와 같이 됨. 
$ \begin{bmatrix}
        X_{old}' & X_{new}'
    \end{bmatrix}  
    \begin{bmatrix}
        X_{old} \\ 
        X_{new}
    \end{bmatrix}  
    \hat{\beta} = 
    \begin{bmatrix}
        X_{old}' & X_{new}'
    \end{bmatrix}  
    \begin{bmatrix}
        y_{old} \\ 
        y_{new}
    \end{bmatrix}  
    \, \Rightarrow \, [X_{old}'X_{old} + X_{new}'X_{new}] \hat{\beta} = X_{old}' y_{old} + X_{new}' y_{new} $
    이를 데이터의 갱신으로 보면 $X_{old}'X_{old}$ 및 $(X_{old}'X_{old})^{-1}$ 가 계산되어 있는 상황이므로, 새로운 데이터 행렬 전체에 대해 새로 계산할 필요 없이 아래 식으로부터 $\hat{\beta}$를 빠르게 계산할 수 있음.
    $ [X_{old}'X_{old} + X_{new}'X_{new}]^{-1} = (X_{old}'X_{old})^{-1} - (I+ X_{new} (X_{old}'X_{old})^{-1} X_{new}' )^{-1} (X_{old}'X_{old})^{-1} X_{new}'X_{new} (X_{old}'X_{old})^{-1} $



## Maximum likelihood estimation in linear regression
 


* A1부터 A5까지의 가정들이 성립 시, $y_i = x_i'\beta + \epsilon_i$는 $x_i, \beta, \sigma^2$가 주어질 경우 오차항이 iid이며 정규분포를 따른다는 가정으로부터 $y_i \| x_i, \beta, \sigma^2 \sim N(x_i' \beta, \sigma^2)$ 임. 그러므로 $y$ 전체의 likelihood 및 log-likelihood는 아래와 같음.
$ L(y_i \| x_i, \beta, \sigma^2) = \prod_{i=1}^N \frac{1}{\sqrt{(2\pi \sigma^2)^N}} \text{exp} \left( -\frac{(y_i - x_i'\beta)^2}{2 \sigma^2} \right)  = \frac{1}{\sqrt{(2\pi \sigma^2)^N}} \text{exp} \left( -\frac{1}{2 \sigma^2} (y-X\beta)'(y-X\beta) \right)   $
$ \text{log} L(y_i \| x_i, \beta, \sigma^2) = - \frac{N}{2} \text{log}(2 \pi) - \frac{N}{2} \text{log}(\sigma^2) - \frac{1}{2 \sigma^2} (y-X\beta)'(y-X\beta) $
여기서 log-likelihood에 $-(y-X\beta)'(y-X\beta)$ 가 포함되어 있으므로, $\sigma^2$가 주어질 때 log-likelihood를 최대화하는 추정량 $\hat{\beta}_{MLE}$는 $(y-X\beta)'(y-X\beta)$를 최소화하는 추정량, 즉 OLS 추정량과 같음.

* $\beta$가 주어질 때 log-likelihood를 최대화하는 $\sigma^2$의 추정량은 $\widehat{\sigma^2}\_{MLE} = \hat{\epsilon}' \hat{\epsilon}/N$, 즉 잔차제곱합을 표본 크기로 나눈 값이 됨. 이는 biased estimator임 (OLS에서의 unbiased estimator는 잔차제곱합을 $N-k$로 나눈 값이었음). 그러나 표본크기가 무한히 커지면 $N-k$와 $N$이 비슷해지므로, $\sigma^2$의 maximum likelihood 추정량은 consistent함.

* MLE에서 parameter를 $\theta$라 할 때 $\theta$의 분산은 log-likelihood의 Hessian의 평균에 마이너스를 붙인 후 역행렬을 취한 $(-\text{E}[H(\theta)])^{-1}$로 주어짐. 이 때 $(-\text{E}[H(\theta)])$ 를 information matrix $I(\theta)$라 부르기도 하며, $\text{Var}[\theta] = I(\theta)^{-1}$ 임. 
이에 따라 계산하면 $\text{Var}[\hat{\beta}\_{MLE}] = \sigma^2(X'X)^{-1}$을 얻고 (OLS estimator의 공분산행렬과 같음), $\text{Var}[\widehat{\sigma^2}\_{MLE}] = 2\sigma^4/N$을 얻음.

* MLE로 추정한 추정량은 consistent하며, asymptotic normal이고, Consistent Uniformly Asymptotically Normal (CUAN) 성질을 갖는 estimator들 중 가장 효율적인 추정량임 (MLE 추정량의 공분산행렬은 CUAN estimator들의 Cramer-Rao lower bound, 즉 unbiased estimator가 가지는 분산의 하한임). 그러므로 오차항의 분포에 확신이 있다면, MLE를 쓰는 것이 가장 좋음.
	
