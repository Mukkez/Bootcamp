import Task from './Task';

const list = [
	{ name: 'Hit the gym', iconLeft: '/img/check.png', iconRight: '/img/gym.png' },
	{ name: 'Pay bills', iconLeft: '/img/check.png', iconRight: '/img/bill.png' },
	{ name: 'Meet George', iconLeft: '/img/doing.png', iconRight: '/img/dance.png' },
	{ name: 'Buy eggs', iconLeft: '/img/doing.png', iconRight: '/img/eat.png' },
	{ name: 'Read a book', iconLeft: '/img/no.png', iconRight: '/img/book.png' },
	{ name: 'Organize office', iconLeft: '/img/no.png', iconRight: '/img/organize.png' },
];

const taskList = () => {
	return (
		<ul>
			<Task task={list[0]} />
			<Task task={list[1]} />
			<Task task={list[2]} />
			<Task task={list[3]} />
			<Task task={list[4]} />
			<Task task={list[5]} />
		</ul>
	);
};

export default taskList;
