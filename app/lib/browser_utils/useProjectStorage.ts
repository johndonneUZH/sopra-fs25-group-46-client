/* eslint-disable */
"use client";

import { useState, useEffect, useMemo } from "react";
import { Project } from "../../types/project";
import { ApiService } from "@/api/apiService";

export function useUserProjects(userId: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Memoize the apiService to prevent recreation on every render
  const apiService = useMemo(() => new ApiService(), []);

  useEffect(() => {
    if (!userId) return; 

    async function fetchProjects() {
      setLoading(true);
      setError(null);
      try {
        // Remove the type assertion and let TypeScript infer the type
        const response = await apiService.get<Project[]>(`/users/${userId}/projects`);
        console.log("API Response:", response);
        
        setProjects(response);
      } catch (err: any) {
        console.error("Failed to fetch projects:", err);
        setError(err.message || "Failed to fetch projects.");
      } finally {
        setLoading(false);
      }
    }
    
    fetchProjects();
  }, [userId, apiService]); // Add projects.length to dependencies


  // Add project via API
  async function addProject(name: string, description: string) {
    const trimmedName = name.trim();
    const trimmedDescription = description.trim();
    if (trimmedName.trim() === "") return;
  
    try {
      const response = await apiService.post<Project>(`/projects`, {
        projectName: trimmedName,
        projectDescription: trimmedDescription 
      }) as Project ;
      
      setProjects([...projects, response]);
    } catch (err) {
      console.error("Failed to add project:", err);
    }
  }

  // Optional: Delete projects via API
  async function deleteProjects(projectIds: string[]) {
    try {
      // Delete projects in sequence (better error handling than Promise.all)
      for (const id of projectIds) {
        await apiService.delete(`/projects/${id}`);
      }
      
      // Only update state if all deletions succeeded
      setProjects(prev => prev.filter(proj => !projectIds.includes(proj.projectId)));
      
      return true; // Indicate success
    } catch (err) {
      console.error('Deletion failed:', err);
      return false; // Indicate failure
    }
  }

  return {
    projects,
    loading,
    error,
    addProject,
    deleteProjects,
  };

}
