import Hslider from "./Hslider"
import LatestBlogs from "./LatestBlogs"
import LatestProducts from "./LatestProducts"

const Home = () => {
  return (<>
    <Hslider/>
    <div className='contains flex flex-col gap-y-[50px]'>  
     <LatestBlogs/>       
     <LatestProducts/>   
    </div>
    </>
  )
}

export default Home