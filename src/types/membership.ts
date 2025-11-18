import type { APIResponse } from "./common"

export interface MembershipImage {
  imageUrl: string
}

export type MembershipResponse = APIResponse<MembershipImage>;