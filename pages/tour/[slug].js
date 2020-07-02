import React from 'react';

export default (props) => {
    const { query, pathname, asPath } = props.url
    return (
        <h1>this is a tour</h1>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {slug: 'a'}},
            {params: {slug: 'b'}}
        ],
        fallback: false
    }
}

// export async function getStaticProps({ params }) {
//     console.log(params)
// }