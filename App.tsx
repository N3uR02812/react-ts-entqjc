import * as React from 'react';
import Button from './Button/button';
import Todo from './todo/todo';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button value="2"></Button>
      <Todo value="2"></Todo>
    </div>
  );
}
