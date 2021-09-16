import { MdDataUsage, MdHome, MdInsertChart, MdMenu } from "react-icons/md";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <div className="fixed bottom-0 w-full flex flex-row gap-5 bg-primary">
      {/* TODO: Toggle isSelected via current route */}
      <NavButton label="Home" icon={<MdHome />} isSelected={true} />
      <NavButton label="Budgets" icon={<MdDataUsage />} isSelected={false} />
      <NavButton label="Stats" icon={<MdInsertChart />} isSelected={false} />
      <NavButton label="More" icon={<MdMenu />} isSelected={false} />
    </div>
  );
}

export default Navbar;
