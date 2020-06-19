import React from 'react';
import './App.css';

function App() {
	const name = undefined;
	return <div className="App">{name || '이름이 없습니다.'}</div>;
}

export default App;
