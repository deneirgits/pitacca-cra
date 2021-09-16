function Balance() {
  const localeValue = new Intl.NumberFormat([], {
    minimumFractionDigits: 2,
  }).format(18000);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row">
        <div className="flex-grow font-medium">Total Balance</div>
        <div className="text-xs self-end">vs past period</div>
      </div>
      <div className="flex flex-row text-xl">
        <div className="flex-grow ">PHP {localeValue}</div>
        <div className="text-lg">+100%</div>
      </div>
    </div>
  );
}

export default Balance;
