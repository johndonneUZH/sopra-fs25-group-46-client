"use client";

import React from "react";
import { Idea } from "@/types/idea";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";

interface VotesProps {
  idea: Idea;
  currentUserId: string;
  onToggleVote: (ideaId: string, userId: string, type: "up" | "down") => void;
}

export default function Votes({ idea, currentUserId, onToggleVote }: VotesProps) {
  // Use default values if upvotesL or downvotesL are undefined
  const upvotes = idea.upVotes || [];
  const downvotes = idea.downVotes || [];

  const hasUpvoted = upvotes.includes(currentUserId);
  const hasDownvoted = downvotes.includes(currentUserId);

  const handleVote = (type: "up" | "down") => {
    onToggleVote(idea.ideaId, currentUserId, type);
  };

  // Calculate net votes using default arrays
  const netVotes = upvotes.length - downvotes.length;
  const netDisplay = netVotes > 0 ? `+${netVotes}` : netVotes.toString();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        marginTop: "0.5rem",
      }}
    >
      {/* COUNT */}
      <span style={{ fontWeight: "bold", color: "#000" }}>{netDisplay}</span>

      {/* Upvote */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleVote("up");
        }}
        style={{
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        <ArrowBigUp className={`w-6 h-6 transition-colors duration-150 
          ${hasUpvoted ? "fill-black text-black" : "fill-none hover:text-black"}`}
        />
      </button>

      {/* Downvote */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleVote("down");
        }}
        style={{
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
       <ArrowBigDown className={`w-6 h-6 transition-colors duration-150 
          ${hasDownvoted ? "fill-black text-black" : "fill-none hover:text-black"}`}
        />
      </button>
    </div>
  );
}