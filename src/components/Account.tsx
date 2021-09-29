import { QueryDocumentSnapshot } from "firebase/firestore";

interface Props {
    accountDoc: QueryDocumentSnapshot;
}

function Account(props: Props) {
    const account = props.accountDoc.data();
    const localeValue = new Intl.NumberFormat([], {
        minimumFractionDigits: 2,
    }).format(account.balance);

    return (
        <button
            className="text-left px-2 py-1 rounded-md shadow"
            style={{ backgroundColor: account.color }}
        >
            <div className="text-xs">{account.name}</div>
            <div className="text-xs font-medium">
                {account.currency} {localeValue}
            </div>
        </button>
    );
}

export default Account;
