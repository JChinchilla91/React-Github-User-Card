import React from 'react';

function UserCard (props) {
    console.log('Look here', props.name)
    return (
        <div>  
            <div className='imgContainer'>
                <img src={props.avatar} />
            </div>  
            <h1>{props.login}</h1>
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            

        </div>
    )
}

export default UserCard;