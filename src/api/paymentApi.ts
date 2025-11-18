import type { PaymentRequest, PaymentResponse } from "../types/payment";
import axiosInstance from "./axiosInstance";

export const paymentApi = {
  postPaymentToss: async (req: PaymentRequest): Promise<PaymentResponse> => {
    const res = await axiosInstance.post<PaymentResponse>(
      '/api/payments/toss',
      req
    );
    return res.data;
  }
}