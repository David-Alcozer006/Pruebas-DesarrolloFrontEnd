import logo from "../../assets/images/nintendo-logo.png"
import Iconfacebook from "../../assets/icons/icons8-facebook-50.png"
import Icontwitter from "../../assets/icons/icons8-x-50.png"
import Iconinstagram from "../../assets/icons/icons8-instagram-32.png"
import Iconyoutube from "../../assets/icons/icons8-youtube-50.png"
import IconESRB from "../../assets/images/ESRB_PC.webp"
import IconUSA from "../../assets/icons/icons8-usa-48.png"

function Footer() {
    return (
        <>
            <div className="h-30 w-full items-center bg-primary">
                <img src={logo} alt="Nintendo" className="h-full w-full object-contain" />
            </div>

            <footer className="footer lg:footer-horizontal bg-secondary text-neutral px-60 pt-10">
                <div className="flex flex-row h-full gap-3 justify-between">
                    <div className=" flex flex-col gap-y-20">
                        <nav>
                            <h6 className="footer-title text-base-conten font-extrabold link-hover">About Nintendo</h6>
                            <div className="flex flex-col gap-2 pt-2">
                                <a className="link link-hover text-primary font-bold">Careers</a>
                                <a className="link link-hover text-primary font-bold">Corporate Social Responsibility</a>
                            </div>
                        </nav>
                    </div>
                    <div className="divider-vertical"></div>
                </div>

                <div className="flex flex-row h-full justify-between">
                    <div className=" flex flex-col gap-y-20">
                        <nav>
                            <h6 className="footer-title text-base-conten font-extrabold link-hover">Shop</h6>
                            <div className="flex flex-col gap-2 pt-2">
                                <a className="link link-hover text-primary font-bold">Games</a>
                                <a className="link link-hover text-primary font-bold">Hardware</a>
                                <a className="link link-hover text-primary font-bold">Merchandise</a>
                                <a className="link link-hover text-primary font-bold">Sales and deals</a>
                                <a className="link link-hover text-primary font-bold">Exclusives</a>
                                <a className="link link-hover text-primary font-bold">Nintendo Switch Online</a>
                                <a className="link link-hover text-primary font-bold">Nintendo Store US</a>
                            </div>
                        </nav>
                    </div>
                    <div className="divider-vertical"></div>
                </div>
                <div className="flex flex-row h-full justify-between">
                    <div className=" flex flex-col gap-y-20">
                        <nav>
                            <h6 className="footer-title text-base-conten font-extrabold link-hover">Orders</h6>
                            <div className="flex flex-col gap-2 pt-2">
                                <a className="link link-hover text-primary font-bold">Order details</a>
                                <a className="link link-hover text-primary font-bold">Refunds and returns</a>
                                <a className="link link-hover text-primary font-bold">FAQ</a>
                            </div>
                        </nav>
                    </div>
                    <div className="divider-vertical"></div>
                </div>
                <div className="flex flex-row h-full justify-between">
                    <div className=" flex flex-col gap-y-20">
                        <nav>
                            <h6 className="footer-title text-base-conten font-extrabold link-hover">Support</h6>
                            <div className="flex flex-col gap-2 pt-2">
                                <a className="link link-hover text-primary font-bold">Nintendo Switch 2</a>
                                <a className="link link-hover text-primary font-bold">Nintendo Switch</a>
                                <a className="link link-hover text-primary font-bold">Nintendo Account</a>
                                <a className="link link-hover text-primary font-bold">Apps and other products</a>
                                <a className="link link-hover text-primary font-bold">Other systems</a>
                                <a className="link link-hover text-primary font-bold">Repairs</a>
                                <a className="link link-hover text-primary font-bold">Nintendo product recycling</a>
                                <a className="link link-hover text-primary font-bold">Warranty</a>
                                <a className="link link-hover text-primary font-bold">Licensed product information</a>
                            </div>
                        </nav>
                    </div>
                    <div className="divider-vertical h-full"></div>
                </div>

                <div className="flex flex-row h-full justify-between">
                    <div className=" flex flex-col gap-y-20">
                        <nav>
                            <h6 className="footer-title text-base-conten font-extrabold link-hover">Parents</h6>
                            <div className="flex flex-col gap-2 pt-2">
                                <a className="link link-hover text-primary font-bold">Info for parents</a>
                                <a className="link link-hover text-primary font-bold">Parental controls</a>
                            </div>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-base-conten font-extrabold link-hover">Privacy</h6>
                            <div className="flex flex-col gap-2 pt-2">
                                <a className="link link-hover text-primary font-bold">Privacy policy</a>
                                <a className="link link-hover text-primary font-bold">Cookies and interest-based ads</a>
                            </div>
                        </nav>
                    </div>
                    <div className="divider-vertical h-full"></div>
                </div>

                <div className=" flex flex-col gap-y-20">
                    <nav>
                        <h6 className="footer-title text-base-conten font-extrabold link-hover">Community guidelines</h6>
                        <div className="flex flex-col gap-2 pt-2">
                            <a className="link link-hover text-primary font-bold">Community guidelines</a>
                            <a className="link link-hover text-primary font-bold">Online safety</a>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-base-conten font-extrabold link-hover">Documents and policies</h6>
                        <div className="flex flex-col gap-2 pt-2">
                            <a className="link link-hover text-primary font-bold">Health and safety precautions</a>
                            <a className="link link-hover text-primary font-bold">Wireless regulatory info</a>
                            <a className="link link-hover text-primary font-bold">Supply chain transparency</a>
                        </div>
                    </nav>
                </div>

            </footer>

            <div className="h-55 w-full flex flex-row justify-between items-center px-60 pt-10">

                <div className="flex gap-8">
                    <img src={Iconfacebook} className="h-10 opacity-75" />
                    <img src={Icontwitter} className="h-10 opacity-75" />
                    <img src={Iconinstagram} className="h-10 opacity-75" />
                    <img src={Iconyoutube} className="h-10 opacity-75" />
                </div>

                <div className="conteiner">
                    <img src={IconESRB} className="h-20" />
                </div>

            </div>

            {/* Barra legal */}
            <div className="bg-neutral text-white py-3 px-50">
                <div className="flex justify-evenly items-center gap-20">
                    <p>© Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
                    <div className="flex gap-2">
                        <a href="#" className="hover:underline">Contact us</a>
                        <a href="#" className="hover:underline">Website feedback</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <div className="flex items-center gap-2">
                            <div className="h-7 w-8 rounded border border-white flex items-center">
                                <img src={IconUSA} alt="USA Flag" className="w-full h-full image-full"/>
                            </div>
                            <span>English (United States)</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;