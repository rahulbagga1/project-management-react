import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { ProjectInvite } from "./ProjectInvite";
import { IssueList } from "./IssueList";
import { ChatBox } from "./ChatBox";

export const ProjectDetails = () => {
  return (
    <>
      <div className="mt-5 lg:px-10">
        {/* <div className="flex w-full"> */}
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full text-left">
              <h1 className="text-lg font-semibold pb-5">
                Create Ecommerce Website Using React
              </h1>
              <div className="space-y-5 pb-10">
                <p className="w-full md:max-w-lg lg:max-2-xl">
                  Lorem ipsum lroef adsfasio fwefio fwefio wefoij fwefw
                </p>
                <div className="flex">
                  <p className="w-36">Project Lead: </p>
                  <p>Rahul</p>
                </div>
                <div className="flex">
                  <p className="w-36">Members: </p>
                  <div className="flex items-center gap-2">
                    {[1, 1, 1, 1].map((item) => (
                      <Avatar className="cursor-pointer">
                        <AvatarFallback>R</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <ProjectInvite />
                </div>
                <div className="flex">
                  <p className="w-36">Category: </p>
                  <p>Fullstack</p>
                </div>
                <div className="flex">
                  <p className="w-36">Project Lead: </p>
                  <Badge>Rahul</Badge>
                </div>
              </div>

              <section>
                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pending" title="Todo list" />
                  <IssueList status="in_progress" title="In progress" />
                  <IssueList status="done" title="Done" />
                </div>
              </section>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] rounded-mb sticky right-5 top-10">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};
