function ProductTags() {
    return (
        <section className="w-full bg-white py-16 px-80">
            <div className="w-full flex flex-col gap-8">
                <h1 className="text-3xl font-bold">Related tags</h1>
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Action</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Simulation</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Character customization</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Choose your own path</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Pixel art</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200  rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Romance</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Meet up & play together</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Online co-op</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Play together on multiple consoles</h3>
                    </div>
                    <div className="px-4 py-2 bg-neutral-200 rounded-full flex items-center justify-center hover:text-primary cursor-pointer">
                        <h3 className="text-sm font-black">Play together on one console</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductTags;