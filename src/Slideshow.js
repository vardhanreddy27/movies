import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Slideshow() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const search=()=>{
     alert('h')

    }
  return (
    <>
   
<Carousel responsive={responsive}autoPlaySpeed={4000} autoPlay={true} arrows={true} infinite={true} >
  <div className='me-1'><img src='https://filmfare.wwmindia.com/content/2020/mar/rrr11585126792.jpg'></img>
  

  
  </div> 
  <div className='me-1'><img src='https://files.prokerala.com/movies/pics/800/nannaku-prematho-movie-wallpaper-50609.jpg'></img></div>
  <div className='me-1'><img src='https://www.teahub.io/photos/full/56-567219_bahubali-new-posters-bahubali-3-release-date.jpg'></img></div>
  <div className='me-1'><img src='https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/21/Allu-Arjun-s-AlaVaikunthapurram-loo-movie-will-be-streaming-on-Sun-NXT-from-26th-Feb-2020-.jpg?quality=80&zoom=1&ssl=1'></img></div>
</Carousel>
<div className="form-outline"> 
  <input type="search" id="form1" className="form-control sss p-3 text-center d-lg-none d-sm-block
  "  placeholder="Search movie" aria-label="Search"/>  

  <div className="row ">
    <div className="col-lg-4 ">
    <div className="col m-5 shadow  mb-5  rounded tc">     
     <div className='row p-3 '><b className='text-center'>Trending movies</b><hr className='m-2'  /> </div>
<div className='row p-1 '><p>The Batman (2022)</p></div>
<div className='row p-1 '> <p>The Lost City </p></div>
<div className='row p-1 '><p>Death on the Nile</p></div>
<div className='row p-1 '><p>Spider-Man: No Way Home</p>  </div>
    </div>
    </div>
    <div className="col-lg-7 me-1">
 <div className='row'><div className='col-8 mt-5'>     <h4> Recommended playlist</h4></div><div className='col-4 mt-5 text-end'>see all</div></div>
    <Carousel responsive={responsive} arrows={false} className="list1" >
  <div className='me-1'><img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NTI0ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311733-dttlxasdtb-portrait.jpg'>
    </img></div>
  <div className='me-1'><img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzclICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00319643-xydukzdshb-portrait.jpg'></img></div>
  <div className='me-1'><img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODVrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00118049-lgtlrqcqhr-portrait.jpg'></img></div>
</Carousel>    </div>
  
  </div>
 
</div>
 </>
  )
}

export default Slideshow