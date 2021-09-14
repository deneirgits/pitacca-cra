import { MdDataUsage, MdHome, MdInsertChart, MdMenu } from "react-icons/md";
import NavButton from "./NavButton";
// import logo from "./media/logo.png";

function Navbar() {
  return (
    <div className="absolute bottom-0 w-full flex flex-row gap-5 bg-primary">
      <NavButton label="Home" icon={<MdHome />} />
      <NavButton label="Budgets" icon={<MdDataUsage />} />
      <NavButton label="Stats" icon={<MdInsertChart />} />
      <NavButton label="More" icon={<MdMenu />} />
    </div>
  );
}

export default Navbar;
