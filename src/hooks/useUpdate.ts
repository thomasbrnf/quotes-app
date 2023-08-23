import { useState } from "react";
import { delay, FADE_TIME } from "../service";

export function useUpdate() {
  const [date, setDate] = useState<Date | null>(null);
  const [disabled, setDisabled] = useState(false);

  async function Update() {
    setDate(new Date());

    setDisabled(true);
    await delay(FADE_TIME);
    setDisabled(false);
  }
  return { date, disabled, Update };
}
