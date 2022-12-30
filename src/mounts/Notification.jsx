// Notification.jsx

import React from "react";

const style = {
    wrapper:{
        margin:8,
        padding:8,
        display:'flex',
        flexDirection: 'row',
        border:'1px solid gray',
        borderRadius:16,
    },

    messageText: {
        color : 'black',
        fontSize:16
    }
};

// 리액트의 Component 클래스를 상속받아서 클래스 컴포넌트로 사용
class Notification extends React.Component{
    constructor(props) {
        super(props);
        // 현재 컴포넌트에는 사용하는 상태값이 없음
        this.state = {};
    }

    render(){
        return(
            <div style={style.wrapper}>
                <span style={style.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;