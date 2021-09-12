interface Props {
  label: string;
}

function NavButton(props: Props): JSX.Element {
  return (
    <div className="p-3 font-semibold border-white border-b-0 text-gray-400">
      {props.label}
    </div>
  );
}

export default NavButton;
