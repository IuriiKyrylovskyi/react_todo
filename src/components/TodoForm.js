import React, { useState } from 'react';

function TodoForm(props) {
	const [input, setInput] = useState('');

	const handleChange = e => {
		setInput(e.target.value);
	}
	
	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input
		});

		setInput('');
	};

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input className='todo-input'
				type='text'
				placeholder='add a todo'
				value={input}
				name='text'
				onChange={handleChange}
			/>
			<button className='todo-btn'>Add todo</button>
		</form>
	);
}

export default TodoForm
