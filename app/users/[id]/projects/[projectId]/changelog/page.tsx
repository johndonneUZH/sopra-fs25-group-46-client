"use client";

import { useParams } from "next/navigation";
import { SidebarProvider } from "@/components/sidebar/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/sidebar/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/commons/breadcrumb";

import ChangeLogSidebar from "@/components/dashboard_Project/ChangeLogSidebar";
import { useStoreLog } from "@/lib/dashboard_utils/useStoreLog";

export default function ChangelogPage() {

  const { projectId } = useParams();
  const { logEntries } = useStoreLog(projectId as string);

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
                  <BreadcrumbPage>Changelog</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          {/* Main Content */}
          <div className="flex flex-col flex-1 p-4">
            <h1 className="text-xl font-bold mb-10">Changelog</h1>
            <ChangeLogSidebar logEntries={logEntries} />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}