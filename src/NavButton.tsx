interface Props {
  label: string;
  icon: JSX.Element;
  isSelected: boolean;
}

function NavButton(props: Props): JSX.Element {
  return (
    <div className="px-2 pt-1 w-0 flex-grow text-center text-primtext">
      <div className={`${props.isSelected ? "bg-primary rounded-full" : ""}`}>
        <span className="text-2xl flex justify-around py-0.5">
          {props.icon}
        </span>
      </div>
      <p className="text-xs font-medium pt-0.5">{props.label}</p>
    </div>
  );
}

export default NavButton;
