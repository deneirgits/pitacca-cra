import Balance from "./Balance";
import RecordList from "./RecordList";
import CSS from "csstype";

const pullIndicatorPosition: CSS.Properties = {
  left: "calc(50% - 2.5rem/2)",
};

function BottomDrawer() {
  return (
    <div className="bg-primbg flex-shrink text-primtext py-1">
      <div className="rounded-t-2xl px-2 py-1 bg-primary shadow-t-md">
        <div className="p-0.5">
          <div
            className="rounded-full h-1 w-10 bg-primtext absolute"
            style={pullIndicatorPosition}
          ></div>
        </div>
        <Balance />
      </div>
      <RecordList />
    </div>
  );
}

export default BottomDrawer;
