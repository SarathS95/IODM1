import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
export function ActivityFinder() {
    const [participants, setParticipants] = useState(1);
    const [activity, setActivity] = useState('Loading...');
    // Call the custom hook at the top level
    const fetchData = (url) => useData(url);
    useEffect(() => {
        const fetchActivity = async () => {
            console.log(fetchData('https://bored.api.lewagon.com/api/activity?' +
                'participants=' + participants))
            try {
                const data = await fetchData('https://bored.api.lewagon.com/api/activity?' +
                    'participants=' + participants);
                setActivity(data ? data.activity : 'not found');
            } catch (error) {
                setActivity('Error fetching activity');
            }
        };
        fetchActivity();
    }, [participants]);
    return (
        <div className="ActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>
                Choose number of participants:
                <select value={participants} onChange={e => setParticipants(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </label>
            <div><strong>Suggested Activity: </strong>{activity}</div>
        </div>
    );
}
 // ++ Add a second use of useData to fetch activities based on type