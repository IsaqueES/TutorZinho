import { useState, useEffect } from "react";
import { fetchAPI } from "../../useful/FetchAPI";

export default function API() {
  const [user, setUser] = useState("Carregando...");
  useEffect(() => {
    fetchAPI("http://localhost:3000/apiuser", setUser);
  }, []);

  const [subject, setSubject] = useState("Carregando...");
  useEffect(() => {
    fetchAPI("http://localhost:3000/apisubject", setSubject);
  }, []);

  const [course, setCourse] = useState("Carregando...");
  useEffect(() => {
    fetchAPI("http://localhost:3000/apicourse", setCourse);
  }, []);

  const [classes, setClass] = useState("Carregando...");
  
  useEffect(() => {
    fetchAPI("http://localhost:3000/apiclass", setClass);
  }, []);



  return (
    <pre className="bg-gray-900 text-white p-4 min-h-screen">
      <h1>Materias : </h1>
      {subject}
      <hr />
      <h1>Cursos : </h1>
      {course}
      <hr />
      <h1>Usuarios : </h1>
      {user}
      <hr />
      <h1>Monitorias : </h1>
      {classes}
    </pre>
  );
}
