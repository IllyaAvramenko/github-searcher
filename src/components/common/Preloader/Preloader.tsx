import React from 'react'

export const Preloader: React.FC = React.memo(() => {
   return (
      <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
         <svg width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="30" strokeWidth="10" fill="none"></circle>
               <circle cx="50" cy="50" r="30" stroke="#6bd2ff" strokeWidth="8" strokeLinecap="round" fill="none">
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.6666666666666667s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform>
               <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.6666666666666667s" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" keyTimes="0;0.5;1"></animate>
            </circle>
         </svg>
      </div>
   )
})