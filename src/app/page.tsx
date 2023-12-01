import Image from 'next/image'
import Link from "next/link"
export default function Home() {
  return (
    <div className="bg-background bg-white max-w-[428px]  mx-auto">
      {/* logo vs cart  */}
      <div className="flex items-center justify-between w-full h-full p-3 py-7 ">
        <a href="https://fastcare.dansolutions.vn/">
          <img className="w-13 h-auto " src="/logo.webp" alt="logo" />
        </a>
        <a href="/" className="relative">
          <div className="absolute flex w-6 h-5 text-sm font-bold items-center justify-center  text-center text-white bg-[#ED3A45] rounded-full left-2 bottom-3">
            {" "}
            5
          </div>
          <img
            className="max-w-100 h-auto  "
            src="/shopping-cart-icon.webp"
            alt="logo"
          />
        </a>
      </div>
      {/* search bar */}
      <div className='w-auto flex items-center border rounded-md border-slate-200  outline-5 focus-within:ring-1 ring-black ring-offset-2 h-10 mx-2'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mx-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder={"Nhập từ khoá tìm kiếm"}
          className="search-icon w-full mr-2 border-0 outline-0 "
        ></input>
      </div>
      {/* banner, not have slideshow yet*/}
      <div className='m-4 '>
        <a href="/">
          <img className='h-[224px] rounded-lg' src="/banner-mainslide-fastcare-sua-dien-thoai-khong-lo-ve-gia-1280x542.webp" alt="" />
        </a>
      </div>
        {/* service card */}
      <div className='grid grid-rows-3 grid-flow-col gap-4 justify-center py-4'>
       <a className='service-card' href="">
        <p className='service-card-text'>Sửa chữa điện thoại</p>
        <img className='service-card-img' src="/phone.webp" alt="" />
       </a>
       <a className='service-card' href="">
        <p className='service-card-text'>Sửa máy tính bảng </p>
        <img className='service-card-img' src="/tablet.webp" alt="" />
       </a>
       <a className='service-card' href="">
        <p className='service-card-text'>phụ kiện chính hãng</p>
        <img className='service-card-img' src="/air-pods.webp" alt="" />
       </a>
       <a className='service-card' href="">
        <p className='service-card-text'>Sửa chữa laptop</p>
        <img className='service-card-img' src="/laptop.webp" alt="" />
       </a>
       <a className='service-card' href="">
        <p className='service-card-text'>Sửa apple watch</p>
        <img className='service-card-img' src="/apple-watch.webp" alt="" />
       </a>
       <a className='service-card' href="">
        <p className='service-card-text'>Blog thủ thuật</p>
        <img className='service-card-img' src="/book.webp" alt="" />
       </a>
      
      </div>
      {/* special deal */}
      <div className='w-full h-[328px] py-8 p-4 bg-slate-500' >
        <div className='flex '>
          <p className='text-lg justify-center text-center'>Giá tốt hôm nay</p>
          <div className='flex '>
              <div className='w-10 h-10 rounded-md flex justify-center items-center  border-2 top-3 mx-1 '>
                <p className='text-center'>24</p>
              </div>
              
              <div className='w-10 h-10 rounded-md flex justify-center items-center  border-2 top-3 mx-1 '>
                <p className='text-center'>24</p>
              </div>
              
              <div className='w-10 h-10 rounded-md flex justify-center items-center  border-2 top-3 mx-1 '>
                <p className='text-center'>24</p>
              </div>
              
          </div>
        </div>
      </div>
    </div>

  );
// làm slideshow https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
//  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// function Slideshow() {
//   return (
//     <div className="slideshow">
//       <div className="slideshowSlider">
//         {colors.map((backgroundColor, index) => (
//           <div className="slide" key={index} style={{ backgroundColor }}/>
//         ))}
//       </div>
//     </div>
//   );
  
// }
}
