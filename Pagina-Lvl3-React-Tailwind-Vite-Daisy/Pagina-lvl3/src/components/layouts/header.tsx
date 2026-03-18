import logo from "../../assets/images/nintendo-logo.png"

import compass from "../../assets/icons/icons8-compass-50.png"
import bag from "../../assets/icons/icons8-shopping-bag-50.png"
import question from "../../assets/icons/icons8-question-50.png"

import search from "../../assets/icons/icons8-magnifying-glass-50 (1).png"
import heart from "../../assets/icons/icons8-heart-30.png"
import cart from "../../assets/icons/icons8-shopping-cart-30 (1).png"
import user from "../../assets/icons/icons8-user-30.png"
import usa from "../../assets/icons/icons8-usa-48.png"

import delivery from "../../assets/icons/icons8-delivery-50.png"
import coin from "../../assets/icons/icons8-coin-48.png"

function Header() {
    return (
        <header className="w-full flex flex-col">

            {/* TOP HEADER */}
            <div className="flex items-center h-15">

                {/* LOGO */}
                <div className="w-[7.5%] h-full flex items-center">
                    <img src={logo} alt="Nintendo" className="h-full w-full object-cover" />
                </div>

                {/* LEFT MENU */}
                <div className="flex items-center gap-6 w-[48%] px-6">

                    <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition">
                        <img src={compass} className="h-5" />
                        <span className="text-sm font-semibold">Explore</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition">
                        <img src={bag} className="h-5" />
                        <span className="text-sm font-semibold">Shop</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition">
                        <img src={question} className="h-5" />
                        <span className="text-sm font-semibold">Support</span>
                    </div>

                </div>

                {/* RIGHT MENU */}
                <div className="flex items-center justify-end gap-7 w-[45%] px-6">

                    <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition">
                        <img src={search} className="h-5" />
                        <span className="text-sm font-semibold">Search</span>
                    </div>

                    <img src={heart} className="h-5 cursor-pointer hover:opacity-70 transition" />
                    <img src={cart} className="h-5 cursor-pointer hover:opacity-70 transition" />

                    {/* LOGIN */}
                    <div className="flex items-center justify-center gap-2 border border-primary text-primary rounded-full text-sm font-semibold cursor-pointer h-8 w-40">

                        <img src={user} className="h-5" />
                        <span>Log in / Sign up</span>

                    </div>

                    <img src={usa} className="h-5 cursor-pointer" />

                </div>
            </div>

            {/* INFO BAR */}
            <div className="flex items-center justify-center gap-8 bg-secondary h-15 text-sm">

                <div className="flex items-center gap-3">
                    <img src={delivery} className="h-5" />
                    <span>Free shipping on orders $50 or more. Restrictions apply.</span>
                </div>

                <div className="w-px h-6 bg-neutral opacity-30"></div>

                <div className="flex items-center gap-3">
                    <img src={coin} className="h-5" />
                    <span>Redeem your My Nintendo Platinum Points for fun rewards</span>
                </div>

            </div>

        </header>

    )
}

export default Header