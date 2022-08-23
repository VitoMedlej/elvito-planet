export const GetContentfullData = async(query : string,) => {
    try {
        // const destination = router first, grab our Contentful keys from the .env file
        const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
        const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

        // https://graphql.contentful.com/content/v1/spaces/vqg697sliq4v/environments/ma
        // s ter&?access_token=Jgc89barwNDyqR001RC1H69TVijhbc8x1dW-GWfhtKQ then, send a
        // request to Contentful (using the same URL from GraphiQL)
        const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
            method: 'POST', // GraphQL *always* uses POST requests!
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${accessToken}`, // add our access token header
            },
            // send the query we wrote in GraphiQL as a string
            body: JSON.stringify({
                // all requests start with "query: ", so we'll stringify that for convenience
                query

            })
        },);
        const {data} = await res.json()
        if (!data) 
            throw 'Error, returned undefined'
        return data

    } catch (err) {
        console.log('err: ', err);
        throw err
    }

}
