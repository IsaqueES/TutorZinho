import { useState, useEffect } from "react";
import { fetchAPI } from "../../useful/FetchAPI";

export default function InUser() {
  const [user, setUser] = useState([]);
  const idu = localStorage.getItem("id");
  console.log("TSTE");
  useEffect(() => {
    fetchAPI(`http://localhost:3000/apiinuser/${idu}`, setUser);
  }, [idu]);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Lista de Classes do Usuário</h2>
      <ul className="space-y-2">
        {user.map((ui) => (
          <li
            key={ui.id}
            className="border p-3 rounded-md shadow-sm flex flex-col"
          >
            <span>
              <strong>ID:</strong> {ui.id}
            </span>
            <span>
              <strong>Class_Id:</strong> {ui.Class_Id}
            </span>
            <span>
              <strong>Data de Inscrição:</strong> {ui.createdAt}
            </span>
            <span>
              <strong>Matéria:</strong> {ui.Class.Subject.Subject_Name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
