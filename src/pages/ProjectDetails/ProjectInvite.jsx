import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import { InviteUserForm } from "./InviteUserForm";

export const ProjectInvite = () => {
  const handleProjectInvitation = () => {};
  return (
    <Dialog>
      <DialogTrigger>
        <DialogClose>
          <Button
            size="sm"
            variant="outline"
            onClick={handleProjectInvitation}
            className="ml-2"
          >
            <span>invite</span>
            <PlusIcon className="w-3 h-3" />
          </Button>
        </DialogClose>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Invite User</DialogHeader>
        <InviteUserForm />
      </DialogContent>
    </Dialog>
  );
};
