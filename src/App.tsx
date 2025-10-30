import { Outlet, Route, Routes } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import DetailPage from "./pages/detail/DetailPage"
import MobileLayout from "./layouts/MobileLayout"
import type { JSX } from "react"

function App() {

  const LayoutWrapper = (): JSX.Element => (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  )

  return (
    <Routes>
      <Route element={<LayoutWrapper />} >
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Route >
    </Routes>
  )
}

export default App
