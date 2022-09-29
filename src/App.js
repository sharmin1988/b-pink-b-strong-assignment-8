import { useEffect, useState } from 'react';
import Activity from './components/Activity/Activity';
import './App.css';
import OtherInfo from './components/OtherInfo/OtherInfo';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog/Blog';

function App() {

  const [activities, setActivities] = useState([])
  const [exerciseDetails, setExerciseDetails] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setActivities(data))
  }, [])

  const handelAddToList = (selectedActivity) => {
    const newExerciseDetails = [...exerciseDetails, selectedActivity]
    setExerciseDetails(newExerciseDetails)
  }

  return (
    <div >
      <div className='homepage'>
        <div className="activities-container">
          <h1>Be-<span className='pink'>piNk</span>  b-STRONG</h1>
          <h3>Select today’s exercise</h3>
          <div className="activity-container">
            {
              activities.map(activity => <Activity
                key={activity.id}
                activity={activity}
                handelAddToList={handelAddToList}
              ></Activity>)
            }
          </div>
        </div>
        <div className="other-info-container">
          <OtherInfo exerciseDetails={exerciseDetails}></OtherInfo>
        </div>
      </div>
      
      <div className="blog-container">
        <Blog></Blog>
      </div>
    </div>
  );
}

export default App;
