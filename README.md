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
리액트가 지금과 같은 특징(상태변화가 생길 경우 리렌더링을 하는 방식)을 갖게 된 배경에는 Vitrual DOM이 있다. DOM(Document Object Model)은 이미 알고 있듯 자바스크립트로 HTML과 CSS를 조작할 수 있도록 하는 일종의 매개체이며 최상위에 Document 객체가 유일하게 존재하며 그 아래로 각종 요소(Element)들이 객체화 되어 나무가 가지를 치듯 이어져 있다 하여 [DOM Tree](https://ko.javascript.info/dom-nodes)라고도 부른다.

리액트의 Virtual DOM은 위와 같은 DOM의 사본이자, DOM을 조작하는 매개체의 역할을 한다. 구조 또한 DOM과 마찬가지로 하나의 root를 기준으로 요소들이 가지처럼 이어져 있다. 무엇보다도 Virtual DOM을 리액트의 철학을 담은 핵심 기능이라고 할 수 있는 이유는 Virtual DOM을 다음과 같이 이용하기 때문이다.

1. 데이터를 업데이트 하면 전체 UI를 Virtual DOM에 리렌더링 한다.
2. 이전 Virtual DOM과 새로운 Virtual DOM을 비교한다.
3. 달라진 부분에 대하여 새로운 Virtual DOM을 적용한다.

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

부모 컴포넌트로부터 `props`를 받지 못 할 경우를 감안하여 `defaultProps`라는 것을 설정할 수 있으며, 자식 컴포넌트에서 아래와 같이 작성한다. 그리고, `propTypes`라는 것도 있으며 이를 통해 자식 컴포넌트에서 `props`의 데이터 타입을 지정할 수도 있다.

```js
import React from 'react';

const MyComponent = props => {
  return <div className="MyComponent">hello {props.name}</div>;
};

MyComponent.defaultProps = {
  name: 'sooyoung'
};

MyComponent.propTypes = {
  name: PropTypes.string
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

## state
리액트에서 `state`는 내부에서 바뀔 수 있는 값을 의미한다. 부모 컴포넌트가 자식 컴포넌트에게 `props`로 전달할 수 있는 값이며, 반드시 `setState`를 통해 해당 `state`가 자리하고 있는 컴포넌트에서만 변경할 수 있다.

## 하나의 이벤트 두 개의 함수

```js
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          BUTTON 1
        </button>
        <button
          onClick={() => {
            this.setState({ fixedNumber: fixedNumber + 1 }, () => {
              console.log(this.state);
            });
          }}
        >
          BUTTON 2
        </button>
      </div>
    );
  }
```

위의 예시 코드와 같이 하나의 이벤트핸들러에 두 개의 함수를 넣을 수도 있다. 첫 번째 버튼의 두 `setState`를 동일하게 줄 경우 두 번째 함수는 블락되어 실행되지 않는다. 따라서 `prevState`라는 인자를 사용하여 2씩 증가하게 하는 방법이다.
두 번째 버튼의 경우, `setState`의 두 번쨰 인자로 **콜백** 함수를 등록하여 처리한 예시이다.

## 배열 비구조화 할당

```js
const { number, fixedNumber } = this.state;
```

위와 같이 클래스형 컴포넌트에서 `state`와 `props`를 렌더 함수 아래에 객체 비구조화 할당을 했던 것과 마찬가지로 함수형 컴포넌트에서는 **배열 비구조화 할당** 을 주로 사용한다. 기본적인 사용법은 객체 비구조화 할당과 다르지 않다.

```js
const arr = [1, 2, 3];
const [ one, two, three ] = arr;
```

## useState
함수형 컴포넌트에서 상태를 관리하는 도구로 사용하는 것이 `useState`이며, 아래와 같이 사용한다.

```js
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
```

클래스형 컴포넌트에서 `state`의 초깃값은 객체 형태를 하고 있지만, `useState`에서는 형태가 정해져 있지 않다. 숫자, 문자열, 객체, 배열 등 선택할 수 있는 값의 폭이 넓다는 게 특징이다.
초깃값은 `useState`의 인자로 들어가는 값이며, 값을 변경할 때에는 클래스형 컴포넌트에서 `setState`를 사용하듯 반드시 최초에 값과 함께 선언했던 `setter` 함수를 사용해야 한다.
