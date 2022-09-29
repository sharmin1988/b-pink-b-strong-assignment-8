import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
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
            <div className="blog">
                <h2>Except data load how we can use useEffect?</h2>
                <p>The useEffect Hook eliminates the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
                    <br /> useEffect is a function that gets executed for 3 different React component lifecycles.
                    Those lifecycles are componentDidMount, componentDidUpdate, and componentWillUnmount lifecycles.
                </p>
            </div>
        </div>
    );
};

export default Blog;