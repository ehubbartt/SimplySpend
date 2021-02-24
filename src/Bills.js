import React, { useState } from 'react';
import './App.css';

import ProgressBar from './components/ProgressBar';
const totalRent = 5400;
const paidRent = 540;

// async function getInfo() {
//   try {
//     let info = localStorage.getItem('house-info');
//     if (info === null) {
//       let resp = await fetch('house-info.json');
//       checkStatus(resp);
//       info = await resp.json();
//     } else {
//       info = JSON.parse(info);
//     }
//     console.log('test')
//   } catch (error) {
//     console.log(error);
//   }
// }

// function checkStatus(response) {
//   if (response.ok) {
//     return response;
//   } else {
//     throw Error('Error in request: ' + response.statusText);
//   }
// }

function Bills(info) {
  window.addEventListener('load', init);

  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');
  const colorArray = ['#7ea9e1', "#ed004f", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];

  function init() {
    loadPercent();
  }

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  function loadPercent() {
    let percentProgress = (paidRent / totalRent) * 100;
    setProgress(percentProgress)
    const randomProgressColor = randomColor();
    setColor(randomProgressColor);
  }
  return (
    <div className='main'>
      <h1 className='title'>Bills</h1>
      <div className='bar'></div>
        <div className="app-header">
          <ProgressBar
            fraction='540/5400'
            name='Rent: '
            progress={progress}
            size={350}
            strokeWidth={20}
          circleOneStroke='#E0BBE4'
          circleTwoStroke='#957DAD'
          />
          <p>
          </p>
        <div className='bar'></div>
        </div>
      <div className="bottomRings">
        <ProgressBar
          fraction='15/530'
          name='Water: '
          progress={3}
          size={250}
          strokeWidth={15}
          circleOneStroke='#B3E3F8'
          circleTwoStroke='#85BEF9'
        />
        <ProgressBar
          fraction='60/60'
          name='Gas: '
          progress={80}
          size={250}
          strokeWidth={15}
          circleOneStroke='#D1EED3'
          circleTwoStroke='#AAE3A7'
        />
        <ProgressBar
          fraction='90/100'
          name='Electric: '
          progress={90}
          size={250}
          strokeWidth={15}
          circleOneStroke='#FFB1AF'
          circleTwoStroke='#FF6961'
        />
      </div>
    </div>
  );
}

export default Bills;