import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Course from "./pages/AddCourse.jsx";
import User from "./pages/AddUser.jsx";
import Subject from "./pages/AddSubject.jsx";
import Class from "./pages/AddClass.jsx";
import API from "./pages/API.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/user" element={<User />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/class" element={<Class />} />
      <Route path="/testeapi" element={<API />} />
    </Routes>
  );
}

export default App;
