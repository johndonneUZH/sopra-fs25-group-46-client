"use client";

import { useParams } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useUserProjects } from "@/lib/browser_utils/useProjectStorage";
import { AddProjectForm } from "@/components/project_browser/AddProjectForm";
import { UserProjectsTable } from "@/components/project_browser/UserProjectsTable";

export default function UserProjectsPage() {
  const { id } = useParams() as { id: string };

  const { projects, addProject, deleteProjects } = useUserProjects(id);

  // Callback when deletion is confirmed from the table
  const handleDeleteSelected = (selectedIds: number[]) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete ${selectedIds.length} project(s)?`
    );
    if (isConfirmed) {
      deleteProjects(selectedIds);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar className="w-64 shrink-0" />

        {/* Main Content Wrapper */}
        <div className="flex flex-col flex-1">
          {/* Fixed Header with Breadcrumb */}
          <header className="flex h-16 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          {/* Main Content */}
          <div className="flex flex-col flex-1 p-4">
            <h1 className="text-xl font-bold">Projects for User {id}</h1>
            <Card className="w-full max-w-xl mb-6">
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Add and manage user projects</CardDescription>
              </CardHeader>
              <CardContent>
                <AddProjectForm onAddProject={addProject} />
              </CardContent>
            </Card>

            <UserProjectsTable
              userId={id}
              projects={projects}
              onDeleteSelected={handleDeleteSelected}
            />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}