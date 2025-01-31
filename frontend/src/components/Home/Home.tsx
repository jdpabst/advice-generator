import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.scss';

export default function Home() {
 const [advice, setAdvice] = useState({
  id: 0,
  advice: 'Roll the dice for some advice.'
 });

 useEffect(() => {
  getAdvice();
 }, [])

 async function getAdvice() {
  try {
   const response = await axios.get('https://api.adviceslip.com/advice');
   setAdvice(response.data.slip);
  } catch (error) {
   console.error("Error fetching advice:", error);
  }
 }


 let adviceNumber = '10';

 let quote = 'Flop over attack feet behind the couch hide when guests come over '

 let patternDividerMobile = '/images/pattern-divider-mobile.svg'

 let patternDividerDesktop = '/images/pattern-divider-desktop.svg'

 return (
  <div className='main-div'>
   <div className='advice-container'>
    <h1>ADVICE #{advice.id}</h1>
    <p>"{advice.advice}"</p>
    <picture>
     <source media="(min-width: 1440px)" srcSet={patternDividerDesktop} />
     <img src={patternDividerMobile} alt="Pattern Divider" />
    </picture>
   </div>
   <div className='gen-bttn' onClick={getAdvice}>
    <img src='/images/icon-dice.svg' />
   </div>
  </div>
 )
}