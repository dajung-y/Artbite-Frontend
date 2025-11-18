import { useState } from "react"
import PaymentForm from "../../components/payment/PaymentForm";
import PaymentSuccess from "../../components/payment/PaymentSuccess";
import Header from "../../components/common/Header";

export default function PaymentPage() {
  const [step, setStep] = useState<'form' | 'success'>('form');

  return (
    <div className="w-full h-screen">
      <Header />
      {step === 'form' ? (
        <PaymentForm />
      ) : (
        <PaymentSuccess />
      )}
    </div>
  )
}
