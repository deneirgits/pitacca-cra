import Record from "./Record";
import { AnimationControls } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import {
    collection,
    DocumentData,
    getDocs,
    QuerySnapshot,
} from "firebase/firestore";
import { db } from "../utils/Firebase";
import { MdList } from "react-icons/md";
interface Props {
    controls: AnimationControls;
    isExpanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

function RecordList(props: Props) {
    const [records, setRecords] = useState<QuerySnapshot<DocumentData>>();

    const getRecords = useCallback(async () => {
        let recordsList = await getDocs(collection(db, "records"));
        setRecords(recordsList);
    }, []);

    useEffect(() => {
        getRecords();
    }, [getRecords]);

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
        <div className="px-2">
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
            <div className="h-screen pb-52 overflow-y-auto" onScroll={onScroll}>
                {records?.docs.map((doc) => {
                    return <Record recordDoc={doc} key={doc.id} />;
                })}
            </div>
        </div>
    );
}

export default RecordList;
