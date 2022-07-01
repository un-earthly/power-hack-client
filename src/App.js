import Layout from "./Components/Layout";
import { Routes, Route } from 'react-router-dom'
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Components/Error";
import RequireAuth from "./Components/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
export default function App() {
  return (
    <>
      <Helmet>
        <title>Home - Power Hack</title>
      </Helmet>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Layout></Layout>
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
