import type { MembershipImageResponse, MembershipStatusResponse } from "../types/membership";
import axiosInstance from "./axiosInstance";

export const membershipApi = {
  getMembershipImage: async (): Promise<MembershipImageResponse> => {
    const res = await axiosInstance.get<MembershipImageResponse>(
      '/api/membership-inducement-image'
    );
    return res.data;
  },

  getMembershipStatus: async (): Promise<MembershipStatusResponse> => {
    const res = await axiosInstance.get<MembershipStatusResponse>(
      '/api/memberships/status'
    );
    return res.data;
  },

}