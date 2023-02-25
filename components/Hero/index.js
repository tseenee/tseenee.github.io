import ScrollIndicator from '../ScrollIndicator';
import splashArt from './splash.png';

export default function(){
    const HeroSplashStyle = {
        backgroundImage: `url(${splashArt.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'right',
        backgroundSize: '90vh'
    };
    return (
        <main className='h-screen' id='home' style={HeroSplashStyle}>
            <div className='p-4 relative h-full'>
                <h2 className='text-3xl font-thin' style={{letterSpacing: '0.24em'}}>JUNAI TSEND-AYUSH</h2>
                <div className='flex absolute top-0 bottom-0 left-0 right-0 items-center p-4'>
                    <h1 className='text-7xl font-thin' style={{opacity: '0.69'}}>
                        Hello, I'm fullstack <span style={{fontFamily: 'ui-monospace'}}>engineer</span>!<br/>
                        plus, many more <span style={{fontFamily:'fantasy'}}>talents</span>
                    </h1>
                </div>
            </div>
            <ScrollIndicator>Scroll down to know about my works</ScrollIndicator>
        </main>
    );
}