// src/stores/subscriptionStore.ts
// 임시 구독 상태 저장소

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SubscriptionState {
  isSubscribed: boolean;
  toggleSubscription: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>() (
  persist(
    (set) => ({
      isSubscribed: false,        // 기본 값 : 구독 X
      toggleSubscription: () => 
        set((state) => ({ isSubscribed: !state.isSubscribed }))
    }),
    {
      name: 'subscription-state'
    }
  )
)