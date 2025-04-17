"use client";
import { useEffect, useState } from "react";


export function useCurrentProjectId(): string {
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = sessionStorage.getItem("projectId") || "";
      setProjectId(id);

      const handleStorage = (e: StorageEvent) => {
        if (e.key === "projectId") {
          setProjectId(e.newValue || "");
        }
      };

      const handleCustom = (e: CustomEvent) => {
        setProjectId(e.detail);
      };

      window.addEventListener("storage", handleStorage);
      window.addEventListener("projectChanged", handleCustom as EventListener);

      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener("projectChanged", handleCustom as EventListener);
      };
    }
  }, []);

  return projectId;
}

export function setCurrentProjectId(newId: string) {
  sessionStorage.setItem("projectId", newId);
  window.dispatchEvent(new CustomEvent("projectChanged", { detail: newId }));
}
