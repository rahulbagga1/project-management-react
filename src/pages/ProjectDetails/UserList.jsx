import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="border rounded-md">
          <p className="py-2 px-3"> {"Rahul" || "Unassignee"} </p>
        </div>
        {[1, 1, 1, 1].map(() => (
          <div className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4">
            <Avatar>
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm leading-none">My name is Rahul</p>
              <p className="text-sm text-muted-foreground">@iamrahul</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
