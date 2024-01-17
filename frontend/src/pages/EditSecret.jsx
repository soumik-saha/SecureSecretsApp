/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditSecret = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://secure-secrets-app.onrender.com/secrets/${id}`)
      .then((response) => {
        setContent(response.data.content);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
    return () => {};
  }, []);

  const handleEditSecret = () => {
    const data = {
      content,
    };
    setLoading(true);
    axios
      .put(`https://secure-secrets-app.onrender.com/secrets/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Secret Edited Successfully', { variant: 'success' })
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
      <h1 className="text-3xl my-4">Edit Secret</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-600 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Secret</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditSecret}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditSecret;
