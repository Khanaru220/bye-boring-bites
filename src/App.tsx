import { useCallback, useState } from 'react';
import TaskCard from '@/components/common/TaskCard';
import axios from 'axios';

function App() {
	const [activities, setActivities] = useState<object[]>([]);

	const fetchBoredAPI = useCallback(async () => {
		try {
			const response = await axios('https://www.boredapi.com/api/activity', {
				params: { type: 'social' },
			});
			setActivities((prev) => [...prev, response.data]);
		} catch (e) {
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
