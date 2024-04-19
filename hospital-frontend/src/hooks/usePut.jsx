import axios from "axios";
import { useState } from "react";


function usePut(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = async (body) => {
    setError(null);

    try {
      let auth = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.put(url, body, {
        headers: auth,
      });
      setData(response.data);
      setError(null);
      console.log("data posted");
    } catch (error) {
      setError(error.response);
      setData(null);
      console.log("no data posted");
    }
  };

  return [data, error, sendRequest];
}

export default usePut;
