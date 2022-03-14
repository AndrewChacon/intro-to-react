# Getting Started with Create React App

### `npm run start`

runs the app in development mode.
Open [http://localhost:3000](http:localhost:3000)

#### Introduction to JSX

JSX is a syntax extension extension to Javascript, it can appear similar to a templating engine but still contains the full functionality of JS.

`const element = <h1>Hello, world!</h1>`

#### Embedding Expressions in JSX

You can put any valid Javascript expression between curly brackets inside of JSX

```
const name = 'Andrew Chacon';
const element = <h1>Hello, {name}</h1>
```

#### JSX is an Expression Too

You can use JSX inside of If statements and for loops, assign it to variables, accept it as arguments, and return it from functions.

```
function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

#### Specifying Attributes with JSX
