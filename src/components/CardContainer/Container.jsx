import Card from "./Card";

const Container = (props) => {
  const { handleChange, getCardList } = props;

  return (
    <>
      <div className="container">
        <Card handleChange={handleChange} getCardList={getCardList} />
      </div>
    </>
  );
};

export default Container;
