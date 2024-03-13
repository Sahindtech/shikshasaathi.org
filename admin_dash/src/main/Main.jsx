import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "../components/Home";
import Student from "../components/pages/Student";
import StudentList from "../components/pages/StudentList";
import StudentUpdate from "../components/pages/StudentUpdate";
import WebsiteBanner from "../components/pages/WebsiteBanner";
import "../App.css";
const Main = () => {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/list" element={<StudentList />} />
        <Route path="/student-update/:id" element={<StudentUpdate />} />
        <Route path="/background" element={<WebsiteBanner />} />
      </Routes>
    </Layout>
  );
};

export default Main;
