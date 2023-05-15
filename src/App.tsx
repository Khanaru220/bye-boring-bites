import { useCallback, useState } from 'react';
import TaskCard from '@/components/common/TaskCard';
import axios from 'axios';

function App() {
	// (?) should we need another Type declare for API here
	const [activities, setActivities] = useState<object[]>([]);

	const fetchBoredAPI = useCallback(async () => {
		try {
			const url = 'https://www.boredapi.com/api/activity';
			const response = await axios(url, {
				params: { type: 'social' },
			});
			const act = response.data;
			setActivities((prev) => {
				if (prev.length > 0 && prev.some((el) => el?.key === act.key)) {
					return prev;
				}
				return [...prev, act];
			});
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
