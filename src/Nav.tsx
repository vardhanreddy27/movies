import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectName, selectEmail, logout, resdata } from './features/counter/counterSlice';
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
function Nav() { 
    const [value, setValue] = useState("");

  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const dispatch = useAppDispatch(); 

      const Sform =async()=>{
    dispatch(logout())
    window.location.replace('/Login')

   }; 

   const   [title, setTitle] = useState('');
   const   [year, setYear] = useState('');
   const   [released, setReleased] = useState('');
   const   [poster, setPoster] = useState('');
const url='https://www.omdbapi.com/?t='+value+'&apikey=27028cfd'
   async function fetchData() 
   {  

   const result = await axios.get(url);
   var my=result.data.Title;
   var my1=result.data.Year;
   var my2=result.data.Released	;
   var my3=result.data.Poster;
   var myJSON = JSON.stringify(my);
   var myJSON1 = JSON.stringify(my1);
   var myJSON2= JSON.stringify(my2);
   var myJSON3 = JSON.stringify(my3);
   var h=myJSON3.replace(/['"]+/g, '')
   setTitle(myJSON)
   setYear(myJSON1)
   setReleased(myJSON2)
   setPoster(h)

  }      

  return (
    <>
    <nav className="navbar navbar-expand-lg colo mb-2"><script>
      
    </script>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">MOVIES</a>
      <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon ico">≡</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Music</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li><div className="form-outline">	<form name="login" className="form">
  <input type="search" id="form1" className="form-control s d-none   d-lg-block
  "  placeholder="Search movie"value={value} onChange={e => setValue(e.target.value)}  aria-label="Search" /><div className="input-group-append">
  <button className="btn btn-outline-secondary" 
   value='sh' onClick={fetchData} type="button">search </button>
</div></form>
</div>
        </ul>
        <span className="navbar-text pe-2 m-1">
{name}        </span> 
<span className="navbar-text  m-1 ">
<button type="button" onClick={Sform} className="btn btn-danger sd btn-sm">Logout</button>
<button type="submit"></button>

        </span>
      </div>
    </div>
  </nav>
  
  <Carousel responsive={responsive}autoPlaySpeed={4000} autoPlay={true} arrows={true} infinite={true} >
  <div className='me-1'><img src='https://filmfare.wwmindia.com/content/2020/mar/rrr11585126792.jpg'></img>
  

  
  </div> 
  <div className='me-1'><img src='https://files.prokerala.com/movies/pics/800/nannaku-prematho-movie-wallpaper-50609.jpg'></img></div>
  <div className='me-1'><img src='https://www.teahub.io/photos/full/56-567219_bahubali-new-posters-bahubali-3-release-date.jpg'></img></div>
  <div className='me-1'><img src='https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/21/Allu-Arjun-s-AlaVaikunthapurram-loo-movie-will-be-streaming-on-Sun-NXT-from-26th-Feb-2020-.jpg?quality=80&zoom=1&ssl=1'></img></div>
</Carousel>
<div className="form-outline"> 
  <input type="search" id="form1" className="form-control sss p-3 text-center d-lg-none d-sm-block
  "  placeholder="Search movie" aria-label="Search"/> <div className="row text-center pt-3"> <h1>search results</h1>
    <div className="row pt-1">
      <div className='col-1'></div>
    <div className="col-lg-9 "><table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Released</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{title}</td>
      <td>{year}</td>
      <td>{released}</td>
      <td><img src={poster} height='10px' alt="image"/></td>

    </tr>
    
  
  </tbody>
</table></div></div></div>

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
export default Nav