const HeroInfo = ({ children }) => {
  return <div className="bg-customer-background">{children}</div>;
};

const Store = ({
  name = "Lorem Ipsum - Tebet",
  openAt = "08:00",
  closeAt = "22:00",
}) => {
  return (
    <div className="px-3 py-2.5  rounded-lg space-y-2 border-l-4 border-l-customer-primary border border-neutral-200 ">
      <div className="text-lg font-medium">{name}</div>
      <div className="text-sm ">
        Open {openAt} - {closeAt}
      </div>
    </div>
  );
};

const TableNumber = ({ number = 1 }) => {
  return (
    <div className="px-3 py-2 mt-4 space-y-2 border border-blue-200 rounded-lg text-customer-primary bg-customer-secondary">
      <div className="font-medium text-center">Table Number: {number}</div>
    </div>
  );
};

HeroInfo.Store = Store;
HeroInfo.TableNumber = TableNumber;

export default HeroInfo;
