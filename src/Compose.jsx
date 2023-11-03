import {React, useState} from "react";

const Compose = () =>{
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // }; 
  return (
        <>
        <form action="/compose" method="POST"
        className="max-w-wd mx-auto p-6 bg-white rounded shadow-lg">

          <div className="mb-4">
            <label 
            className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input 
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="text" 
            name="postTitle"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
             />

          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" > Post</label>
            <textarea 
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              name="postBody"
              rows="5"
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            ></button>
          </div>

        </form>


        </>
    )
}

export default Compose;