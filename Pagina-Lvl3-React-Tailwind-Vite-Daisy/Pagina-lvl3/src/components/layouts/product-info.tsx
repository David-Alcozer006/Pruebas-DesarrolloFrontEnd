import standerw from '../../assets/images/standerw.jpg';
import plusIcon from '../../assets/icons/icons8-plus-48.png';

function ProductInfo() {
    return (
        <section className="w-full bg-accent-content py-12 px-80">
            <div className="w-full h-full flex flex-row items-start justify-center gap-10 pt-12">
                <div className="w-1/2 flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">You're moving to the valley...</h1>
                    <p className="font-medium text-base-content">
                        You've inherited your grandfather's old farm plot in Stardew Valley.
                        Armed with hand-me-down tools and a few coins, you set out to begin your new life.
                        Can you learn to live off the land and turn these overgrown fields into a thriving home?
                        It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared.
                        The community center, once the town's most vibrant hub of activity, now lies in shambles.
                        But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold cursor-pointer">
                        <img src={plusIcon} alt="Plus" className="w-5 h-5" />
                        <h3 className='hover:text-red-700'>Read more</h3>
                    </div>
                    <h4 className="text-sm text-base-content opacity-90">Software description provided by the publisher</h4>

                    <button className="btn btn-lg btn-primary w-max hover:bg-red-700 ">
                       Explore this game's official website
                    </button>
                </div>
                <div className="w-1/2 h-80">
                    <img src={standerw} alt="Stardew Valley" className="w-full h-full rounded-xl" />
                </div>
            </div>
        </section>
    );
}

export default ProductInfo;