import "./Home.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../../redux/todoSlice';

const Home = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo({ id: Date.now(), text }));
            setText('');
        }
    };

    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Todo App</h1>
                <div className="form">
                    <input
                        placeholder="Enter Todo"
                        className="input"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="button" onClick={handleAddTodo}>Add_Todo</button>
                </div>
                <div className="todos">
                    {
                        todos.map((todo) => (
                            <div className="todo" key={todo.id}>
                                <h2 className="todo-text">{todo.text}</h2>
                                <button className="button" onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
