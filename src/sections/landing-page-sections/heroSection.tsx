import React from 'react';
import ComputerModel from '@/components/three/modelFile';

import SocialMediaLinks from '@/components/uncommon/social-media-links/socialMediaLinks';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'spline-viewer': any;
        }
    }
}
const HeroSection = () => {
    return (
        <>
            <div className="h-[70vh] flex justify-around flex-col-reverse sm:flex-row items-end sm:px-28 text-white">
                <div className="sm:w-[40%] w-[100%] sm:h-[100%] h-[50%] flex justify-center sm:items-start items-center flex-col gap-4">
                    <div className="text-6xl font-bronson">YANTRA</div>
                    <div className="text-xl font-spaceGrotesk tracking-widest leading-10">
                        VIT&apos;s{' '}
                        <span className="bg-[#F8924F] px-4 pb-2 pt-1 rounded-lg border-[1px] border-black">
                            biggest
                        </span>
                        &nbsp;internal
                        <br className="hidden lg:block" /> techfest
                    </div>
                    <div>
                        <Link
                            href={'https://vtop.vit.ac.in/'}
                            className="bg-[#3A3646] font-spaceGrotesk hover:bg-[#565263] text-white font-bold py-4 px-6 rounded-lg flex justify-center gap-2 items-center"
                        >
                            <p>Register Now</p>
                            <svg
                                width="23"
                                height="23"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.667 28.3333L27 13.0003"
                                    stroke="white"
                                    stroke-width="3.41667"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 12H28.6667V28.6667"
                                    stroke="white"
                                    stroke-width="3.41667"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[50%] w-[100%] lg:h-[100%] h-[50%] bg-transparent">
                    <div className="h-full w-full bg-transparent">
                        {/* <script
                            type="module"
                            src="https://unpkg.com/@splinetool/viewer@0.9.349/build/spline-viewer.js"
                            async
                        ></script>
                        <spline-viewer
                            loading-anim
                            url="https://prod.spline.design/QMu8-BXQ5KgKUF5l/scene.splinecode"
                        ></spline-viewer> */}
                        {/* <ComputerModel /> */}
                        <Spline
                            style={{ height: '100%', width: '100%' }}
                            scene="https://draft.spline.design/ie79MbJaoOFXQIn6/scene.splinecode"
                        />
                    </div>
                </div>
            </div>
            <SocialMediaLinks />
        </>
    );
};

export default HeroSection;
