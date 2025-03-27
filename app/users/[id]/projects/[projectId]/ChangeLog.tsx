"use client";

import React from "react";

export interface LogEntry {
  id: number;  // 
  date: string;        // e.g. "2025-03-26"
  time: string;        // e.g. "14:05:30"
  action: string;      // e.g. "Created idea", "Deleted idea", "Added comment", ...
  ideaTitle: string;   // the title of the idea
}

interface ChangeLogProps {
  logEntries: LogEntry[];
}

export default function ChangeLog({ logEntries }: ChangeLogProps) {
  return (
    <div style={{ padding: "1rem", overflowY: "auto", height: "100%" }}>
      <h2>Change Log</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ccc" }}>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>id</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Date</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Time</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Action</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Idea Title</th>
          </tr>
        </thead>
        <tbody>
          {logEntries.map((entry) => (
            <tr key={entry.id+90} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "0.5rem" }}>{entry.id}</td>
              <td style={{ padding: "0.5rem" }}>{entry.date}</td>
              <td style={{ padding: "0.5rem" }}>{entry.time}</td>
              <td style={{ padding: "0.5rem" }}>{entry.action}</td>
              <td style={{ padding: "0.5rem" }}>{entry.ideaTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
