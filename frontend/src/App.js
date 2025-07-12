import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => console.error("Error al conectar con el backend:", error));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Página de Presenciaaaa</h1>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
