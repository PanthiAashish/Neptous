import React from 'react';

const ContributeForm = () => {
    return (
        <div style={{ backgroundColor: 'rgb(30, 31, 33)', color: '#fff', padding: '7% 17%' }}>
            <h1 style={{ color: 'rgb(201, 42, 70)' }} className="mb-4">Contribute</h1>
            <p>I created this forum because I got help from a lot of seniors, so if you think you can help others in their application process, I'd like you to contribute to the content on the platform. Credit for your work will be given at the top of the article. Below is the form to submit your contribution.</p>
            <p>But it is not only for content contribution; if you have any queries you'd like to be answered on this platform, you can submit them below, and we will try to answer them.</p>
            
            <form action="/articles/:articleTitle" method="POST">
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic:</label>
                    <input type="text" className="form-control" id="topic" name="topic" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">Detailed Section:</label>
                    <textarea className="form-control" id="details" name="details" rows="4" required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="socialMedia" className="form-label">Social Media Handles:</label>
                    <input type="text" className="form-control" id="identity" name="socialMedia" placeholder="instagram.com/yourhandle" />
                </div>
                <div className="mb-3">
                    <button type="submit" style={{ backgroundColor: 'rgb(201, 42, 70)', color: 'rgb(30, 31, 33)', fontWeight: 'bold', fontSize: '20px' }} className="btn">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContributeForm;
