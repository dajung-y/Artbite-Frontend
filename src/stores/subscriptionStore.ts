// src/stores/subscriptionStore.ts
// 임시 구독 상태 저장소

import { create } from "zustand";
import type { MembershipStatus } from "../types/membership";
import { membershipApi } from "../api/membershipApi";

export interface SubscriptionState {
  status: MembershipStatus | null;
  loading: boolean;
  error: string | null;
  isActiveMember: boolean;
  fetchStatus: () => Promise<void>;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  status: null,
  loading: false,
  error: null,
  isActiveMember: false,

  fetchStatus: async () => {
    set({ loading: true, error: null })

    try{
      const res = await membershipApi.getMembershipStatus();

      if (res.success && res.data){
        const active = res.data.status === "ACTIVE" || res.data.status === "CANCELED";
        set({ status: res.data, isActiveMember: active, error: null })
      } else{
        set({ status: null, isActiveMember:false, error: null })
      }
    } catch(err: any){
      const statusCode = err?.response?.status;

      if(statusCode === 401){
        set({ status: null, isActiveMember:false, error: null })
      } else{
        set({ error: err?.message || "구독정보를 불러오지 못했습니다" })
      }
    } finally{
      set({ loading: false })
    }
  },
}));