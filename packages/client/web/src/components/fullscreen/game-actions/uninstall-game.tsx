import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuEntryButton } from "../menubar/menu-entry-button";
import { HotkeyButton } from "../hotkey-button";
import { useUninstallGame } from "@/mutations/useUninstallGame";
import { useGameDetail } from "@/providers/game-details";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { FocusableElement, FocusContainer } from "../focus-container";
import { HotkeyLayer } from "@/providers/hotkeys/layers";
import { useInstallationQuery } from "@/queries/useInstallationQuery";
import { InstallationStatus } from "@/generated/retrom/client/client-utils";

export function UninstallGameAction() {
  const [open, setOpen] = useState(false);
  const { game } = useGameDetail();

  const { data: installationStatus } = useInstallationQuery(game);
  const { mutate: uninstall, status } = useUninstallGame(game);
  const openDisabled = installationStatus !== InstallationStatus.INSTALLED;

  const disabled =
    status === "pending" || installationStatus !== InstallationStatus.INSTALLED;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <FocusableElement
          opts={{
            focusKey: "uninstall-game-action-open",
            focusable: !openDisabled,
          }}
        >
          <MenuEntryButton disabled={openDisabled}>
            Uninstall Game
          </MenuEntryButton>
        </FocusableElement>
      </SheetTrigger>

      <SheetContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <HotkeyLayer
          allowBubbling="never"
          handlers={{
            BACK: { handler: () => setOpen(false) },
            MENU: {
              handler: () => uninstall(),
            },
          }}
        >
          <FocusContainer
            initialFocus
            opts={{ focusKey: "uninstall-game-action", isFocusBoundary: true }}
          >
            <SheetHeader>
              <SheetTitle>Uninstall Game</SheetTitle>
              <SheetDescription>
                Are you sure you want to uninstall this game?
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                <FocusableElement
                  opts={{ focusKey: "uninstall-game-action-close" }}
                >
                  <HotkeyButton hotkey="BACK">Back</HotkeyButton>
                </FocusableElement>
              </SheetClose>

              <FocusableElement
                opts={{ focusKey: "uninstall-game-action-confirm" }}
              >
                <HotkeyButton
                  disabled={disabled}
                  hotkey="MENU"
                  onClick={() => uninstall()}
                >
                  {status === "pending" ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Confirm"
                  )}
                </HotkeyButton>
              </FocusableElement>
            </SheetFooter>
          </FocusContainer>
        </HotkeyLayer>
      </SheetContent>
    </Sheet>
  );
}
