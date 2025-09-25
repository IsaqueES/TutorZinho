import { useState, useEffect } from "react";
import { fetchAPI } from "../../useful/FetchAPI";

export default function InUser() {
  const [user, setUser] = useState([]);
  const idu = localStorage.getItem("id");
  console.log("TSTE");
  useEffect(() => {
    fetchAPI(`http://localhost:3000/apiinuser/${idu}`, setUser);
  }, []);//!CONTINUARR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Lista de Classes do Usuário</h2>
      <ul className="space-y-2">
        {user.map((item) => (
          <li
            key={item.id}
            className="border p-3 rounded-md shadow-sm flex flex-col"
          >
            <span>
              <strong>ID:</strong> {item.id}
            </span>
            <span>
              <strong>Class_Id:</strong> {item.Class_Id}
            </span>
            <span>
              <strong>User_Id:</strong> {item.User_Id}
            </span>
            <span>
              <strong>Criado em:</strong>{" "}
              {new Date(item.createdAt).toLocaleString()}
            </span>
            <span>
              <strong>Atualizado em:</strong>{" "}
              {new Date(item.updatedAt).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
