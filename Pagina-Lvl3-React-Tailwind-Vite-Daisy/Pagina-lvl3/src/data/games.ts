import potionImg from '../../src/assets/images/potion permite.jfif';
import portiaImg from '../../src/assets/images/mi time in portia.avif';
import bearImg from '../../src/assets/images/Bear and breckfast.jpg';
import oubletsImg from '../../src/assets/images/obblets.jpg';

export interface GameCard {
    id: number;
    title: string;
    image: string;
    date: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    saleEnds?: string;
    FreeDemo?: string;
}

export const games: GameCard[] = [
    {
        id: 1,
        title: 'Potion Permit',
        image: potionImg,
        date: '9/22/22',
        price: 19.99,
    },
    {
        id: 2,
        title: 'My Time at Portia',
        image: portiaImg,
        date: '4/16/19',
        price: 29.99,
    },
    {
        id: 3,
        title: 'Bear and Breakfast',
        image: bearImg,
        date: '9/15/22',
        price: 7.99,
        oldPrice: 19.99,
        discount: 60,
        saleEnds: 'Sale ends: 4 days',
    },
    {
        id: 4,
        title: 'Ooblets',
        image: oubletsImg,
        date: '9/1/22',
        price: 29.99,
        FreeDemo: 'Free Demo',
    },
    {
        id: 5,
        title: 'Wytchwood',
        image: potionImg,
        date: '12/9/21',
        price: 19.99,
    },
    {
        id: 6,
        title: 'Moonstone Island',
        image: portiaImg,
        date: '6/19/24',
        price: 19.99,
    },
    {
        id: 7,
        title: 'Fae Farm',
        image: bearImg,
        date: '9/8/23',
        price: 44.99,
        FreeDemo: 'Free Demo',
    },
];