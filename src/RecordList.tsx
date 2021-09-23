import {
  MdList,
  MdLocalMall,
  MdMonetizationOn,
  MdRestaurant,
} from "react-icons/md";
import Record from "./Record";
import { AnimationControls } from "framer-motion";
import React from "react";
interface Props {
  controls: AnimationControls;
  isExpanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

function RecordList(props: Props) {
  function onScroll(e: React.UIEvent) {
    const current = e.currentTarget.scrollTop;

    if (props.isExpanded && current === 0) {
      props.controls.start({ y: 0 });
      props.setExpanded(false);
    } else if (!props.isExpanded && current > 50) {
      props.controls.start({ y: -315 });
      props.setExpanded(true);
    }
  }

  return (
    <div className="bg-primbg px-2">
      <div className="flex py-1.5">
        <div className="flex-grow font-medium">Records</div>
        <button className="flex bg-secondary text-sectext rounded-md py-0.5 px-9 shadow">
          <div className="pr-1">
            <span className="text-xl">
              <MdList />
            </span>
          </div>
          <div className="text-sm">All</div>
        </button>
      </div>
      {/* TODO: Remove placeholder records */}
      <div className="h-screen pb-52 overflow-y-auto" onScroll={onScroll}>
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

export default RecordList;
