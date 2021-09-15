interface Props {
  name: string;
  value: number;
  currency: string;
  color: string;
}

function Account(props: Props) {
  const localeValue = new Intl.NumberFormat([], {
    minimumFractionDigits: 2,
  }).format(props.value);

  return (
    <div className={`px-2 py-1 rounded-md shadow ${props.color}`}>
      <div className="text-xs">{props.name}</div>
      <div className="text-xs font-medium">
        {props.currency} {localeValue}
      </div>
    </div>
  );
}

export default Account;
