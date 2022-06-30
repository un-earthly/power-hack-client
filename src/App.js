import Layout from "./Components/Layout";
import SearchHeader from "./Components/SearchHeader";
import Table from "./Components/Table";
import { Routes, Route } from 'react-router-dom'
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Components/Error";
import RequireAuth from "./Components/RequireAuth";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  const [temporaryData, setTemporaryData] = useState(null)
  const [searchedData, setSearchedData] = useState([])
  return (
    <>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Layout>
              <SearchHeader setTemporaryData={setTemporaryData} setSearchedData={setSearchedData} />
              <Table temporaryData={temporaryData} searchedData={searchedData} setTemporaryData={setTemporaryData} />
            </Layout>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  )
}
