import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
	const [input, setInput] = useState('');

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	})

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
			{props.edit ? (
				<>
					<input className='todo-input edit'
						type='text'
						placeholder='update your item'
						value={input}
						name='text'
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className='todo-btn edit'>Update</button>
				</>
			) :	(
				<>
					<input  className='todo-input'
					type='text'
					placeholder='add a todo'
					value={input}
					name='text'
					onChange={handleChange}
					ref={inputRef}
					/>
					<button className='todo-btn'>Add todo</button>
				</>	
			)}
		</form>
	);
}

export default TodoForm
