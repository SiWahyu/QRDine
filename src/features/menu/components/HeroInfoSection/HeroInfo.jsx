const HeroInfo = ({ children }) => {
  return <div className="bg-neutral-100">{children}</div>;
};

const Store = ({
  name = "Lorem Ipsum - Tebet",
  openAt = "08:00",
  closeAt = "22:00",
}) => {
  return (
    <div className="px-3 py-2.5 bg-white rounded-lg space-y-2 border border-neutral-200">
      <div className="font-medium text-lg">{name}</div>
      <div className="text-sm text-neutral-500">
        Open {openAt} - {closeAt}
      </div>
    </div>
  );
};

const TableNumber = ({ number = 1 }) => {
  return (
    <div className="px-3 py-2 bg-blue-600/90 text-white rounded-lg space-y-2 border border-neutral-200 mt-4">
      <div className="font-medium text-center">Table Number: {number}</div>
    </div>
  );
};

HeroInfo.Store = Store;
HeroInfo.TableNumber = TableNumber;

export default HeroInfo;
