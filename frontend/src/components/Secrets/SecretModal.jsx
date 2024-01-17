/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { FaBook, FaBarcode } from 'react-icons/fa';

const SecretModal = ({ secret, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        {/* <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {secret.publishYear}
        </h2> */}
        <h4 className='my-2 text-gray-500'>{secret._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{secret.content}</h2>
        </div>
        {/* <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{secret.author}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <FaBook className='text-red-300 text-2xl' />
          <p className='my-1'>{secret.genre}</p>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <FaBarcode className='text-red-300 text-2xl' />
          <p className='my-1'>{secret.isbn}</p>
        </div> */}
        {/* <p className='mt-4'><strong>Description:</strong></p>
        <p className='my-2'>
          {secret.content} */}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat! */}
        {/* </p> */}
      </div>
    </div>
  );
};

export default SecretModal;
