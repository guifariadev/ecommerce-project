import { Link } from "react-router-dom"

const BannerCollection = () => {
  return (
      <Link to={"/men"} 
      className='h-[400px] sm:h-[600px] bg-fixed bg-center bg-cover cursor-pointer mt-10'
      style={{ backgroundImage: "url('../../../images/bannerallprod.jpg')" }}
      
      >
        {/* overlay */}
        <div className='flex items-center justify-center h-full bg-black/50'></div>
      </Link>
  )
}

export default BannerCollection