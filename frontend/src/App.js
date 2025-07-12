import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/")
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Página de Presencia</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
