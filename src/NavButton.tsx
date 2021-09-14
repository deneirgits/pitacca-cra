interface Props {
  label: string;
  icon: JSX.Element;
}

function NavButton(props: Props): JSX.Element {
  return (
    <div className="p-2 flex-grow text-center text-primtext">
      <span className="text-2xl pb-1.5 flex justify-around">{props.icon}</span>
      <p className="text-xs font-medium">{props.label}</p>
    </div>
  );
}

export default NavButton;
