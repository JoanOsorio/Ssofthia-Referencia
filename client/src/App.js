import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

