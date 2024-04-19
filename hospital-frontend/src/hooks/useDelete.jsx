import { useState } from "react";
import axios from "axios";

function useDelete(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const send_request = async () => {
    try {
      let auth = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const data = await axios.delete(url, {
        headers: auth,
      });
      setData(data.data);
    } catch (error) {
      setError(error);
    }
  };

  return [data, error, send_request];
}

export default useDelete;
