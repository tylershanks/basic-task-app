//WILL RENDER OUR TASKS

//onclick, add input.value to a list element and append to parent i think?

//will export this function component to App.js

import React from 'react';

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.text}</li>;
            })}
        </ul>
    );
};
export default Overview;