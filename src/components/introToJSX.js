import React from 'react';

export const IntroToJSX = () => {
	// const element = <h1>Hello, world!</h1>;

	// const name = 'Andrew Chacon';
	// const element = <h1>Hello, {name}</h1>;

	// const element = <a href='http://www.reactjs.org'>Link</a>;
	// const element = <img src={user.avatarUrl}></img>

	// const element = <img src={user.avatarUrl} />

	function formatName(user) {
		return user.firstName + ' ' + user.lastName;
	}

	const user = {
		firstName: 'Andrew',
		lastName: 'Chacon',
	};
	return (
		<div>
			<h1>introToJSX</h1>
			<p>Hello, {formatName(user)}</p>
		</div>
	);
};
