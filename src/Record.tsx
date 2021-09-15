interface Props {
  categoryIcon: JSX.Element;
  categoryColor: string;
  categoryName: string;
  account: string;
  description: string;
  currency: string;
  value: number;
  date: Date;
}

function Record(props: Props) {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const localeValue = new Intl.NumberFormat([], {
    minimumFractionDigits: 2,
  }).format(props.value);

  return (
    <div className="flex p-2 text-sm">
      <div className="pr-3 py-1 text-lg self-center">
        <div className={`${props.categoryColor} rounded-full p-3 text-white`}>
          <span>{props.categoryIcon}</span>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="font-medium">{props.categoryName}</div>
        <div>{props.account}</div>
        <div className="font-italic text-xs">{`${
          props.description ? `"${props.description}"` : ""
        }`}</div>
      </div>
      <div className="flex flex-col text-right">
        <div
          className={`font-medium ${
            Math.sign(props.value) === 1 ? "text-rec-inc" : "text-rec-dec"
          }`}
        >
          {props.currency} {localeValue}
        </div>
        <div className="text-xs">{dateFormat.format(props.date)}</div>
      </div>
    </div>
  );
}

export default Record;
