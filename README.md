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

## 클래스형 컴포넌트와 함수형 컴포넌트의 차이
가장 직관적으로 느낄 수 있는 차이점은 이름 그대로 클래스형 컴포넌트의 ES6에서 도입된 class 문법을 따르는 컴포넌트를 말하고, 함수형 컴포넌트는 함수 선언식이나 화살표 함수 등으로 작성된 컴포넌트를 말한다.

함수형 컴포넌트에서 사용 가능한 Hooks와 같은 상태관리 라이브러리가 나오기 전에는 `state`를 사용하기 위해 클래스형 컴포넌트를 써야 했지만, 현재는 함수형 컴포넌트에서도 클래스형 컴포넌트와 마찬가지로 `useState`를 통한 상태관리가 가능해졌으므로 불편함 없이 사용 가능하다.

또한, 미세하게나마 함수형 컴포넌트가 클래스형 컴포넌트에 비해 메모리 리소스를 덜 소모하며, 리액트 공식문서에서도 함수형 컴포넌트의 사용을 적극 권하고 있다.

## props
`props`는 properties의 줄임말로써 리액트 내에서 속성을 설정할 때 사용한다. `props`의 설정은 부모 컴포넌트에서 할 수 있으며, `props`를 전달받은 자식 컴포넌트에서는 읽기만 가능(read only)하다.

부모 컴포넌트로부터 `props`를 받지 못 할 경우를 감안하여 `defaultProps`라는 것을 설정할 수 있으며, 자식 컴포넌트에서 아래와 같이 작성한다.

```js
import React from 'react';

const MyComponent = props => {
  return <div className="MyComponent">hello {props.name}</div>;
};

MyComponent.defaultProps = {
  name: 'sooyoung'
};

export default MyComponent;
```

## children
자바스크립트에서 `innerText`나 `innerHtml`과 같은 역할을 하는 것이 리액트의 `children`이다.
`props`의 일종으로 부모 컴포넌트의 태그와 태그 사이에 있는 내용을 가져올 수 있다.

**부모 컴포넌트**

```js
function App() {
  return (
    <div className="App">
      <MyComponent>this is children</MyComponent>
    </div>
  );
}
```

**자식 컴포넌트**

```js
const MyComponent = props => {
  return <div className="MyComponent">{props.children}</div>;
};
```

