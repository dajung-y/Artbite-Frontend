import { mockMembership } from "../mocks/mockMembership";
import type { MembershipResponse } from "../types/membership";

export const mockMembershipApi = {
  getMembershipImage: async (): Promise<MembershipResponse> => {
    await new Promise((res) => setTimeout(res,300));
    return mockMembership;
  }
}