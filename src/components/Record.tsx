import {
    DocumentData,
    getDoc,
    QueryDocumentSnapshot,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import Icons from "../utils/Icons";

interface Props {
    recordDoc: QueryDocumentSnapshot;
}

function Record(props: Props) {
    const record = props.recordDoc.data();
    const [account, setAccount] = useState<DocumentData>();
    const [category, setCategory] = useState<DocumentData>();
    const dateFormat = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const getReferences = useCallback(async () => {
        const accountSnap = await getDoc<DocumentData>(record.account);
        const categorySnap = await getDoc<DocumentData>(record.category);

        if (accountSnap.exists()) {
            setAccount(accountSnap.data());
        }
        if (categorySnap.exists()) {
            setCategory(categorySnap.data());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getReferences();
    }, [getReferences]);

    const localeValue = new Intl.NumberFormat([], {
        minimumFractionDigits: 2,
    }).format(record.value);

    const CategoryIcon = Icons[category?.icon];

    if (record && account && category && CategoryIcon) {
        return (
            <button className="w-full">
                <span className="flex py-1.5 text-sm h-17">
                    <div className="pr-3 text-lg">
                        <div
                            className="rounded-full p-3 text-white"
                            style={{ backgroundColor: category?.color }}
                        >
                            <span>
                                <CategoryIcon />
                            </span>
                        </div>
                    </div>
                    <div className="flex text-left flex-col flex-grow">
                        <div className="font-medium">{category?.name}</div>
                        <div>{account?.name}</div>
                        <div className="font-italic text-xs">{`${
                            record.description ? `"${record.description}"` : " "
                        }`}</div>
                    </div>
                    <div className="flex flex-col text-right">
                        <div
                            className={`font-medium ${
                                Math.sign(record.value) === 1
                                    ? "text-rec-inc"
                                    : "text-rec-dec"
                            }`}
                        >
                            {account?.currency} {localeValue}
                        </div>
                        <div className="text-xs">
                            {dateFormat.format(record.date.toDate())}
                        </div>
                    </div>
                </span>
            </button>
        );
    } else {
        return <></>;
    }
}

export default Record;
