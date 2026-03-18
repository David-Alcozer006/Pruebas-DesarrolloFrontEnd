
import stackIcon from '../../assets/icons/icons8-stack-48.png';
import switchIcon from '../../assets/icons/icons8-nintendo-switch-handheld-50.png';
import tvIcon from '../../assets/icons/icons8-tv-64.png';
import tabletIcon from '../../assets/icons/icons8-tablet-50.png';
import handheldIcon from '../../assets/icons/icons8-nintendo-switch-handheld-50.png';
import happyIcon from '../../assets/icons/icons8-happy-24.png';
import mandoIcon from '../../assets/icons/mando.png';
import nintendoIcon from '../../assets/icons/icons8-nintendo-switch-logo-48.png';
import systemIcon from '../../assets/icons/icons8-nintendo-switch-logo-50.png';
import buildingIcon from '../../assets/icons/icons8-building-30.png';
import llaveIcon from '../../assets/icons/icons8-llave-50.png';
import globeIcon from '../../assets/icons/icons8-globe-50.png';
import calendarIcon from '../../assets/icons/icons8-calendar-48.png';
import settingsIcon from '../../assets/icons/icons8-settings-50.png';
import esrbIcon from '../../assets/images/OIP.png';

function ProductAbout() {
    return (
        <section className="w-full bg-accent-content py-16 px-80">
            <div className="w-full flex flex-col pl-10">
                <h1 className="text-3xl font-bold mb-5">About this item</h1>

                <div className="w-full flex flex-col">
                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={stackIcon} className="w-8 h-8 opacity-75" alt="Stack" />
                            <h3 className="text-lg font-semibold">Game file size</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <p className="text-sm font-medium">Nintendo Switch: 1.5 GB</p>
                            <p className="text-sm font-medium">Nintendo Switch 2: 2.2 GB</p>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={switchIcon} className="w-8 h-8 opacity-75" alt="Switch" />
                            <h3 className="text-lg font-semibold">Supported play modes</h3>
                        </div>
                        <div className="w-2/3 flex flex-col gap-3">
                            <div className="flex gap-12">
                                <div className="flex flex-col items-center gap-2">
                                    <img src={tvIcon} className="w-8 h-8 opacity-75" alt="TV" />
                                    <h4 className="text-sm font-semibold">TV mode</h4>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src={tabletIcon} className="w-8 h-8 opacity-75" alt="Tablet" />
                                    <h4 className="text-sm font-semibold">Tabletop mode</h4>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src={handheldIcon} className="w-8 h-8 opacity-75" alt="Handheld" />
                                    <h4 className="text-sm font-semibold">Handheld mode</h4>
                                </div>
                            </div>
                            <p className="text-xs opacity-90 leading-relaxed font-medium">
                                Software compatibility and play experience may differ on Nintendo Switch Lite.
                                Additional accessories may be required (sold separately). See support for details.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={happyIcon} className="w-8 h-8 opacity-75" alt="Happy" />
                            <h3 className="text-lg font-semibold">Nintendo Account family-group lending</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <p className="text-sm font-medium">Supported</p>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={mandoIcon} className="w-8 h-8 opacity-75" alt="Mando" />
                            <h3 className="text-lg font-semibold">Genre</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <a href="#" className="text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">Action</a>
                            <a href="#" className="text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">Simulation</a>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={nintendoIcon} className="w-8 h-8" alt="Nintendo" />
                            <h3 className="text-lg font-semibold">Nintendo Switch Online</h3>
                        </div>
                        <div className="w-2/3 flex flex-col gap-3">
                            <div className="flex gap-5">
                                <a href="#" className="text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">Online Play</a>
                                <a href="#" className="text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">Save Data Cloud</a>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-xs opacity-90 leading-relaxed font-medium">
                                    Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.
                                </p>
                                <a href="#" className=" text-sm text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">Learn more</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={systemIcon} className="w-8 h-8 opacity-75" alt="System" />
                            <h3 className="text-lg font-semibold">System</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <a href="#" className="text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">Nintendo Switch</a>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={buildingIcon} className="w-8 h-8 opacity-75" alt="Building" />
                            <h3 className="text-lg font-semibold">Publisher</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <a href="#" className="text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">ConcernedApe</a>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={llaveIcon} className="w-8 h-8 opacity-75" alt="Llave" />
                            <h3 className="text-lg font-semibold">Developer</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <a href="#" className="text-primary hover:text-red-700 font-semibold underline underline-offset-4 decoration-2">ConcernedApe</a>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={globeIcon} className="w-8 h-8 opacity-75" alt="Globe" />
                            <h3 className="text-lg font-semibold">Supported languages</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <p className="text-sm font-medium">
                                Japanese, French, German, Italian, Spanish, Korean, Portuguese, Russian, Simplified Chinese, Latin American Spanish, Traditional Chinese, American English
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={calendarIcon} className="w-8 h-8 opacity-75" alt="Calendar" />
                            <h3 className="text-lg font-semibold">Release date</h3>
                        </div>
                        <div className="w-2/3 flex items-center gap-6 flex-wrap">
                            <p className="text-sm font-medium">October 5, 2017</p>
                        </div>
                    </div>

                    <div className="w-full flex py-7 border-t border-gray-300">
                        <div className="w-1/3 flex items-center gap-4">
                            <img src={settingsIcon} className="w-8 h-8 opacity-75" alt="Settings" />
                            <h3 className="text-lg font-semibold">ESRB rating</h3>
                        </div>
                        <div className="w-2/3 flex items-start gap-6">
                            <img src={esrbIcon} className="w-12 h-auto" alt="ESRB" />
                            <div className="w-1/3 flex flex-col gap-2">
                                <p className="text-sm font-medium border-b-2 border-gray-700 pb-2">
                                    Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco
                                </p>
                                <p className="text-xs opacity-90 font-medium">Users Interact</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col py-10 border-t border-gray-300 gap-2">
                        <h3 className="text-lg font-semibold">About the Number of Players</h3>
                        <p className="text-sm opacity-80">1–4 with online multiplayer functionality</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductAbout;