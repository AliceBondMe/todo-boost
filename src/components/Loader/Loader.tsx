import { ThreeCircles } from "react-loader-spinner";
import { LoaderStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <div>
      <LoaderStyled>
        <ThreeCircles
          visible={true}
          height="200"
          width="200"
          middleCircleColor="var(--button)"
          innerCircleColor="var(--text-main)"
          outerCircleColor="var(--button-hover)"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </LoaderStyled>
    </div>
  );
};
