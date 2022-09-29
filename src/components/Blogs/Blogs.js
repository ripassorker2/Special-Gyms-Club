import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1>All Blogs</h1>
            <div className="all-blogs">
                <div className="blog">
                    <h2>How dose react work ?</h2>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
                <div className="blog">
                    <h2>What are the different of props and state ?</h2>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
                <div className="blog">
                    <h2>What can do useEffect without data load ?</h2>
                    <p> The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM,  setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;