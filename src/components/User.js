import React, { useState } from 'react';

const User = ({name}) => {
    const[count]=useState(0);
    const[count2]=useState(2)
    return (
        <div className='user-cart'>
            <h1>Count:{count}</h1>
            <h2>Count2:{count2}</h2>
            <h2>Name:{name}</h2>
            <h3>Location:Lucknow</h3>
            <h4>Contact:@Vivek9648</h4>
            
        </div>
    );
}

export default User;
