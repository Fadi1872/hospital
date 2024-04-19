import { useEffect, useState } from "react";
import axios from "axios";

function useGet(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const send_request = async () => {
    try {
      let auth = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const data = await axios.get(url, {
        headers: auth,
      });
      setData(data.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    send_request();
  }, [url]);

  return [data, error, send_request];
}

export default useGet;
