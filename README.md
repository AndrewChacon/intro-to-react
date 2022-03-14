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

```js
const element = <h1>Hello, world</h1>;
```

<!-- #### Rendering an Element into the DOM -->
