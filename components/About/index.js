import React from "react";
import PageLayout from "../PageLayout";
import SpeechBubble from "../SpeechBubble";
// @ts-ignore
import Me from './assets/me.png';
// @ts-ignore
import Profile from './assets/profile.webp';
// @ts-ignore
import Collage from './assets/collage.png';
// @ts-ignore
import LogoIC from './assets/LogoIC.png';
// @ts-ignore
import LogoSU from './assets/LogoSU.png';
// @ts-ignore
import LogoNUM from './assets/LogoNUM.png';


export default
function(){
    return (
        <PageLayout 
            id='about' 
            className="about-page"
            style={{
            }}
        >
            <h2 className="text-slate-500 text-4xl">About Me</h2>
            <div className="flex h-full">
                <div className="sticky top-[90vh] md:top-[65vh] mt-10 h-[225px]">
                    <img className="w-[80px] md:w-[200px]" src={Me.src}/>
                </div>
                <div className="flex-1 h-full pr-12 text-xl">
                    <SpeechBubble className={'mt-10'} bubbleClassName='p-4 bg-slate-900 text-sky-50'>
                        <div className="flex flex-col md:flex-row items-center">
                            <img src={Profile.src} className="rounded-full drop-shadow w-40"/>
                            <div className="ml-5">
                                <p>Hello, I'm Junai Tsend-ayush but you can just call me Tseenee. </p>
                                <p>This is my portofolio! Where you can know me little bit better.</p>  
                            </div>
                        </div>
                        
                    </SpeechBubble>
                    <SpeechBubble className={'mt-10'} bubbleClassName='p-4 bg-slate-900 text-sky-50'>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex-1">
                                <p>I was born in Mongolia but currently living in Japan.</p>
                                <p>My hobbies are taking pictures!</p>
                                <p>Here are some pictures I took!</p>        
                            </div>
                            <img className="w-full mt-8 md:mt-0 md:w-1/3" src={Collage.src}/>
                        </div>
                    </SpeechBubble>
                    <SpeechBubble className={'mt-10'} bubbleClassName='p-4 bg-slate-900 text-sky-50'>
                        <div className="flex flex-col md:flex-row items-center">
                            <a href="https://www.num.edu.mn/en/" target="_blank" rel="noopener noreferrer">
                                <img src={LogoNUM.src} className="rounded-full drop-shadow w-40"/>
                            </a>
                            <div className="ml-5">
                                <p>About education,<br/></p>
                                <p>I have bachelor's degree in Computer Science and Mathematics</p>
                                <p>received from National University of Mongolia.</p>  
                            </div>
                        </div>
                    </SpeechBubble>
                    <SpeechBubble className={'mt-10'} bubbleClassName='p-4 bg-slate-900 text-sky-50'>
                        <p>For work, Back home in Mongolia I used to work in company called Susano Technology Co., Ltd.</p>
                        <p>Now I work in Japanese company called iCraft Co.,Ltd.!</p>
                        <div className="text-center my-6 whitespace-nowrap">
                            <a href="https://susano-tech.mn/pages/jap" target="_blank" rel="noopener noreferrer">
                                <img src={LogoSU.src} className="rounded-lg inline-block drop-shadow w-20 mr-2 md:mx-4"/>
                            </a>
                            <a href="https://www.icraft.jp/" target="_blank" rel="noopener noreferrer">
                                <img src={LogoIC.src} className="rounded-lg inline-block drop-shadow w-20 md:mx-4"/>
                            </a>
                        </div>
                    </SpeechBubble>
                    <SpeechBubble className={'mt-10'} bubbleClassName='p-4 bg-slate-900 text-sky-50'>
                        <p>That's all folks! Feel free to browse through my portofolio.</p>
                        <p>And if you liked what you saw, feel free to contact me through my socials!</p>
                        <p>Bye for now!</p>
                    </SpeechBubble>
                </div>
            </div>
            
        </PageLayout>
    )
}