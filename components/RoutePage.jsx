import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import ImageCard from "./ImageCard";

const RoutePage = ({ activePage, changePage, dataArray, header }) => {
  const dispatch = useDispatch();

  console.log(dataArray.length);
  return (
    <>
      <section className="wrapper w-full py-6 2xl:px-36 xl:px-24 lg:px-16 px-6">
        {dataArray.length > 0 ? (
          <>
            <div className="header-and-pagination w-full flex sm:justify-between justify-center items-center">
              <h1 className="text-2xl font-normal">{header}</h1>
              <div className="paginate-btns sm:flex hidden gap-2">
                <Button
                  onClick={() => {
                    activePage > 1 && dispatch(changePage(-1));
                  }}
                >
                  Previos
                </Button>
                <Button onClick={() => dispatch(changePage(1))}>Next</Button>
              </div>
            </div>
            <div className="results py-8 flex flex-wrap justify-center gap-5">
              {dataArray.map((elem) => {
                return <ImageCard elem={elem} />;
              })}
            </div>
          </>
        ) : (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1>Loading...</h1>
          </span>
        )}
      </section>
    </>
  );
};

export default RoutePage;

{
  /* <section className="wrapper w-full py-6 2xl:px-36 xl:px-24 lg:px-16 px-6">
  <div className="header-and-pagination w-full flex sm:justify-between justify-center items-center">
    <h1 className="text-2xl font-normal">{header}</h1>
    <div className="paginate-btns sm:flex hidden gap-2">
      <Button
        onClick={() => {
          activePage > 1 && dispatch(changePage(-1));
        }}
      >
        Previos
      </Button>
      <Button onClick={() => dispatch(changePage(1))}>Next</Button>
    </div>
  </div>
  <div className="results py-8 flex flex-wrap justify-center gap-5">
    {dataArray.length > 0 ? (
      dataArray.map((elem) => {
        return <ImageCard elem={elem} />;
      })
    ) : (
      <LoadingSkeleton cards={10} heigth={350} width={220} />
    )}
  </div>
</section>; */
}

{
  /* <div className="header-and-pagination w-full flex sm:justify-between justify-center items-center">
            <h1 className="text-2xl font-normal">{header}</h1>
            <div className="paginate-btns sm:flex hidden gap-2">
              <Button
                onClick={() => {
                  activePage > 1 && dispatch(changePage(-1));
                }}
              >
                Previos
              </Button>
              <Button onClick={() => dispatch(changePage(1))}>Next</Button>
            </div>
          </div>
          <div className="results py-8 flex flex-wrap justify-center gap-5">
            {dataArray.length > 0 ? (
              dataArray.map((elem) => {
                return <ImageCard elem={elem} />;
              })
            ) : (
              <LoadingSkeleton cards={10} heigth={350} width={220} />
            )}
          </div> */
}
