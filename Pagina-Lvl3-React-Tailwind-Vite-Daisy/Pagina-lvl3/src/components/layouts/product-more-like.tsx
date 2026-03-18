import { useRef, useState } from 'react';

import { games } from '../../data/games';
import likeIcon from '../../assets/icons/icons8-heart-30.png';
import hoverLikeIcon from '../../assets/icons/icons8-heart-30 (1).png';
import IconGame from '../../assets/icons/mando.png';
import IconArrow from '../../assets/icons/icons8-greater-than-80.png';

function ProductMoreLike() {
    const [hoveredLikeId, setHoveredLikeId] = useState<number | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full bg-accent-content py-20 px-80">
            <div className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-bold">More like this</h1>

                {/* Contenedor de el carrucel*/}
                <div className='container w-full h-auto relative py-4 px-4'>

                    <div className='bg-neutral-700 opacity-40 w-15 h-full absolute top-0 left-0 rounded-xl justify-center items-center flex cursor-pointer 
                                    transition-opacity duration-300 hover:opacity-80 group' onClick={scrollLeft}>
                        <img src={IconArrow} alt="Icon Arrow" className='h-6 w-6 rotate-180 transition-transform duration-300 hover:scale-110 group-hover:scale-110' />
                    </div>

                    <div className="flex gap-8 overflow-x-auto scrollbar-hide pl-10" ref={carouselRef}>
                        {games.map((game) => (
                            <div
                                key={game.id}
                                className="w-64 bg-accent-content rounded-2xl overflow-hidden flex flex-col justify-between border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow shrink-0 group"
                            >
                                <div className="w-full h-62 overflow-hidden">
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-108 group-hover:scale-108"
                                    />
                                </div>

                                <div className="w-full h-48 p-5 flex flex-col justify-between border border-neutral-300">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-base font-semibold transition-colors group-hover:text-primary">
                                            {game.title}
                                        </h2>
                                        <h4 className="text-xs opacity-60">{game.date}</h4>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        {game.saleEnds && (
                                            <span className="inline-block w-fit bg-primary text-white px-2.5 py-1 rounded-full text-xs font-bold">
                                                {game.saleEnds}
                                            </span>
                                        )}
                                        {game.FreeDemo && (
                                            <span className="inline-block w-fit bg-blue-700 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                                                {game.FreeDemo}
                                            </span>
                                        )}

                                        <div className="flex items-center gap-2">
                                            <h3 className="text-base font-semibold">${game.price.toFixed(2)}</h3>
                                            {game.oldPrice && (
                                                <>
                                                    <h4 className="text-sm line-through opacity-60">
                                                        ${game.oldPrice.toFixed(2)}
                                                    </h4>
                                                    <span className="bg-primary text-white px-2 py-0.5 rounded text-xs font-semibold">
                                                        -{game.discount}%
                                                    </span>
                                                </>
                                            )}
                                        </div>

                                        <div className="w-full mt-2 flex justify-between items-center">
                                            <div className="flex items-center gap-1">
                                                <img src={IconGame} alt="Like" className="w-4 h-4 opacity-60" />
                                                <span className="text-xs font-semibold">Games</span>
                                            </div>
                                            <img
                                                src={hoveredLikeId === game.id ? hoverLikeIcon : likeIcon}
                                                alt="Like"
                                                className="w-6 h-6"
                                                onMouseEnter={() => setHoveredLikeId(game.id)}
                                                onMouseLeave={() => setHoveredLikeId(null)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>

                     <div className='bg-neutral-700 opacity-40 w-15 h-full absolute top-0 right-0 rounded-xl justify-center items-center flex cursor-pointer 
                                    transition-opacity duration-300 hover:opacity-80 group' onClick={scrollRight}>
                        <img src={IconArrow} alt="Icon Arrow" className='h-6 w-6 transition-transform duration-300 hover:scale-110 group-hover:scale-110' />
                    </div>

                </div>

                <div className="w-full flex flex-col gap-4 mt-8">
                    <p className="text-xs leading-relaxed text-gray-700 opacity-75">
                        WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.
                    </p>
                    <p className="text-xs leading-relaxed text-gray-700 opacity-75">
                        Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/online
                    </p>
                    <p className="text-xs leading-relaxed text-gray-700 opacity-75">
                        Stardew Valley © ConcernedApe LLC 2016–2020. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ProductMoreLike;