---


---

<h1 id="hedwig-server-api-document">Hedwig Server API Document</h1>
<p>HedwigのテストNode.JSサーバーAPIドキュメントです。</p>
<h1 id="api-doc">API DOC</h1>
<h3 id="목차">목차</h3>
<ul>
<li><a href="https://gitlab.com/LAINO/kcode-server#common">common</a>
<ul>
<li><a href="https://gitlab.com/LAINO/kcode-server#index">index</a></li>
<li><a href="https://gitlab.com/LAINO/kcode-server#policy">policy</a></li>
<li><a href="https://gitlab.com/LAINO/kcode-server#policy-index">policy index</a></li>
</ul>
</li>
<li><a href="https://gitlab.com/LAINO/kcode-server#device">device</a>
<ul>
<li><a href="https://gitlab.com/LAINO/kcode-server#devices">devices</a></li>
<li><a href="https://gitlab.com/LAINO/kcode-server#device-policy">device policy</a></li>
<li><a href="https://gitlab.com/LAINO/kcode-server#saleprice">salePrice</a></li>
</ul>
</li>
</ul>
<h2 id="common">common</h2>
<h3 id="index">index</h3>
<ol>
<li>Request (READ)</li>
</ol>
<p>요청 URL : common/index/request<br>
요청 타입 : GET<br>
파라메터 : None</p>
<p>예시 응답</p>
<pre><code>{
    "date": "September 8, 2018 at 12:00:00 AM UTC+9",
    "applyCode": "K170614-6차",
    "contactFax": "031-405-9994",
    "contactEmail": "ha20123@hanmail.net",
    "endDate": "October 26, 2018 at 12:00:00 AM UTC+9",
    "contactNum": "070-7768-9997"
}
</code></pre>
<ul>
<li>applyCode : 적용코드</li>
<li>contactEmail : 담당자  이메일</li>
<li>contactFax 팩스</li>
<li>contactNum 유선전화</li>
<li>date : 유닉스  타임스탬프로  시작날짜</li>
<li>endDate : 유닉스  타임스탬프로  종료날짜</li>
</ul>
<ol start="2">
<li>Update</li>
</ol>
<p>요청 URL : common/index/update<br>
요청 타입 : POST<br>
파라메터 :</p>
<ul>
<li>applyCode : 적용코드</li>
<li>contactEmail : 담당자  이메일</li>
<li>contactFax</li>
<li>contactNum</li>
<li>date : 유닉스  타임스탬프로  시작날짜</li>
<li>endDate : 유닉스  타임스탬프로  종료날짜</li>
</ul>
<p>예시 응답</p>
<pre><code>{
    “status” : “success”
}
</code></pre>
<hr>
<h3 id="policy">policy</h3>
<ol>
<li>Request (READ)</li>
</ol>
<p>요청 URL : common/policy/request<br>
요청 타입 : GET<br>
파라메터 : None</p>
<p>예시 응답</p>
<pre><code>{
    "deductPrice": "0",
    "isAdditionalApply": "",
    "type": "",
    "payMethod": "현금",
    "typeDetail": "",
    "maintainTerm": "1",
    "isMustRegister": true,
    "model": "All",
    "detail": "부가서비스 미유치로 인한 차감 없음."
}
</code></pre>
<ul>
<li>deductPrice : 차감금액</li>
<li>detail : 세부안내</li>
<li>isAdditionalApply : 유치추가</li>
<li>isMustRegister : 가입필수</li>
<li>maintainTerm : 유지기간</li>
<li>model : 대상모델 All - 전기기  공통</li>
<li>payMethod : 지급방식</li>
<li>type : 구분</li>
<li>typeDetail : 세부구분</li>
</ul>
<blockquote>
<p><strong>모델별로  구분되며  모델  타입이 All 일경우  전모델  공통  적용</strong></p>
</blockquote>
<ol start="2">
<li>Update</li>
</ol>
<p>요청 URL : common/policy/update<br>
요청 타입 : POST<br>
파라메터 :</p>
<ul>
<li>deductPrice : 차감금액</li>
<li>detail : 세부안내</li>
<li>isAdditionalApply : 유치추가</li>
<li>isMustRegister : 가입필수</li>
<li>maintainTerm : 유지기간</li>
<li>model : 대상모델 All - 전기기  공통</li>
<li>payMethod : 지급방식</li>
<li>type : 구분</li>
<li>typeDetail : 세부구분</li>
</ul>
<p>예시 응답</p>
<pre><code>{
    “status” : “success”
}
</code></pre>
<hr>

