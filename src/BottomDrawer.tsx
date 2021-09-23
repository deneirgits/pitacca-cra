import Balance from "./Balance";
import RecordList from "./RecordList";
import CSS from "csstype";
import { motion, TapInfo, useAnimation } from "framer-motion";
import { useState } from "react";

const pullIndicatorPosition: CSS.Properties = {
  left: "calc(50% - 2.5rem/2)",
};

function BottomDrawer() {
  const controls = useAnimation();
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function onTap(event: PointerEvent, info: TapInfo) {
    if (isExpanded) {
      controls.start({ y: 0 });
      setExpanded(false);
    } else {
      controls.start({ y: -315 });
      setExpanded(true);
    }
  }

  return (
    <motion.div
      className="bg-transparent flex-shrink text-primtext py-1"
      animate={controls}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <motion.div
        className="rounded-t-2xl px-2 py-1 bg-primary shadow-t-md"
        onTap={onTap}
      >
        <div className="p-0.5">
          <div
            className="rounded-full h-1 w-10 bg-primtext absolute"
            style={pullIndicatorPosition}
          ></div>
        </div>
        <Balance />
      </motion.div>
      <RecordList
        controls={controls}
        setExpanded={setExpanded}
        isExpanded={isExpanded}
      />
    </motion.div>
  );
}

export default BottomDrawer;
