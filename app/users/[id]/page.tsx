"use client";

import React, { useEffect, useState } from "react";

import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Separator } from "@/components/commons/separator"
import { Button } from "@/components/commons/button"
import { useRouter } from "next/navigation";
import { ApiService } from "@/api/apiService";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/sidebar/sidebar"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/commons/breadcrumb"

import {
  Avatar,
  AvatarImage,
} from "@/components/commons/avatar"

import { ProjectsTable } from "@/components/user_page/projects-table"
import { FriendsTable } from "@/components/user_page/friends-table"

import {
  Mail,
  Gift,
  Calendar1,
  ShieldCheck,
  Pencil,
  LogOut,
} from "lucide-react"
import { ContributionsChart } from "@/components/user_page/contributions-chart";

interface UserData {
  name: string;
  username: string;
  email: string;
  status: string;
  avatarUrl: string;
  projectIds: string[];
  createAt: string;
  lastLoginAt: string;
  friendsIds: string[];
  friendRequestsIds: string[];
  friendRequestsSentIds: string[];
  birthday: string;
  bio: string;
}

function makePrettyLastLogin(dateString: string | undefined): string {
  const nowDate = new Date();
  const date = dateString ? new Date(dateString) : new Date();
  const diff = Math.abs(nowDate.getTime() - date.getTime());

  const diffHours = Math.ceil(diff / (1000 * 60 * 60));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  if (diffHours < 24 && diffDays == 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  }
  else if (diffDays < 30 && diffMonths == 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  }
  else if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
  }
  else {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }
}


export default function Page() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();
  const apiService = new ApiService();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = sessionStorage.getItem("userId");
      const token = sessionStorage.getItem("token");
  
      if (!userId || !token) {
        router.push("/login");
        return;
      }
  
      try {
        const data = await apiService.get<UserData>(`/users/${userId}`);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, []);
  

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="m-4 space-y-4">
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center">
              <Avatar className="h-16 w-16 rounded-lg">
                <AvatarImage src={userData?.avatarUrl || "https://avatar.vercel.sh/john"} />
              </Avatar>
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {userData?.name || "Loading..."}
                </h3>
                <p className="leading-7">
                  @{userData?.username}
                </p>
              </div>
            </div>
            <div className="space-x-4 items-center">
              <Button className="min-w-25 w-auto py-3" onClick= {()=>router.push(`/users/${sessionStorage.getItem("userId")}/edit`)}>
                <Pencil/> Edit
              </Button>
              <Button className="min-w-25 w-auto py-3" onClick= {()=>router.push("/login")}>
                <LogOut/> Log Out
              </Button>
            </div>
          </div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              About
            </h3>
            <Separator />
            <div className="space-y-2 my-4">
              <div className="flex gap-2 items-center">
                <Mail />
                <p className="leading-7">
                  Email: {userData?.email}
                </p>
              </div>
              {userData?.birthday && (
                <div className="flex gap-2 items-center">
                  <Gift />
                  <p className="leading-7">
                    Birthday: {userData.birthday}
                  </p>
                </div>
              )}
              <div className="flex gap-2 items-center">
                <Calendar1 />
                <p className="leading-7">
                  Joined: {userData?.createAt ? new Date(userData.createAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) : "Unknown"}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <ShieldCheck />
                <p className="leading-7">
                  Last Active: {makePrettyLastLogin(userData?.lastLoginAt)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Projects
            </h3>
            <Separator />
            <div className="space-y-2 my-4">
              <div className="my-6 w-full overflow-y-auto">
                <ProjectsTable/>
              </div>
            </div>
          </div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Friends
            </h3>
            <Separator />
            <div className="space-y-2 my-4">
              <div className="my-6 w-full overflow-y-auto">
                <FriendsTable/>
              </div>
            </div>
          </div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Activity
            </h3>
            <Separator />
            <div className="space-y-2 my-4">
              <div className="my-6 w-full overflow-y-auto">
                <ContributionsChart/>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
