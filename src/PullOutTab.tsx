import Balance from "./Balance";
import RecordList from "./RecordList";

function PullOutTab() {
  return (
    <div className="bg-primbg flex-shrink text-primtext">
      <div className="rounded-t-2xl p-2 bg-primary shadow-t-md">
        <div className="text-center text-xs">————</div>
        <Balance />
      </div>
      <RecordList />
    </div>
  );
}

export default PullOutTab;
