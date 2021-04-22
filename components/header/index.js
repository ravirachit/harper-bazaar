import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

// Images
const logo = '../assets/images/logo.png';
const strickyLogo = '../assets/images/stricylogo.png';
const fb_img = '../assets/images/facebook.png';
const instra_img = '../assets/images/instrgram.png';
const twitter_img = '../assets/images/twitter.png';
const serach_img = '../assets/images/search.png';
const cross_img = '../assets/images/cross.png';
const input_search_img = '../assets/images/inputsearchicon.png';

export default function Header(){
    const [isActive, setBoolean] = useState(null);
    const [isSearch, setSearch] = useState(false);

     // Search Value State
     const [searchData, setSearchData] = useState(null);
     const [searchRes, setSearchRes] = useState(null);

    const onScroll = ()=> {
        const headerOffset = document.getElementById('fixedNav').getBoundingClientRect().top;
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > headerOffset) {
            setBoolean(true);
        }else{
            setBoolean(false); 
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);
      }, []);


    //  Search input function
   function getData(val){
    setSearchData(val.target.value);
   }
   function GetSearchInputData(){
    localStorage.removeItem('search_res');
    history.push(`/search/${searchData}`);
    getSearchData();
    localStorage.setItem('search_res',JSON.stringify(searchRes));
    setSearch(false);
   }
const router = useRouter();
    return (
        <>
            <header id="header">
                <div className="upperheader">
                    <div className="container relative" >
                        <a href="www.facebook.com">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="follow_us">
                            <label>
                                Follow us on:
                         </label>
                            <a href="www.facebook.com">
                                <img src={fb_img} alt="social_image" />
                            </a>
                            <a href="www.facebook.com">
                                <img src={instra_img} alt="social_image" />
                            </a>
                            <a href="www.facebook.com">
                                <img src={twitter_img} alt="social_image" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="fixedNav" className={isActive ? 'fixed' : 'bottomheader'}>
                    <div className="container relative flex_wrap">
                    <a href="www.facebook.com" className="strickylogo">
                        <img src={strickyLogo} alt="stickyLogo" />
                    </a>
                    <nav className="menu">
                        <Link href="/home"><a className={router.pathname === "/home" ? "activeNavMenu" : ""}>Home</a></Link>
                        <Link href="/fashion" ><a className={router.pathname === "/fashion" ? "activeNavMenu" : ""}>FASHION</a></Link>
                        <Link href="/beauty"><a className={router.pathname === "/beauty" ? "activeNavMenu" : ""}>BEAUTY</a></Link>
                        <Link href="/culture"><a className={router.pathname === "/culture" ? "activeNavMenu" : ""}>CULTURE</a></Link>
                        <Link href="/celebrity"><a className={router.pathname === "/celebrity" ? "activeNavMenu" : ""}>CELEBRITY</a></Link>
                        <Link href="/travelAndFood"><a className={router.pathname === "/travelAndFood" ? "activeNavMenu" : ""}>TRAVEL AND FOOD</a></Link>
                    </nav>

                    <span className="searchicon" onClick={()=>setSearch(true)}>
                        <img className="searchImg" src={serach_img} alt="search"/>
                    </span>
                    </div>
                </div>
            </header>

             {/* Search bar */}
             {
            isSearch?<div className="overlay">
            <div className="container">
                <div className="search_box">
                    <div className="search_text">
                        <label>Search Here</label>
                        <span className="cross" onClick={()=>
                            setSearch(false)}>
                            <img src={cross_img} alt="crossIcon" />
                        </span>
                    </div>
                    <div className="inputwrapper relative">
                        <input type="text" placeholder="Type your keyword(s) here..." onChange={getData} />
                        <span className="search_input" >
                            <img src={input_search_img} alt="search" onClick={GetSearchInputData}/>
                        </span>
                    </div>
                    </div>
                    </div>
                    </div>:null
}
           
        </>
    )
}