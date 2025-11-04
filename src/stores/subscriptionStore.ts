// src/stores/subscriptionStore.ts
// 임시 구독 상태 저장소

import { create } from "zustand";

export interface SubscriptionState {
  isSubscribed: boolean;
  subscribe: () => void;
  unsubscribe: () => void;
}

export const useSubscriptionStore = create<SubscriptionState> ((set) => ({
  isSubscribed: false,     // 기본값 : 비구독
  subscribe: () => {
    console.log('구독상태 : true');
    set({ isSubscribed: true });
  },
  unsubscribe: () => {
    console.log('구독상태 : false');
    set({ isSubscribed: false })},
}))