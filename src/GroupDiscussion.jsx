import React from 'react';

const GroupDiscussionButton = () => {
    return (
        <div className="position-fixed" style={{ bottom: '20px', right: '20px' }}>
            <a href="https://discord.gg/JanKxhma3q" style={{ backgroundColor: 'rgb(201, 42, 70)', color: 'rgb(30, 31, 33)', fontWeight: 'bold', fontSize: '20px', padding: '14px 20px' }} className="btn">Group Discussion</a>
        </div>
    );
};

export default GroupDiscussionButton;
