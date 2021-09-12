import NavButton from "./NavButton";
import NewRecordButton from "./NewRecordButton";
import logo from "./media/logo.png";

function Navbar() {
  return (
    <header className="hidden font-medium border-b border-gray-200 w-full py-3 px-28 text-base bg-white text-black lg:block">
      <div className="flex flex-row gap-3 ">
        <img src={logo} alt="logo.png" className="h-12 w-12" />
        <div className="flex flex-grow flex-row overflow-x-auto flex-wrap gap-5 p-0">
          {/* <NavButton label="Dashboard" /> */}
          <div className="p-3 border-white border-b-0">Dashboard</div>
          <NavButton label="Accounts" />
          <NavButton label="Records" />
          <NavButton label="Analytics" />
          <NavButton label="Imports" />
        </div>
        <div>
          <NewRecordButton />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
