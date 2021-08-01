import Mask from './img/mask.png';

import Hat from './img/hat.png';
import Glasses from './img/glasses.png';
import Tie from './img/tie.png';
import Trousers from './img/trousers.png';
import Undershirt from './img/undershirt.png'
import Jacket from './img/jacket.png';
import Footwear from './img/footwear.png';

import Ring from './img/ring.png';
import Bracelet from './img/bracelet.png';
import Earrings from './img/earrings.png';
import Neck from './img/on_the_neck.png';

import Back from './img/back.png';
import Body from './img/body.png';
import Head from './img/head.png';
import Legs from './img/legs.png';
import LeftPalm from './img/left-palm.png';
import RightPalm from './img/right-palm.png';

export const Welcome: string[] = [
    'hi',
    'hello',
    'welcome',
    'gg easy'
]

export const ShopName: string[] = [
    'Магазин масок',
    'Магазин одежды',
    'Магазин украшений',
    'Тату салон'
]

/* 0 - Магазин масок
1 - Магазин одежды
2 - Магазин украшений
3 - Тату салон */
export const SectionImages = [
    [
        {
            name: "Маски",
            image: Mask
        }
    ],
    [
        {
            name: 'Голова',
            image: Hat,
        },
        {
            name: 'Очки',
            image: Glasses,
        },
        {
            name: 'Галстук',
            image: Tie,
        },
        {
            name: 'Куртка',
            image: Jacket,
        },
        {
            name: 'Майка',
            image: Undershirt,
        },
        {
            name: 'Штаны',
            image: Trousers,
        },
        {
            name: 'Обувь',
            image: Footwear,
        }
    ],
    [
        {
            name: "Кольца",
            image: Ring
        },
        {
            name: "Браслет",
            image: Bracelet
        },
        {
            name: "Серьги",
            image: Earrings
        },
        {
            name: "Ожерелье",
            image: Neck
        },

    ],
    [
        {
            name: 'Левая рука',
            image: RightPalm,
        },
        {
            name: 'Правая рука',
            image: LeftPalm,
        },
        {
            name: 'Торс',
            image: Body,
        },
        {
            name: 'Спина',
            image: Back,
        },
        {
            name: 'Голова',
            image: Head,
        },
        {
            name: 'Ноги',
            image: Legs,
        }
    ]
]