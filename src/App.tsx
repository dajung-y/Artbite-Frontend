import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import MainPage from "./pages/main/MainPage"
import MobileLayout from "./layouts/MobileLayout"
import { useEffect, useState, type JSX } from "react"
import LoginPage from "./pages/auth/login/LoginPage"
import SignupPage from "./pages/auth/signup/SignupPage"
import OAuth2RedirectPage from "./pages/auth/OAuth2RedirectPage"
import TodayPage from "./pages/today/TodayPage"
import MembershipPage from "./pages/membership/MembershipPage"
import { Toaster } from "react-hot-toast"
import HistoryPage from "./pages/history/HistoryPage"
import BookmarkPage from "./pages/bookmark/BookmarkPage"
import OnboardingPage from "./pages/onboard/OnboardingPage"
import PaymentPage from "./pages/payment/PaymentPage"


function App() {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);

  useEffect(() => {
    const visited = localStorage.getItem("visited");

    if(!visited){
      setIsFirstVisit(true);
    } else{
      setIsFirstVisit(false);
    }
  },[]);

  if(isFirstVisit === null) return null;

  const LayoutWrapper = (): JSX.Element => (
    <MobileLayout>
      <Outlet />
    </MobileLayout>
  )

  return (
    <>
      <Routes>
        {isFirstVisit && (
          <>
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="*" element={<Navigate to="/onboarding" />} />
          </>
        )}
        <Route element={<LayoutWrapper />} >
          {/* 메인 페이지들 */}
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/today/:id" element={<TodayPage />} /> 
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/payment" element={<PaymentPage />} />

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
