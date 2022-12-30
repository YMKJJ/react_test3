import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from "./App2";
import NotificationList from "./mounts/NotificationList";

const root = ReactDOM.createRoot(document.getElementById('potato'));
root.render( // 랜더링 되는 부분은 반드시 부모태그가 하나여야함.
    <React.StrictMode>
        {/* jsx 문법에서 화면을 랜더링하기 위한 태그의 이름은 반드시 첫글자가 대문자이어야 함. */}
        {/* 대문자를 사용하는 이유는 일반적을 html 태그를 모두 소문자로 사용하기 때문에 일반 html 태그인지
            jsx*/}
        <App2 />
        <NotificationList />
        <br />< hr /><br />
        <App />
  </React.StrictMode>
);
