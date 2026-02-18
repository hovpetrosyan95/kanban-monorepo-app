import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { HAPTIC_STRENGTHS } from "../constants/ui";
import type { HapticStrength } from "../types/ui";

export const useHaptics = () => {
  const trigger = async (strength: HapticStrength) => {
    if (strength === HAPTIC_STRENGTHS.NONE) return;

    try {
      const style = strength.toUpperCase() as keyof typeof ImpactStyle;
      await Haptics.impact({ style: ImpactStyle[style] });
    } catch (e) {
      // Silently fail on Web/Desktop
    }
  };

  return { trigger };
};
