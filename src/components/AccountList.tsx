import {
    DocumentData,
    getDocs,
    QuerySnapshot,
    collection,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { db } from "../utils/Firebase";
import Account from "./Account";

function AccountList() {
    const [accounts, setAccounts] = useState<QuerySnapshot<DocumentData>>();

    const getAccounts = useCallback(async () => {
        let accountList = await getDocs(collection(db, "accounts"));
        setAccounts(accountList);
    }, []);

    useEffect(() => {
        getAccounts();
    }, [getAccounts]);

    return (
        <div className="px-2 py-1">
            <div className="font-medium py-1 text-primtext">Accounts</div>
            <div className="grid grid-cols-3 grid-rows-6 gap-1 md:grid-cols-4 lg:grid-cols-5">
                {accounts?.docs.map((doc) => {
                    return <Account accountDoc={doc} key={doc.id} />;
                })}
            </div>
        </div>
    );
}

export default AccountList;
