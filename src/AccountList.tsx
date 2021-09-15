import Account from "./Account";

function AccountList() {
  return (
    <div className="bg-primbg">
      <div className="p-2">
        <div className="font-medium py-2">Accounts</div>
        <div className="grid grid-cols-3 gap-1 md:grid-cols-4 lg:grid-cols-5">
          {/* TODO: Remove placeholder data */}
          <Account name="Cash" value={1000.0} currency="PHP" color="red" />
          <Account name="Cash" value={1000.0} currency="PHP" color="pink" />
          <Account name="Cash" value={1000.0} currency="PHP" color="purple" />
          <Account
            name="Cash"
            value={1000.0}
            currency="PHP"
            color="deep-purple"
          />
          <Account name="Cash" value={1000.0} currency="PHP" color="indigo" />
          <Account name="Cash" value={1000.0} currency="PHP" color="blue" />
          <Account
            name="Cash"
            value={1000.0}
            currency="PHP"
            color="light-blue"
          />
          <Account name="Cash" value={1000.0} currency="PHP" color="cyan" />
          <Account name="Cash" value={1000.0} currency="PHP" color="teal" />
          <Account name="Cash" value={1000.0} currency="PHP" color="green" />
          <Account
            name="Cash"
            value={1000.0}
            currency="PHP"
            color="light-green"
          />
          <Account name="Cash" value={1000.0} currency="PHP" color="lime" />
          <Account name="Cash" value={1000.0} currency="PHP" color="yellow" />
          <Account name="Cash" value={1000.0} currency="PHP" color="amber" />
          <Account name="Cash" value={1000.0} currency="PHP" color="orange" />
          <Account
            name="Cash"
            value={1000.0}
            currency="PHP"
            color="deep-orange"
          />
          <Account name="Cash" value={1000.0} currency="PHP" color="grey" />
          <Account
            name="Cash"
            value={1000.0}
            currency="PHP"
            color="blue-grey"
          />
        </div>
      </div>
    </div>
  );
}

export default AccountList;
