import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import { hewan, sifat } from "./dataset";

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const idx = Math.floor(Math.random() * hewan.length);
    Swal.fire(`${hewan[idx]} ${sifat[idx]}`).then(() => {
      setName("");
    });
  };

  return (
    <div className="bg">
      <div className="login-box">
        <h2>Cek Khodam</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name=""
              placeholder="Tulis nama kamu"
              required
            />
          </div>
          <button className="button">Cek</button>
        </form>
      </div>
    </div>
  );
}

export default App;
