// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse}
from 'next'

type Data = {
    name: string
}

export default function handler(req : NextApiRequest, res : NextApiResponse < Data >) {
    res
        .status(200)
        .json({name: 'John Doe'})
}

const desti = {
    title: 'Seattle',
    description: 'Blink and it’s changed: Seattle can be that ephemeral. Welcome to a city that he' +
            'ralds innovation and nature; a city always marching toward the future.',
    info: [
        {
            title: 'Local Flavor',
            text: `

  First time in Seattle? Make a beeline for its proverbial pantry: Pike Place Market. It was founded in 1907 to fortify locals with fresh Northwest produce, and its long-held mantra of ‘meet the producer’ still echoes enthusiastically around a city where every restaurateur worth their salt knows the name of their fishmonger and the biography of the cow that became yesterday’s burgers. It doesn’t take long to realize that you’ve arrived in a city of well-educated palates and wildly experimental chefs who are willing to fuse American cuisine with just about anything – as long as it’s local.`
        }, {
            title: 'Local Flavor',
            text: ` First time in Seattle? Make a beeline for its proverbial pantry: Pike Place Market. It was founded in 1907 to fortify locals with fresh Northwest produce, and its long-held mantra of ‘meet the producer’ still echoes enthusiastically around a city where every restaurateur worth their salt knows the name of their fishmonger and the biography of the cow that became yesterday’s burgers. It doesn’t take long to realize that you’ve arrived in a city of well-educated palates and wildly experimental chefs who are willing to fuse American cuisine with just about anything – as long as it’s local.`
        }, {
            title: 'Local Flavor',
            text: ` First time in Seattle? Make a beeline for its proverbial pantry: Pike Place Market. It was founded in 1907 to fortify locals with fresh Northwest produce, and its long-held mantra of ‘meet the producer’ still echoes enthusiastically around a city where every restaurateur worth their salt knows the name of their fishmonger and the biography of the cow that became yesterday’s burgers. It doesn’t take long to realize that you’ve arrived in a city of well-educated palates and wildly experimental chefs who are willing to fuse American cuisine with just about anything – as long as it’s local.`
        }, {
            title: 'Local Flavor',
            text: ` First time in Seattle? Make a beeline for its proverbial pantry: Pike Place Market. It was founded in 1907 to fortify locals with fresh Northwest produce, and its long-held mantra of ‘meet the producer’ still echoes enthusiastically around a city where every restaurateur worth their salt knows the name of their fishmonger and the biography of the cow that became yesterday’s burgers. It doesn’t take long to realize that you’ve arrived in a city of well-educated palates and wildly experimental chefs who are willing to fuse American cuisine with just about anything – as long as it’s local.`
        }
    ],
    images: [
        'https://res.cloudinary.com/dwcu3wcol/image/upload/v1660733920/pexels-photo-33651' +
                '2_cjo1b6.jpg',
        'https://res.cloudinary.com/dwcu3wcol/image/upload/v1660733920/pexels-photo-39644' +
                '06_kuqsme.jpg'
    ]
}