import HeroInfo from "./HeroInfo";

const HeroInfoSection = ({ name, openAt, closeAt, tableNumber }) => {
  return (
    <HeroInfo>
      <HeroInfo.Store name={name} openAt={openAt} closeAt={closeAt} />
      <HeroInfo.TableNumber number={tableNumber} />
    </HeroInfo>
  );
};

export default HeroInfoSection;
