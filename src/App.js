import Layout from "./Components/Layout";
import { Routes, Route } from 'react-router-dom'
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Components/Error";
import RequireAuth from "./Components/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <>
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
