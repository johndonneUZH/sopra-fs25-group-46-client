'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ApiService } from '@/api/apiService';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const apiService = new ApiService();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    // If no token exists, force redirect to login
    if (!token || token === "") {
      router.push("/login");
      return;
    }

    // const userId = Number(sessionStorage.getItem("currentUserId"));
    const LOGOUT_AFTER = 30* 60 * 1000; // 30 min
    let logoutTimer: NodeJS.Timeout;

    const logout = async () => {
      try {
        apiService.logOut(); 
      } catch (err) {
        console.error("Error setting user offline:", err);
      } finally {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("currentUserId");
        sessionStorage.removeItem("projectId");
        router.push("/login");
      }
    };

    const resetTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(logout, LOGOUT_AFTER);
    };

    const events = ["click", "mousemove", "keydown"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // Start timer on mount

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(logoutTimer);
    };
  }, [router]);

  return <>{children}</>;
}
