import { useEffect, useState } from 'react';
import Activity from './components/Activity/Activity';
import './App.css';
import OtherInfo from './components/OtherInfo/OtherInfo';

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
        <div className="blog">
          <h2>How does React work?</h2>
          <p>React uses a declarative paradigm that makes it easier to reason about the application and aims to be both efficient and flexible. It designs simple views for each state in the application, and React will efficiently update and render just the right component when your data changes. The declarative view makes the code more predictable and easier to debug.</p>
        </div>
        <div className="blog">
          <h2>Differences between props and State?</h2>
          <p>1. Props are used to pass data from one component to another.
            In  state The Data is passed within the component only.
            <br /> <br />
            2 .The props are Immutable (cannot be modified)
            The state is Mutable ( can be modified), this.setState property is used to update/modified the state values in the component.</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
