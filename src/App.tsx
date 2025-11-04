import { Outlet, Route, Routes } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import DetailPage from "./pages/detail/DetailPage"
import MobileLayout from "./layouts/MobileLayout"
import type { JSX } from "react"
import LoginPage from "./pages/auth/login/LoginPage"
import SignupPage from "./pages/auth/signup/SignupPage"
import OAuth2RedirectPage from "./pages/auth/OAuth2RedirectPage"

function App() {

  const LayoutWrapper = (): JSX.Element => (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  )

  return (
    <Routes>
      <Route element={<LayoutWrapper />} >
        {/* 메인 페이지들 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />

        {/* 서브 페이지들 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/oauth2/redirect" element={<OAuth2RedirectPage />} />
        
      </Route >
    </Routes>
  )
}

export default App
