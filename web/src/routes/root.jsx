import { Outlet } from "react-router-dom";
import BasicSpeedDial from "../components/speeddial/BasicSpeedDial";

export default function Root() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
      <BasicSpeedDial />
    </>
  );
}
