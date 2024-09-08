import { useToast } from "@/components/ui/use-toast";
import { cn, getFileStub } from "@/lib/utils";
import { useDeleteGames } from "@/mutations/useDeleteGames";
import { useGameDetail } from "@/providers/game-details";
import { useCallback, useState } from "react";
import {
  DialogContent,
  DialogHeader,
  Dialog,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import { Route } from "@/routes/games/$gameId/index";
import { useNavigate } from "@tanstack/react-router";

export function DeleteGameModal() {
  const { game, gameMetadata: metadata } = useGameDetail();
  const { toast } = useToast();
  const name = metadata?.name || getFileStub(game.path);
  const [deleteFromDisk, setDeleteFromDisk] = useState(false);
  const { deleteGameModal } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const { mutateAsync: deleteGame, isPending } = useDeleteGames();

  const handleDelete = useCallback(async () => {
    try {
      const res = await deleteGame({ ids: [game.id], deleteFromDisk });

      if (!res.gamesDeleted.length) {
        throw new Error("Failed to delete game");
      }
    } catch {
      toast({
        title: "Failed to delete game",
      });
    }
  }, [deleteGame, game.id, deleteFromDisk, toast]);

  return (
    <Dialog
      open={deleteGameModal?.open}
      onOpenChange={(open) => {
        if (!open) {
          navigate({
            search: { deleteGameModal: undefined },
          });
        }
      }}
    >
      <DialogContent className="max-w-[60ch]">
        <DialogHeader>
          <DialogTitle>Delete Game</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {name}?
          </DialogDescription>
        </DialogHeader>

        <p className="pb-2">
          You can either delete the entry from the database or delete the game
          from the disk. Deleting only the entry will leave your file system as
          is, but Retrom will ignore the game&apos;s directory moving forward.
        </p>

        <DialogFooter>
          <div className="flex items-center justify-between gap-6 w-full">
            <div className="flex items-top gap-2">
              <Checkbox
                id="delete-from-disk"
                checked={deleteFromDisk}
                onCheckedChange={(event) => setDeleteFromDisk(!!event)}
              />

              <div className="grid gap-1 5 leading-none">
                <label htmlFor="delete-from-disk">Delete from disk</label>

                <p className="text-sm text-muted-foreground">
                  This will alter the the file system
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>

              <Button
                className="relative"
                variant="destructive"
                onClick={handleDelete}
              >
                <LoaderCircleIcon
                  className={cn(
                    "animate-spin absolute",
                    !isPending && "opacity-0",
                  )}
                />
                <p className={cn(isPending && "opacity-0")}>Delete</p>
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}