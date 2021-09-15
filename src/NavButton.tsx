interface Props {
  label: string;
  icon: JSX.Element;
  isSelected: boolean;
}

function NavButton(props: Props): JSX.Element {
  return (
    <div className="p-2 w-0 flex-grow text-center text-primtext">
      <div
        className={`${props.isSelected ? "bg-primselected rounded-full" : ""}`}
      >
        <span className="text-2xl flex justify-around py-0.5">
          {props.icon}
        </span>
      </div>
      <p className="text-xs font-medium pt-1.5">{props.label}</p>
    </div>
  );
}

export default NavButton;
