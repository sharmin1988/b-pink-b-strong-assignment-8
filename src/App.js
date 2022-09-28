import { useEffect, useState } from 'react';
import Activity from './Activity/Activity';
import './App.css';

function App() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])


  return (
    <div className='homepage'>
      <div className="activities-container">
        <h1>Be-<span className='pink'>piNk</span>  b-STRONG</h1>
        <h3>Select today’s exercise</h3>
        <div className="activity-container">
        {
          activities.map(activity => <Activity
             key = {activity.id} 
             activities = {activity}
             ></Activity>)
        }
        </div>

      </div>
      <div className="person-info-and-calculation-container">
        <h3>personal</h3>
      </div>
    </div>
  );
}

export default App;
