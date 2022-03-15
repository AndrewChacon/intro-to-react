# Getting Started with React

`npm run start`

runs the app in development mode.
Open [http://localhost:3000](http:localhost:3000)

# Introduction to JSX

JSX is a syntax extension to Javascript, it can appear similar to a templating engine but still contains the full functionality of JS.

```js
const element = <h1>Hello, world!</h1>;
```

#### Embedding Expressions in JSX

You can put any valid Javascript expression between curly brackets inside of JSX

```js
const name = 'Andrew Chacon';
const element = <h1>Hello, {name}</h1>;
```

#### JSX is an Expression Too

You can use JSX inside of If statements and for loops, assign it to variables, accept it as arguments, and return it from functions.

```js
function getGreeting(user) {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger.</h1>;
}
```

#### Specifying Attributes with JSX

You can use quotes to specify string literals as attributes or you can use curly braces to embed a Javascript expression in an attribute.

```js
const element = <a href="https://www.reactjs.org"> link<a/>;
```

```js
const element = <img src={user.avatarUrl}></img>;
```

#### Specifying Children with JSX

if a tag is empty you can close it with a `/>` like XML

```js
const element = <img src={user.avatarUrl} />;
```

# Rendering Elements

elements are the smallest building blocks for React apps, an element describes what you see on the screen.
React elements are plain objects, ReactDOM takes care of updating the DOM to match the elements in React.

```js
const element = <h1>Hello, world</h1>;
```

#### Rendering an Element into the DOM

```html
<div id="root"></div>
```

This HTML element serves as our root, the root DOM node will be managed by ReactDOM
React applications will have a single root DOM node
To render a react element into a root DOM node pass both to `ReactDOM.render()`

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

#### Updating the Rendered Element

React elements are immutable, an immutable object is an object whose state cannot be modified after it is created, you cant change its children or attributes.
An element is like a single frame in a movie, it represents the UI at a certain point in time.
The only way to update the UI is to create a new element and pass it to ReactDOM.render()

```js
function tick() {
	const element = (
		<div>
			<h1>Hello, world</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementId('root'));
}

setInterval(tick, 1000);
```

# Components and Props

Components let you split the UI into independent and reusable pieces of code
Components are like functions in Javascript, they accept inputs called "props" and return React elements detailing what to display on the screen.

#### Function and Class Components

```js
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}
```

```js
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}
```

#### Rendering a Component

React elements represent DOM tags however we see that React elements can also represent user-defined components.

```js
const element = <div />;
```

```js
const element = <Welcome name='Sara' />;
```

```js
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name='Sara' />;
ReactDOM.render(element, document.getElementById('root'));
```

#### Composing Components

Components can refer to other components in their output
This lets us use the same component abstraction for any level of detail such as: button, form, text.
All of these are commonly expressed as components

Typically React applications have a single App component at the very top

```js
function App() {
	return (
		<div>
			<Welcome name='Sara' />
			<Welcome name='Cahal' />
			<Welcome name='Edite' />
		</div>
	);
}
```

#### Extracting Components

Split components into smaller components

Example component:

```js
function Comment(props) {
	return (
		<div className='Comment'>
			<div className='UserInfo'>
				<img
					className='Avatar'
					src={props.author.avatarUrl}
					alt={props.author.name}
				/>
				<div className='UserInfo-name'>{props.author.name}</div>
			</div>
			<div className='Comment-text'>{props.text}</div>
			<div className='Comment-date'>{formatDate(props.date)}</div>
		</div>
	);
}
```

UI split up into components:

```js
function Avatar(props) {
	return (
		<img className='Avatar' src={props.user.avatarUrl} alt={props.user.name} />
	);
}

function UserInfo(props) {
	return (
		<div className='UserInfo'>
			<Avatar user={props.user} />
			<div className='UserInfo-name'>{props.user.name}</div>
		</div>
	);
}

function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo user={props.author} />
			<div className='Comment-text'>{props.text}</div>
			<div className='Comment-date'>{formatDate(props.date)}</div>
		</div>
	);
}
```

#### Props are Read-Only

Regardless of if you delcare a function or class component in React it must never modify its own props

A pure function does not attempt to change its inputs and always returns the same results for its inputs

```js
function sum(a, b) {
	return a + b;
}
```

An impure function attempts to change its own inputs

```js
function withdraw(account, amount) {
	account.total -= amount;
}
```

All React components must act like pure functions with respect to their props
