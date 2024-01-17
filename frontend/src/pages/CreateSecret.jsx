// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";

const CreateSecret = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSaveSecret = () => {
    const data = {
      content,
    };
    setLoading(true);
    axios
      .post('https://secure-secrets-app.onrender.com/secrets/', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Secret Created Successfully', { variant: 'success' })
        navigate('/dashboard');
      }).catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' })
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      < BackButton />
      <h1 className='text-3xl my-4'>Create Secret</h1>
      {loading ? < Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-600 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Secret</label>
          <input 
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveSecret}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateSecret;