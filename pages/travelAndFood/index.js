import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';
// Images
const Ads = './assets/images/add.png';
const short_Ads = './assets/images/300x250.png';
const backArrowImg = './assets/images/backarrow.png';

export default function TravelAndFood({travelAndFoodData}){
   return(
    <>
    <Head>
        <title>Travel News: Latest Travel news</title>
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
                <a href="www.facebook.com">{travelAndFoodData.data.feed[0].primary_section_name}</a>
            </div>
        </div>

         {/* Heading */}
         <h1 className="tittle_text"><span>{travelAndFoodData.data.feed[0].primary_section_name}</span></h1>

         <section class="content_wrapper">
                <div class="container">
                    <div class="content_inner">
                        <div class="content_left">
            
                        {/* Fashion */}     
                        <div class="fashion_top">
                            <figure>
                            <img src={travelAndFoodData.data.feed[0].feature_image_data.url} alt="fashion_img_main" />
                            </figure>
                            <Link href={'/story/'+travelAndFoodData.data.feed[0].url.slice(travelAndFoodData.data.feed[0].url.length - 4)}><h3>{travelAndFoodData.data.feed[0].headline}</h3></Link>
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
                <figure><img src={travelAndFoodData.data.feed[1].feature_image_data.url} alt="rhs_img" /></figure>
                <p>{travelAndFoodData.data.feed[1].headline}</p>
            </div>
			</div>
            </div>
            <ul class="section_list">
            {
                travelAndFoodData.data.feed.slice(2).map((travelAndFood)=>{
                    return(
                        <li>
                        <div class="list_detail">
                            <strong>{moment(travelAndFood.updated_at).format("MMM DD, YYYY")}</strong>
                            <h3><a href={travelAndFood.url}>{travelAndFood.headline}</a></h3>
                            <p>{travelAndFood.introtext}</p>
                            <span>By <a href="/authors/bazaar-india">{travelAndFood.author_data[0].author_name}</a></span>
                        </div>
                        <figure class="list_pic">
                            <img src={travelAndFood.feature_image_data.url} alt="list_img1"/>
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
    const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/latest?section=travel-food&section_level=0content_type=all&page=1&limit=10&order_by=publish_up%20desc&app=all`)
    const travelAndFoodData = await res.json()
    return {
        props: { travelAndFoodData, },
      };
}
