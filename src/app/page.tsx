import React from "react";
import Introduction from "@/components/Introduction/Introduction";
import MoreAboutMe from "@/components/MoreAboutMe/MoreAboutMe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Introduction />
      <MoreAboutMe />
    </div>
  );
}
