import React, { Fragment, useState } from 'react';
import Message from '../Components/Message';
import Progress from '../Components/Progress';
import axios from 'axios';

const FileUpload = (props) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
let id = props.id

  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
 
      const res = axios.put('http://localhost:5000/api/users/photo/' +id  , formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      //  Clear percentage
      setTimeout(() => setUploadPercentage(0), 4000);

console.log(res);
      setMessage('File Uploaded');
    } catch (err) {
  
    throw err;
      // setUploadPercentage(0)
    }
   
    setTimeout(() =>  window.location.reload(false), 4000);
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          {/* <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          /> */}
          <input class="form-control" type="file" id='customFile'
            onChange={onChange} ></input>
          {/* <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label> */}
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
          id={props.id}
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;
