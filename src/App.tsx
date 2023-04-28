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
			<button onClick={fetchBoredAPI}>click me to fetch</button>
			{activities.map((act) => console.log(act))}
		</>
	);
}

export default App;
