import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';
// Images
const Ads = './assets/images/add.png';
const short_Ads = './assets/images/300x250.png';
const backArrowImg = './assets/images/backarrow.png';

export default function Celebrity({celebrityData}){
   return(
    <>
    <Head>
        <title>Celebrity News: Latest Celebrity</title>
    </Head>
    {/* ads section */}
    <div className="add_wrapper">
            <img src={Ads} alt="ad" />
    </div>

    {/* Navigation */}
    <div class="nevigation_section">
            <div class="container">
                <a href="www.facebook.com" class="active">Home  </a>
                <span> <img src={backArrowImg} alt="back" /></span>
                <a href="www.facebook.com">{celebrityData.data.feed[0].primary_section_name}</a>
            </div>
        </div>

         {/* Heading */}
         <h1 className="tittle_text"><span>{celebrityData.data.feed[0].primary_section_name}</span></h1>

         <section class="content_wrapper">
                <div class="container">
                    <div class="content_inner">
                        <div class="content_left">
            
                        {/* celebrity */}     
                        <div class="fashion_top">
                            <figure>
                            <img src={celebrityData.data.feed[0].feature_image_data.url} alt="celebrity_img_main" />
                            </figure>
                            <h3>{celebrityData.data.feed[0].headline}</h3>
                        </div> 
                        </div>	                                  	
            <div class="content_right">
                {/* Small ADS */}
            <figure class="add_box">
                 <img src={short_Ads} alt="short-ads-img" />
            </figure>

            {/* rhs story */}
            <h4>Must Read</h4>
            <div class="right_card">
                <figure><img src={celebrityData.data.feed[1].feature_image_data.url} alt="rhs_img" /></figure>
                <p>{celebrityData.data.feed[1].headline}</p>
            </div>
			</div>
            </div>
            <ul class="section_list">
            {
                celebrityData.data.feed.slice(2).map((celebrity)=>{
                    return(
                        <li>
                        <div class="list_detail">
                            <strong>{moment(celebrity.updated_at).format("MMM DD, YYYY")}</strong>
                            <h3><a href={celebrity.url}>{celebrity.headline}</a></h3>
                            <p>{celebrity.introtext}</p>
                            <span>By <a href="/authors/bazaar-india">{celebrity.author_data[0].author_name}</a></span>
                        </div>
                        <figure class="list_pic">
                            <img src={celebrity.feature_image_data.url} alt="list_img1"/>
                        </figure>
                    </li> 
                    )
                })
            }

				 </ul>
            </div>
		</section>
        </>
   )
}

export async function getStaticProps(){
    const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=celebrity&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
    const celebrityData = await res.json()
    return {
        props: { celebrityData, },
      };
}
