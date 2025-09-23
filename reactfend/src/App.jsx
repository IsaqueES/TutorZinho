import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Course from "./pages/AddCourse.jsx";
import RUser from "./pages/Register.jsx";
import LUser from "./pages/Login.jsx";
import Subject from "./pages/AddSubject.jsx";
import Class from "./pages/AddClass.jsx";
import API from "./pages/API.jsx";
import Monitoring from "./pages/InClass.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/login" element={<LUser />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/class" element={<Class />} />
      <Route path="/testeapi" element={<API />} />
      <Route path="/register" element={<RUser />} />
      <Route path="/class/:course/:id" element={<Monitoring />} />
    </Routes>
  );
}

export default App;
