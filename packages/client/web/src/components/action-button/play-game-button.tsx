import { Button } from "@/components/ui/button";
import { usePlayGame } from "@/mutations/usePlayGame";
import { useEmulatorProfiles } from "@/queries/useEmulatorProfiles";
import { usePlayStatusQuery } from "@/queries/usePlayStatus";
import { PlayStatus } from "@/generated/retrom/client/client-utils";
import { useStopGame } from "@/mutations/useStopGame";
import { useDefaultEmulatorProfiles } from "@/queries/useDefaultEmulatorProfiles";
import { ComponentProps, ForwardedRef, forwardRef, useCallback } from "react";
import { LoaderCircleIcon, PlayIcon, PlusIcon, Square } from "lucide-react";
import { useEmulators } from "@/queries/useEmulators";
import { useGameDetail } from "@/providers/game-details";
import { useMatch, useNavigate } from "@tanstack/react-router";
import { FocusableElement } from "../fullscreen/focus-container";

export const PlayGameButton = forwardRef(
  (
    props: ComponentProps<typeof Button>,
    forwardedRef: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { game, platform, gameFiles } = useGameDetail();
    const { mutate: playAction } = usePlayGame(game);
    const { mutate: stopAction } = useStopGame(game);
    const navigate = useNavigate();
    const fullscreenMatch = useMatch({
      from: "/_fullscreenLayout",
      shouldThrow: false,
    });

    const { data: playStatusUpdate, status: queryStatus } =
      usePlayStatusQuery(game);

    const { data: defaultProfileId, status: defaultEmulatorProfileStatus } =
      useDefaultEmulatorProfiles({
        request: { platformIds: [platform.id] },
        selectFn: (data) => data.defaultProfiles.at(0)?.emulatorProfileId,
      });

    const { data: emulators, status: emulatorsStatus } = useEmulators({
      request: { supportedPlatformIds: [platform.id] },
      selectFn: (data) => data.emulators,
    });

    const { data: profiles } = useEmulatorProfiles({
      enabled:
        emulatorsStatus === "success" &&
        defaultEmulatorProfileStatus === "success",
      selectFn: (data) => data.profiles,
      request: {
        ids: defaultProfileId !== undefined ? [defaultProfileId] : [],
        emulatorIds: emulators?.map((emulator) => emulator.id) ?? [],
      },
    });

    const defaultProfile =
      profiles?.find((profile) => profile.id === defaultProfileId) ??
      profiles?.at(0);

    const emulator = defaultProfile
      ? emulators?.find((emulator) => emulator.id === defaultProfile.emulatorId)
      : emulators?.at(0);

    const file = gameFiles?.find((file) => file.id === game.defaultFileId);
    const disabled = queryStatus !== "success";

    const onClick = useCallback(() => {
      if (disabled) return;

      if (playStatusUpdate?.playStatus === PlayStatus.PLAYING) {
        stopAction({ game });
        return;
      }

      if (!emulator) {
        navigate({ search: { manageEmulatorsModal: { open: true } } });
        return;
      }

      playAction({
        game,
        emulatorProfile: defaultProfile,
        emulator: emulator,
        file,
      });
    }, [
      navigate,
      disabled,
      defaultProfile,
      emulator,
      file,
      game,
      playAction,
      playStatusUpdate,
      stopAction,
    ]);

    const Content = () => {
      if (queryStatus === "pending") {
        return (
          <>
            <LoaderCircleIcon className="h-[1.2rem] w-[1.2rem]" />
            Launching...
          </>
        );
      }

      if (playStatusUpdate?.playStatus === PlayStatus.PLAYING) {
        return (
          <>
            <Square className="h-[1.2rem] w-[1.2rem] fill-current" />
            Stop
          </>
        );
      }

      if (!emulator) {
        return (
          <>
            <PlusIcon className="h-[1.2rem] w-[1.2rem] stroke-[3] stroke-current fill-current" />
            Add Emulator
          </>
        );
      }

      return (
        <>
          <PlayIcon className="h-[1.2rem] w-[1.2rem] fill-current" />
          Play
        </>
      );
    };

    return (
      <FocusableElement
        ref={forwardedRef}
        initialFocus
        opts={{ focusKey: "play-game-button" }}
      >
        <Button {...props} disabled={disabled} onClick={onClick}>
          <Content />
        </Button>
      </FocusableElement>
    );
  },
);
