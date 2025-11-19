import type { APIResponse } from "./common"

export interface MembershipImage {
  imageUrl: string
}

export interface MembershipStatus {
  status: 'ACTIVE' | 'CANCELED' | 'EXPIRED' | 'BANNED';
  planType: string;
  startDate: string;
  endDate: string;
  consecutiveMonths: number;
  autoRenew: boolean;
}

export type MembershipImageResponse = APIResponse<MembershipImage>;
export type MembershipStatusResponse = APIResponse<MembershipStatus>;