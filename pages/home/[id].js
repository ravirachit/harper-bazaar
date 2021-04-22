import React from 'react';

// function getPostDataById(id){
//     for(let i=0;i<posts.length;i++){
//         if(posts[i].id === parseInt(id)){
//             return posts[i];
//         }
//     }
// }

export default function Post({postData}){
    // const postData = getPostDataById(id);
    return(
        <div>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
        </div>
    )
}

// Post.getInitialProps = async ({query})=>{
//     const {id} = query;
//     return {id};
// }


export async function getServerSideProps({query}){
    const {id} = query;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const postData = await res.json()

    return {
        props: { postData, },
      };
}