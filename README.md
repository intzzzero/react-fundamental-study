## React Fundamental Study
- 리액트를 공부하며 주요 개념들을 정리함.
- 교재: 리액트를 다루는 기술 | 개정판(김민준 지음)
- 참고: [리액트 공식문서](https://ko.reactjs.org/)

![react logo](https://jeonghwan-kim.github.io/assets/imgs/2018/07/16/react-logo.png)

## 리액트(React)의 탄생 배경
### 웹 생태계의 성장
자바스크립트(JavaScript)는 웹 브라우저에서 간단한 연산을 하거나 웹 페이지에서 간단한 동적 효과를 주기 위한 목적으로 만들어졌었다. 그러나 나날이 발전을 지속한 웹 생태계는 규모와 더불어 정교함이 과거와는 비교도 되지 않을 정도로 발전했다. 결국 단순한 바닐라 자바스크립트로 현재와 같은 웹앱을 만들기에는 효율적이지 못 했고, 그에 따라 각종 라이브러리와 프레임워크가 등장하기에 이르렀다.

### UI(User Interface)에 집중한 리액트
현재의 자바스크립트 라이브러리, 프레임워크로는 React, Vue, Angular가 대표적인 3대장으로 자리잡고 있다. 대다수의 라이브러리, 프레임워크들은 MVC(Model-View-Controller), MVVM(Model-View-View Model) 등의 아키텍처를 사용하며 이를 권장한다. 그런 가운데 리액트가 강조하는 지점은 상당히 단순하고 명쾌하다. **오직 뷰(View)!** , 리액트를 개발한 페이스북에서는 복잡하게 생각하지 않고 데이터가 바뀌면 기존의 뷰를 날려버리고 새로운 뷰를 렌더링 하기로 한 것이다.

## Virtual DOM
리액트가 지금과 같은 특징(상태변화가 생길 경우 리렌더링을 하는 방식)을 갖게 된 배경에는 Vitrual DOM이 있다. DOM(Document Object Model)은 이미 알고 있듯 자바스크립트로 HTML과 CSS를 조작할 수 있도록 하는 일종의 매개체이며 최상위에 Document 객체가 유일하게 존재하며 그 아래로 각종 요소(Element)들이 객체화 되어 나무가 가지를 치듯 이어져 있다 하여 DOM Tree라고도 부른다.

## 조건부 렌더링

```js
function App() {
  const name = 'codeAmeba';
  return <div className="App">{name === 'codeAmeba' && <h1>hello {name}</h1>}</div>;
}
```

위와 같이 `&&` 연산자를 이용하면 굳이 삼항 연산자를 쓸 필요 없이 특정 조건일 때에만 렌더링이 가능하다.

```js
function App() {
  const name = undefined;
  return <div className="App">{name || '이름이 없습니다.'}</div>;
}
```

위와 같이 만약 렌더링 해야 하는 값이 없을 경우에 오류나 `undefined`가 그대로 출력되는 것을 방지하기 위해 `||` 연산자를 이용할 수 있다. 이를 조금 응용한다면 연산자 위에 기본값을 넣는 등으로 활용할 수 있겠다.