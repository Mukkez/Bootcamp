import Task from './Task';

const taskList = [
	{ name: 'Hit the gym', iconLeft: '/img/check.png', iconRight: '/img/gym.png' },
	{ name: 'Pay bills', iconLeft: '/img/check.png', iconRight: '/img/bill.png' },
	{ name: 'Meet George', iconLeft: '/img/doing.png', iconRight: '/img/dance.png' },
	{ name: 'Buy eggs', iconLeft: '/img/doing.png', iconRight: '/img/eat.png' },
	{ name: 'Read a book', iconLeft: '/img/no.png', iconRight: '/img/book.png' },
	{ name: 'Organize office', iconLeft: '/img/no.png', iconRight: '/img/organize.png' },
];

const TaskList = () => {
	return (
		<ul>
			<Task task={taskList[0]} />
			<Task task={taskList[1]} />
			<Task task={taskList[2]} />
			<Task task={taskList[3]} />
			<Task task={taskList[4]} />
			<Task task={taskList[5]} />
		</ul>
	);
};

export default TaskList;
