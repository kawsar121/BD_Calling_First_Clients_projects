import cleanserImg from "../../../assets/cleansers.jpg";
import mask from "../../../assets/Mask.jpg";
import moustarize from "../../../assets/Moustarize.jpg";
import serums from "../../../assets/serums.jpg";

const CategoryBanner = () => {
  return (
    <div className="bg-[#EBCAD04D] mt-10 ">
      <div className="max-w-7xl p-12  mx-auto ">
        <h1 className="text-black text-base font-medium text-center lg:text-left">Shop by Category</h1>
        <div className="grid md:grid-cols-4 justify-center gap-8 md:gap-24">
          <div>
            <div className="relative top-20 flex justify-center">
              <h2 className="text-xl">Cleansers</h2>
            </div>
            <div>
              <img src={cleanserImg} alt="" srcset="" className="w-56 static" />
            </div>
          </div>
          <div>
            <div className="relative top-24 flex justify-center">
              <h2 className="text-xl">Serum</h2>
            </div>
            <div>
              <img src={serums} alt="" srcset="" className="w-56 static" />
            </div>
          </div>
          <div>
            <div className="relative top-24 flex justify-center">
              <h2 className="text-xl">Moisturizers</h2>
            </div>
            <div>
              <img src={moustarize} alt="" srcset="" className="w-56 static" />
            </div>
          </div>
          <div>
            <div className="relative top-24 flex justify-center">
              <h2 className="text-xl">Masks</h2>
            </div>
            <div>
              <img src={mask} alt="" srcset="" className="w-56 static" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
