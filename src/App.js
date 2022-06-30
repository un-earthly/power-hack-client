import Layout from "./Components/Layout";
import SearchHeader from "./Components/SearchHeader";
import Table from "./Components/Table";
import {
  Routes,
  Route,
} from 'react-router-dom'
import Login from "./Components/Login";
import Register from "./Components/Register";
import Error from "./Components/Error";
import RequireAuth from "./Components/RequireAuth";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <RequireAuth>
          <Layout>
            <SearchHeader />
            <Table />
          </Layout>
        </RequireAuth>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
