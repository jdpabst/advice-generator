import './Home.scss';

export default function Home() {

 let adviceNumber = '10';

 let advice = 'Flop over attack feet behind the couch hide when guests come over '

 let patternDividerMobile = '/images/pattern-divider-mobile.svg'

 // need to create a toggle here for when the screen width hits a certain size? //
 let patternDividerDesktop = '/images/pattern-divider-desktop.svg'

 return (
  <div className='main-div'>
   <div className='advice-container'>
    <h1>ADVICE #{adviceNumber}</h1>
    <p>"{advice}"</p>
    <picture>
     <source media="(min-width: 1440px)" srcSet={patternDividerDesktop} />
     <img src={patternDividerMobile} alt="Pattern Divider" />
    </picture>
   </div>
   <div className='gen-bttn'>
    <img src='/images/icon-dice.svg' />
   </div>
  </div>
 )
}