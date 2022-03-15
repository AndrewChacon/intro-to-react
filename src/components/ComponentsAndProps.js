import React, { Component } from 'react';

// functional commponent
// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }

// class component
// class Welcome extends React.Component {
// 	render() {
// 		return <h1>Hello, {this.props.name}</h1>;
// 	}
// }

// const element = <div />;
// const element = <Welcome name="Andrew" />;

// Split component into smaller components
// function Avatar(props) {
// 	return (
// 		<img className='Avatar' src={props.user.avatarUrl} alt={props.user.name} />
// 	);
// }

// function UserInfo(props) {
// 	return (
// 		<div className='UserInfo'>
// 			<Avatar user={props.user} />
// 			<div className='UserInfo-name'>{props.user.name}</div>
// 		</div>
// 	);
// }

// function Comment(props) {
// 	return (
// 		<div className="Comment">
// 			<UserInfo user={props.author} />
// 			<div className="Comment-text">
// 				{props.text}
// 			</div>
// 			<div className="Comment-date">
// 				{formatDate(props.date)}
// 			</div>
// 		</div>
// 	)
// }

// pure, does not attempt to change inputs
// function sum(a, b) {
// 	return a + b;
// }

// impure, attempts to change its inputs
// function withdraw(account, amount) {
// 	account.total -= amount;
// }

class ComponentsAndProps extends Component {
	render() {
		return <div></div>;
	}
}

export default ComponentsAndProps;
