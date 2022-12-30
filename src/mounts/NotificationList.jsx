import React from "react";
import Notification from "./Notification";

// 댓글 데이터 생성
const reservedNotifications=[
    {id:1,message: '안녕하세요, 오늘 일정 알려드립니다.'},
    {id:2,message: '오후 수업 시간입니다.'},
    {id:3,message: '이제 곧 쉬는 시간입니다.'}
];
// let var 상관없음 자바 스크립트 타이머 객체 정보를 저장하는 변수
// setTimeout : 1회용 타이머, 지정된 시간 이후에 1번 동작, 실행 시 타이머 정보를 반환, 타이머 삭제 시,
// clearTimeOut()을 사용
// setInterval : 지정한 시간마다 동작하는 타이머, 실행 시 타이머 정보를 반환, 타이머 삭제 시, clearInterval()을 사용

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        // 현재 컴포넌트의 상태인 notifications 선언
        this.state = {
            // 빈 배열 타입인 state가 생성.
            notifications: [],
            // notifications:reservedNotifications
        };
    }

    // 화면에 처음 그려질 내용
    render() {
        return (
            <div>
                {/* state 의 notification 배열을 가지고 화면을 그려줌 */}
                {/* notification 배열의 기본 값이 비었기 때문에 화면에 아무것도 그리지 않음 */}
                {this.state.notifications.map((item)=> {
                    return <Notification key={item.id} message={item.message} />;
                })}
            </div>
        );
    }

    // render() 함수 실행 후 동작
    componentDidMount() {
        // object 타입의 확장 표현식을 통해서 변수 notifications에 state가 가지고 있는 notifications의 데이터를 대입함.
        const {notifications} = this.state; // state의 notifications의 데이터가 비어있음
        // 타이머를 사용하여 지정된 시간마다 동작하도록 설정함.
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                // 배열 notifications에 데이터 추가.
                notifications.push(reservedNotifications[index]);
                // state의 상태 수정
                this.setState({
                    // this.state에 있는 notifications에 현재 componentDidMount안에 있는 지역변수 notifications의 데이터를 저장
                    notifications: notifications
                });
            }

    else {
    clearInterval(timer);
    }
},2000);
        console.log('데이터 추가 완료')
}
componentDidUpdate() {
        console.log('상태 업데이트');
}

}

export default NotificationList