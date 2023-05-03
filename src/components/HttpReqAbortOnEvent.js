import { useRef } from 'react';
import axios from 'axios';

export const HttpReqAbortOnEvent = () => {
  const controllerRef = useRef();

  const fetchData = async () => {
    // Если контроллер ЕСТЬ, отменить запрос
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // Если контроллера НЕТ, создать его
    controllerRef.current = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, { signal: controllerRef.current.signal });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Make request</button>
      {/* <button onClick={() => controllerRef.current.abort()}>Cancel req</button> */}
    </div>
  );
};
