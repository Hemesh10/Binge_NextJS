import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({cards, heigth, width}) => {
  return (
    Array(cards).fill(0).map((elem, index) => {
        return (
          <div key={index}>
            <Skeleton
              width={width}
              height={heigth}
              style={{ display: "flex", flexDirection: "column", borderRadius: "10px" }}
            />
          </div>
        );
    })
  );
};

export default LoadingSkeleton;
