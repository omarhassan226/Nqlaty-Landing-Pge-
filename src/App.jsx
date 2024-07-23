import { Route, Routes } from "react-router-dom"
import MainPage from "./main-page/MainPage"
import Page1 from "./pages/page1/Page1"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <MainPage/>
      <Routes>
        {/* <Route path="/" element={<Page1 />} /> */}
        {/* <Route path="/solutions" element={<Page2 />} />
        <Route path="/prices" element={<Page3 />} />
        <Route path="/services" element={<Page4 />} />
        <Route path="/about" element={<Page5 />} /> */}
      </Routes>
    </>
  )
}

export default App
