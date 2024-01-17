/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteSecret = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteSecret = () => {
    setLoading(true);
    axios
      .delete(`https://secure-secrets-app.onrender.com/secrets/${id}`)
      .then((response) => {
        setLoading(false);
        enqueueSnackbar('Secret Deleted Successfully', { variant: 'success' })
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' })
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl">Delete Secret</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure to delete this Secret?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteSecret}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteSecret;
