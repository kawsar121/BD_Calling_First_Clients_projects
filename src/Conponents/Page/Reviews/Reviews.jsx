// import review1 from '../../../assets/Review1.jpg'
// import review2 from '../../../assets/Review2.jpg'
import ReviewCarusol from './ReviewCarusol';

const Reviews = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className="text-center">
        <p className="text-black">3940+ Happy Users</p>
        <h1 className="text-[#C7A18A] text-xl font-bold mb-5">Don’t just take our words</h1>
      </div>
      {/* <div className='gird md:flex items-center justify-between mt-14'>
        <div className='flex items-center gap-5'>
          <div>
            <img src={review1} alt="" srcset="" className='w-52 h-48 rounded-xl' />
          </div>
          <div>
            <p>star</p>
            <p className="text-sm font-medium text-[#090914] mt-2">
              "We love Landingfolio! Our designers were <br /> using it for their
              projects, so we already <br /> knew what kind of design they want."
            </p>
            <p className="mt-6 font-thin text-[#595959]">Devon Lane</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div>
            <img src={review1} alt="" srcset="" className='w-52 h-48 rounded-xl' />
          </div>
          <div>
            <p>star</p>
            <p className="text-sm font-medium text-[#090914] mt-2">
              "We love Landingfolio! Our designers were <br /> using it for their
              projects, so we already <br /> knew what kind of design they want."
            </p>
            <p className="mt-6 font-thin text-[#595959]">Devon Lane</p>
          </div>
        </div>
      </div> */}
      <ReviewCarusol></ReviewCarusol>
    </div>
  );
};

export default Reviews;
