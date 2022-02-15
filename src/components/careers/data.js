import React from 'react';
import { AndreiM, AndreiS, Gabriel, Manuela, Ovidiu, Virginia } from '../about/images';

const data = [
    {
        order: 6,
        photo: <AndreiS />,
        name: 'Andrei Ștefănie',
        position: 'Product Engineer',
        quote: `Being passionate about start-ups and what we can build on the cloud, Cyscale was the clear path onwards for me. I knew it will be fun, but hard and so it is. When it's fun, we laugh together, and when it's hard, we work together.`
    },
    {
        order: 5,
        photo: <Virginia />,
        name: 'Virginia Mitea',
        position: 'Sales & BD',
        quote: `Friendly atmosphere: that's the first thing that comes to my mind when someone asks me to describe how working at Cyscale is. I discovered how the other teams are working, learned from them, and applied their agile-specific methods to my role.`
    },
    {
        order: 4,
        photo: <Gabriel />,
        name: 'Gabriel Ceicoschi',
        position: 'Design & Front-end',
        quote: `I jumped into Cyscale “express” 🚂 by the time things were getting together. Two years later and I'm still here, facing new challenges and opportunities every single day. I've never thought how many things Cyscale will teach me.`
    },
    {
        order: 3,
        photo: <AndreiM />,
        name: 'Andrei Milas',
        position: 'Co-Founder & CTO',
        quote: `One of the greatest things about Cyscale is the variety of challenges we're tackling every single day. Either from the business perspective or from a technical point of view, I'm constantly learning, this leading to a great sense of accomplishment.`
    },
    {
        order: 2,
        photo: <Manuela />,
        name: 'Manuela Ticudean',
        leader: true,
        position: 'Co-Founder & PM',
        quote: `At Cyscale I have a constant opportunity to grow, professionally and personally. Moreover, I feel that my contribution matters and that we're creating something truly special.`
    },
    {
        order: 1,
        photo: <Ovidiu />,
        leader: true,
        name: 'Ovidiu Cical',
        position: 'Founder & CEO',
        quote: 'Founding Cyscale is the best decision of my life: it allows me to build the type of company that puts people first, promotes fairness and inclusion, and simultaneously, we get the chance to create something extraordinary for the cybersecurity world. All wins!'
    }
];

export default data;
