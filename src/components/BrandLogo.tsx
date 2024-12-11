import { Button } from "flowbite-react";
import { URIPaths } from "../util/URIPaths";

type BrandLogoProps = {
  type: "long" | "short";
  color: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
};

const LongBrandLogo: React.FC<{
  color: BrandLogoProps["color"];
  size: BrandLogoProps["size"];
}> = ({ color, size }) => {
  return (
    <>
      {color === "dark" ? (
        <Button
          href={URIPaths.Home}
          size={size || "xs"}
          className="font-extrabold bg-peace enabled:hover:bg-shade rounded-lg px-2 w-fit"
        >
          <span className="text-2xl text-dominance">talento</span>
          <span className="text-2xl text-success">.</span>
        </Button>
      ) : (
        <Button
          href={URIPaths.Home}
          size={size || "xs"}
          className="font-extrabold bg-dominance enabled:hover:bg-shade rounded-lg px-2 w-fit"
        >
          <span className="text-2xl text-shade">talento</span>
          <span className="text-2xl text-success">.</span>
        </Button>
      )}
    </>
  );
};
const ShortBrandLogo: React.FC<{
  color: BrandLogoProps["color"];
  size: BrandLogoProps["size"];
}> = ({ color, size }) => {
  return (
    <>
      {color === "dark" ? (
        <Button
          size={size || "xs"}
          href={URIPaths.Home}
          pill
          className="font-extrabold bg-white hover:bg-shade enabled:hover:bg-shade group px-1.5 w-fit"
        >
          <span className="text-3xl text-dominance">t</span>
          <span className="text-3xl text-success">.</span>
        </Button>
      ) : (
        <Button
          size={size || "xs"}
          href={URIPaths.Home}
          pill
          className="font-extrabold bg-dominance hover:bg-shade enabled:hover:bg-shade group px-1.5 w-fit"
        >
          <span className="text-3xl text-shade group-hover:text-dominance">
            t
          </span>
          <span className="text-3xl text-success">.</span>
        </Button>
      )}
    </>
  );
};

const BrandLogo: React.FC<BrandLogoProps> = ({ type, color, size }) => {
  return (
    <div>
      {type === "long" && <LongBrandLogo color={color} size={size} />}
      {type === "short" && <ShortBrandLogo color={color} size={size} />}
    </div>
  );
};

export default BrandLogo;
