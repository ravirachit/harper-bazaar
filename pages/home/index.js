import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Images
// const banner_img = './assets/images/banner.png';
const add_img = './assets/images/add.png';
const FashionAdd = './assets/images/fashionadd.png';
const cultureAdImg = './assets/images/300x250.png';

export default function Home({homeData}){
    console.log("homeData- ", homeData);
    return(
       <>
        <Head>
        <title>Lifestyle News: Latest Lifestyle</title>
      </Head>
            {/* Add Section */}
         <div className="add_wrapper">
                    <img src={add_img} alt="add" />
        </div>
           
             {/* Slider */}
           <section className="banner">
              <div className="container">
                   <figure>
                        <img src={homeData.data.feed.templatedata[0].content_data.widget_data.widget_data.main_data[0].feature_image_data.url} alt="banner"/>
                   </figure>
                   <h2>{homeData.data.feed.templatedata[0].content_data.widget_data.widget_data.main_data[0].headline}</h2>
              </div>
        </section>


        {/* Fashion Section */}
<section className="fashion">
            <h1 className="tittle_text"><span>{homeData.data.feed.templatedata[2].content_data.title}</span></h1>
                <div className="container">
                    <div className="fashion_wrap">
                        <div className="fashion_cell">
                            <figure>
                                <img src={homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[0].feature_image_data.url} alt="fashion1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[0].headline}
                            </p>
                        </div>
                        <div className="fashion_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[1].feature_image_data.url} alt="fashion1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[1].headline}
                            </p>
                        </div>
                        <div className="fashion_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[2].feature_image_data.url} alt="fashion1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[2].headline}
                            </p>
                        </div>
                        <div className="fashion_cell">
                            <figure className="add_fashion">
                                <img src={FashionAdd} alt="fashionadd" />
                            </figure>
                            <figure>
                                <img src={homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[3].feature_image_data.url} alt="fashion1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[2].content_data.widget_data.widget_data.main_data[3].headline}
                            </p>
                        </div>
                    </div>
                </div>
            </section> 
            {/* end */}

             {/* Beauty Section */}
             <section className="travel_food">
            <h1 className="tittle_text"><span>{homeData.data.feed.templatedata[3].content_data.title}</span></h1>
                <div className="container">
                    <div className="travel_inner">
                        <div className="travel_left">
                        <figure>
                                <img src={homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[0].feature_image_data.url} alt="Beauty" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[0].headline}
                            </p>
                        </div>
                        <div className="travel_right">
                            <ul className="travel_list">
                                <li>
                                <figure>
                                <img src={homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[1].feature_image_data.url} alt="Beauty1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[1].headline}
                            </p>
                                </li>
                                <li>
                                <figure>
                                <img src={homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[2].feature_image_data.url} alt="Beauty2" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[2].headline}
                            </p>
                                </li>
                                <li>
                                <figure>
                                <img src={homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[3].feature_image_data.url} alt="Beauty3" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[3].content_data.widget_data.widget_data.main_data[3].headline}
                            </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}

             {/* Culture Section */}
             <section className="culture">
            <h1 className="tittle_text"><span>{homeData.data.feed.templatedata[4].content_data.title}</span></h1>
                <div className="container">
                    <div className="culture_top_sec">
                        <div className="culture_top_left">
                            <div className="culture_img">
                            <img src={homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[0].feature_image_data.url} alt="culture" />
                            </div>
                            <div className="culture_text">
                                <p>{homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[0].headline}</p>
                            </div>
                        </div>
                        <div className="add_sec">
                            <img src={cultureAdImg} alt="cultureAd" />
                        </div>
                    </div>
                    <div className="culture_list">
                        <div className="culture_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[1].feature_image_data.url} alt="culture1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[1].headline}
                            </p>
                        </div>
                        <div className="culture_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[2].feature_image_data.url} alt="culture2" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[2].headline}
                            </p>
                        </div>
                        <div className="culture_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[3].feature_image_data.url} alt="culture3" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[4].content_data.widget_data.widget_data.main_data[3].headline}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}

            {/* Celebrity Section */}
            <section className="fashion Celebrity">
            <h1 className="tittle_text"><span>{homeData.data.feed.templatedata[5].content_data.title}</span></h1>
                <div className="container">
                    <div className="fashion_wrap">
                        <div className="fashion_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[0].feature_image_data.url} alt="celebrity1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[0].headline}
                            </p>
                        </div>
                        <div className="fashion_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[1].feature_image_data.url} alt="celebrity2" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[1].headline}
                            </p>
                        </div>
                        <div className="fashion_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[2].feature_image_data.url} alt="celebrity3" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[2].headline}
                            </p>
                        </div>
                        <div className="fashion_cell">
                        <figure>
                                <img src={homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[3].feature_image_data.url} alt="celebrity4" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[5].content_data.widget_data.widget_data.main_data[3].headline}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}

          {/* Travel & Food Section */}
          <section className="travel_food">
            <h1 className="tittle_text"><span>{homeData.data.feed.templatedata[6].content_data.title}</span></h1>
                <div className="container">
                    <div className="travel_inner">
                        <div className="travel_left">
                        <figure>
                                <img src={homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[0].feature_image_data.url} alt="travelAndFood1" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[0].headline}
                            </p>
                        </div>
                        <div className="travel_right">
                            <ul className="travel_list">
                                <li>
                                <figure>
                                <img src={homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[1].feature_image_data.url} alt="travelAndFood2" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[1].headline}
                            </p>
                                </li>
                                <li>
                                <figure>
                                <img src={homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[2].feature_image_data.url} alt="travelAndFood3" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[2].headline}
                            </p>
                                </li>
                                <li>
                                <figure>
                                <img src={homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[3].feature_image_data.url} alt="travelAndFood4" />
                            </figure>
                            <p>
                                {homeData.data.feed.templatedata[6].content_data.widget_data.widget_data.main_data[3].headline}
                            </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            </>
    )
}

export async function getStaticProps(){
    const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home`)
    const homeData = await res.json()
    return {
        props: { homeData, },
      };
}

// export async function getServerSideProps(){
//     const res = await fetch(`http://alpha-cms-chub-harperbazar.simpleapi.itgd.in/feeds/v3c/template?name=home`)
//     const homeData = await res.json()
//     return {
//         props: { homeData, },
//       };
// }