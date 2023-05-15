import { useCallback, useState } from 'react';
import TaskCard, { TaskProps } from '@/components/common/TaskCard';
import axios from 'axios';

interface States extends TaskProps {
	// (!) not catch type error from APIs fetched data. We might need unit test/assertion
	key: string;
}

function App() {
	// (?) should we need another Type declare for API here
	const [activities, setActivities] = useState<States[]>([]);

	const fetchBoredAPI = useCallback(async () => {
		try {
			const url = 'https://www.boredapi.com/api/activity';
			const response = await axios(url, {
				params: { type: 'social' },
			});
			const act: States = response.data;

			setActivities((prev) => {
				if (prev.length > 0 && prev.some((el) => el?.key === act.key)) {
					return prev;
				}
				return [...prev, act];
			});
		} catch (e) {
			// (TODO) write a wrapper to resolve error
			console.error(e);
		}
	}, []);

	return (
		<>
			<div className="text-center w-screen">
				<button onClick={fetchBoredAPI}>click me to fetch</button>
				<div>
					{activities
						.slice(0)
						.reverse()
						.map((act) => (
							// (?) what's this warning?
							// (FIXME) occur weird order when fetch the similar item
							<TaskCard {...act} key={act.key} />
						))}
				</div>
			</div>
		</>
	);
}

export default App;
