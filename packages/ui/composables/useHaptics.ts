import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";
import type { HapticStrength } from "../types/ui";

export const useHaptics = () => {
  const trigger = async (
    type: "impact" | "notification",
    style: HapticStrength | NotificationType,
  ) => {
    try {
      if (type === "impact") {
        const s = (style as string).toUpperCase() as keyof typeof ImpactStyle;
        await Haptics.impact({ style: ImpactStyle[s] });
      } else {
        await Haptics.notification({ type: style as NotificationType });
      }
    } catch (e) {
      // Silently fail on Web
    }
  };

  return {
    trigger,
    success: () => trigger("notification", NotificationType.Success),
    warning: () => trigger("notification", NotificationType.Warning),
  };
};
