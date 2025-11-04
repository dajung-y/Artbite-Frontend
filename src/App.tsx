import { Outlet, Route, Routes } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import MobileLayout from "./layouts/MobileLayout"
import type { JSX } from "react"
import LoginPage from "./pages/auth/login/LoginPage"
import SignupPage from "./pages/auth/signup/SignupPage"
import OAuth2RedirectPage from "./pages/auth/OAuth2RedirectPage"
import TodayPage from "./pages/today/TodayPage"
import MembershipPage from "./pages/membership/MembershipPage"
import { Toaster } from "react-hot-toast"

function App() {

  const LayoutWrapper = (): JSX.Element => (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  )

  return (
    <>
      <Routes>
        <Route element={<LayoutWrapper />} >
          {/* 메인 페이지들 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/membership" element={<MembershipPage />} />

          {/* 서브 페이지들 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectPage />} />
          
        </Route >
      </Routes>

      {/* 전역 토스트 */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }} />
    </>
  )
}

export default App
