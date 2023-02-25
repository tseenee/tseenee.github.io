import PageLayout from "../PageLayout";
import SpeechBubble from "../SpeechBubble";
import Me from './me.png';

export default
function(){
    return (
        <PageLayout id='about'>
            <h2 className="text-slate-500 text-4xl">About Me</h2>
            <div className="mx-auto relative w-[300px] h-[670px] lg:w-[800px] lg:h-[480px]">
                <SpeechBubble className={'mt-10 absolute w-8/12 z-10'} bubbleClassName='p-4 bg-slate-600'>
                    <p>Hello, I'm Junai Tsend-ayush but you can just call me Tseenee. </p>
                    <p>I came from Mongolia and currently living in Japan.</p>
                    <p>I have been working as full-stack software engineer for about 5 years!</p>
                    <p>Feel free to contact me (it's always fun to meet new people).</p>
                </SpeechBubble>
                <div className="flex justify-end absolute bottom-0 right-0">
                    <img src={Me.src} className="w-[180px] lg:w-[300px]"/>
                </div>
            </div>
        </PageLayout>
    )
}