import type { APIResponse } from "./common";

export interface PaymentRequest {
  payType: string;
  amount: number;
  orderName: string;
  membershipPlanType: string;
  yourSuccessUrl: string;
  yourFailUrl: string;
}

export interface PaymentData {
  payType: string;
  amount: number;
  orderName: string;
  orderId: string;
  customerEmail: string;
  customerName: string;
  successUrl: string;
  failUrl: string;
  failReason: string;
  cancelYN: boolean;
  cancelReason: string;
  createdAt: string;
}

export type PaymentResponse = APIResponse<PaymentData>;