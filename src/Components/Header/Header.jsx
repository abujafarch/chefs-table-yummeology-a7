import './header.css'
import { CiSearch} from "react-icons/ci"
import { CgProfile } from "react-icons/cg";
import { TfiMenu } from "react-icons/tfi";
const Header = () => {
    return (
        <div className="font-lexend">
            <div className="flex py-3 sm:py-9 items-center justify-between">
                <h1 className="font-bold text-[32px] text-[#150B2B] logo cursor-pointer">Yummeology</h1>
                <div className="sm:flex hidden gap-6 text-[#150B2BB3] font-medium items-center">
                    <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">About</a>
                    <a href="#">Search</a>
                </div>
                <div className='lg:flex items-center justify-center gap-5 hidden'>
                    <div className="bg-[#150B2B0D] rounded-3xl px-5 py-3 flex items-center justify-between gap-2">
                        <p className='text-xl font-bold'><CiSearch></CiSearch></p>
                        <input type="text" className="bg-transparent outline-none" placeholder="Search"/>
                    </div>
                    <button className='text-2xl p-2 bg-[#0BE58A] rounded-full text-[#150B2B]'><CgProfile></CgProfile></button>
                </div>
                <div className=' lg:hidden flex items-center'>
                    <button className='text-2xl'><TfiMenu></TfiMenu></button>
                </div>
            </div>
            <div className='banner px-6 md:px-8'>
                <div className='flex sm:gap-8 gap-5 justify-center items-center text-center text-white flex-col h-full'>
                    <h1 className='max-w-[930px] text-[28px] sm:text-[44px] md:text-[52px] font-bold'>Discover Yummeology and find your favorite Test & Enjoy</h1>
                    <p className='max-w-[930px] text-sm sm:text-lg font-normal'>There are millions of recipe that will give a different level test every single recipe. So find your favorite recipe from Yoummeology and enjoy test like Utopia Empire's Foods. This website for who like food and continue diet.</p>
                    <div className='flex sm:gap-8 sm:flex-row flex-col gap-4'>
                        <button className='bg-[#0BE58A] text-[#150B2B] sm:py-5 py-2 px-3 sm:px-8 rounded-[50px] font-semibold text-base sm:text-xl'>Explore Now</button> 
                        <button className='sm:py-[17px] py-[6px] border-[2px] sm:px-8 px-3 rounded-[50px] font-semibold text-base sm:text-xl'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;