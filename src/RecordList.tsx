import {
  MdList,
  MdLocalMall,
  MdMonetizationOn,
  MdRestaurant,
} from "react-icons/md";
import Record from "./Record";

function Records() {
  return (
    <div className="bg-primbg flex-grow">
      <div className="rounded-t-2xl p-2 py-2 font-medium bg-primary text-primtext shadow-t-md">
        <div className="text-center text-xs">————</div>
        <div className="flex">
          <div className="flex-grow">Records</div>
          <div className="flex bg-secondary text-sectext rounded-md py-0.5 px-9 shadow">
            <div className="pr-1">
              <span className="text-xl">
                <MdList />
              </span>
            </div>
            <div className="text-sm">All</div>
          </div>
        </div>
      </div>
      <div className="bg-primbg">
        {/* TODO: Remove placeholder records */}
        <Record
          categoryIcon={<MdRestaurant />}
          categoryColor="bg-acc-amber"
          categoryName="Restaurant"
          account="Cash"
          currency="PHP"
          date={new Date(2021, 9, 14)}
          description="Joed's Lutong Hapon"
          value={-500.0}
        />
        <Record
          categoryIcon={<MdMonetizationOn />}
          categoryColor="bg-acc-green"
          categoryName="Income"
          account="Bank"
          currency="PHP"
          date={new Date(2021, 9, 15)}
          description=""
          value={2000.0}
        />
        <Record
          categoryIcon={<MdLocalMall />}
          categoryColor="bg-acc-light-blue"
          categoryName="Shopping"
          account="Cash"
          currency="PHP"
          date={new Date(2021, 7, 4)}
          description="Sandal"
          value={-800.0}
        />
      </div>
    </div>
  );
}

export default Records;
