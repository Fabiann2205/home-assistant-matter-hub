import type { IlluminanceMeasurementClusterState } from "@home-assistant-matter-hub/common";
import LightModeIcon from "@mui/icons-material/LightMode";

export interface IlluminanceMeasurementStateProps {
  state: IlluminanceMeasurementClusterState;
}

function measuredToLux(measured: number): number {
  if (measured <= 1) {
    return 0;
  }
  return Math.pow(10, (measured - 1) / 10000);
}

export const IlluminanceMeasurementState = ({
  state,
}: IlluminanceMeasurementStateProps) => {
  const mv = state.measuredValue;
  if (mv == null) {
    return <LightModeIcon />;
  }

  const lux = measuredToLux(mv);
  
  return (
    <>
      <LightModeIcon fontSize="medium" />
      <span>{lux.toFixed(1)} lx</span>
    </>
  );
};
