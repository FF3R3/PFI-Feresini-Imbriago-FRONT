"use client";

import { useEffect, useState } from "react";
import {
  meet,
  MeetSidePanelClient,
} from "@googleworkspace/meet-addons/meet.addons";
import { CLOUD_PROJECT_NUMBER, MAIN_STAGE_URL } from "../../constants";

/**
 * See: https://developers.google.com/meet/add-ons/guides/overview#side-panel
 */
export default function Page() {
  const [sidePanelClient, setSidePanelClient] = useState<MeetSidePanelClient>();
  const [appState, setAppState] = useState();

  // Launches the main stage when the main button is clicked.
  async function startActivity(e: unknown) {
    if (!sidePanelClient) {
      throw new Error("Side Panel is not yet initialized!");
    }
    console.log("Starting mainstage on:", MAIN_STAGE_URL);

    await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
  }

  async function getMeetingInfo() {
    if (!sidePanelClient) {
      throw new Error("Side Panel is not yet initialized!");
    }
    console.log("Starting mainstage on:", MAIN_STAGE_URL);

    const meetingInfo = await sidePanelClient.getMeetingInfo();
    console.log(meetingInfo);
    
  }

  /**
   * Prepares the Add-on Side Panel Client.
   */
  useEffect(() => {
    (async () => {
      const session = await meet.addon.createAddonSession({
        cloudProjectNumber: CLOUD_PROJECT_NUMBER,
      });
      setSidePanelClient(await session.createSidePanelClient());
    })();
  }, []);

  return (
    <>
      <h1 className="h1 text-center">
        Comenza tu sesion de estudio en con Sparkle!
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <button className="btn-primary w-100 max-w-3xs" onClick={getMeetingInfo}>
          Crear una nueva sesión
        </button>
        <button className="btn-secondary w-100 max-w-3xs" onClick={getMeetingInfo}>
          Unirme como invitado
        </button>
      </div>
    </>
  );
}
