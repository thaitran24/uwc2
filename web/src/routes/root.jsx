import { Outlet } from "react-router-dom";
import HomeButton from "../components/homebutton/HomeButton";

export default function Root() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
      <HomeButton />
    </>
  );
}
