import HeroInfo from "./HeroInfo";

const HeroInfoSection = () => {
  return (
    <HeroInfo>
      <HeroInfo.Store
        name="Lorem Ipsum - Tebet"
        openAt="08:00"
        closeAt="22:00"
      />
      <HeroInfo.TableNumber number={1} />
    </HeroInfo>
  );
};

export default HeroInfoSection;
