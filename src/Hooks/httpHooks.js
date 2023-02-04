import { useState } from "react";

const useHttp = (param) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://react-tutorials-be6d1-default-rtdb.asia-southeast1.firebasedatabase.app/${param.endPoint}${param.query?`?${param.query}`:''}`,
        {
      
          method: param.method?param.method:'get',
          headers: param.header?param.header:{},
          body: param.body?param.body:null,
        }
      );
      if (!res.ok) {
        throw new Error("Request Faield");
      }
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      setError(error.message || "Something want wrong");
    }
    setLoading(false);
  };
  return {data, error, loading, sendRequest};
};

export default useHttp;
