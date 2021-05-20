import React from 'react'

export default ({ color, type }) => {
  switch (type) {
    case 'list':
      return (
        <div className='car'>
          <svg width='211' height='109' viewBox='0 0 211 109' fill='none'
               xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M143.646 13.7755C120.283 18.4496 99.5124 16.8915 80.3017 15.3335C69.4339 14.4517 47.5928 13.2569 36.6877 14.8138C25.8497 16.3633 0.653931 25.1055 0.356796 55.3065H0.344025C0.344025 55.396 0.350418 55.479 0.350418 55.5696C0.350418 55.658 0.344025 55.7421 0.344025 55.8315H0.356796C0.653931 86.0336 25.8497 94.7769 36.6877 96.3253C47.5928 97.8812 69.4339 96.6874 80.3017 95.8056C99.5124 94.2476 120.283 92.6896 143.646 97.3626C167.009 102.037 187.258 95.2859 195.048 89.5746C211.557 77.4682 209.975 57.9199 209.975 55.4354C209.975 52.953 211.557 33.6709 195.048 21.5624C187.258 15.8521 167.009 9.10355 143.646 13.7755Z'
              fill={color} />
            <path
              d='M72.7734 89.1853C72.7734 89.1853 19.8144 95.4164 17.4779 61.5392C15.1425 27.6587 31.1061 20.6503 71.9971 21.8196L72.7734 89.1853Z'
              fill='white' fillOpacity='0.09' />
            <path
              d='M82.3771 93.7285C82.3771 93.7285 81.8584 108.786 94.8359 108.786L90.1651 92.1716L82.3771 93.7285Z'
              fill={color} />
            <path
              d='M82.3771 15.8493C82.3771 15.8493 81.8584 0.791922 94.8359 0.791922L90.1651 17.4062L82.3771 15.8493Z'
              fill={color} />
            <path
              d='M49.4062 81.0081L44.7332 73.2201L23.7068 71.661C23.7068 71.661 29.5481 81.0081 49.4062 81.0081Z'
              fill='#1A1A1A' fillOpacity='0.15' />
            <path
              d='M49.7969 28.8281L45.1239 36.6151L24.0953 38.1731C24.0953 38.1731 29.9376 28.8281 49.7969 28.8281Z'
              fill='#1A1A1A' fillOpacity='0.15' />
            <path
              d='M100.03 84.5135C100.03 84.5135 87.9586 60.37 100.03 25.3224C100.03 25.3224 147.148 24.1552 152.989 25.3224C152.989 25.3224 143.643 19.0935 120.28 19.0935C96.9149 19.0935 74.4518 18.2585 68.1005 22.2074C53.6906 31.1626 55.2497 87.6274 72.7713 89.1855C85.9842 90.3601 131.96 92.6902 142.865 88.407L153.77 84.1237L100.03 84.5135Z'
              fill='#2D2D2D' />
            <path
              d='M26.043 90.7422L18.6426 79.4505L6.96221 74.3888C6.96221 74.3888 13.9717 87.2374 26.043 90.7422Z'
              fill='#D3D4C6' />
            <path
              d='M26.043 21.4281L18.6426 32.7209L6.96221 37.7837C6.96221 37.7837 13.9717 24.9329 26.043 21.4281Z'
              fill='#D3D4C6' />
            <path
              d='M159.739 77.1139C159.739 77.1139 161.296 40.7681 158.7 33.4998C158.7 33.4998 192.32 31.5531 193.098 47.5188C193.877 63.4835 195.695 79.0585 159.739 77.1139Z'
              fill='#2D2D2D' />
            <path
              d='M107.174 43.1995C123.699 42.4221 143.202 60.0609 143.663 69.8212C144.122 79.5825 110.006 78.4941 108.84 78.5484C107.679 78.6038 104.904 77.5666 104.445 67.8052C103.985 58.0428 103.292 43.3826 107.174 43.1995Z'
              fill='white' fillOpacity='0.09' />
            <path
              d='M173.616 27.8668C184.674 30.6388 194.049 31.2501 194.552 29.2342C195.057 27.2193 189.095 21.9254 178.036 19.1522C166.981 16.3823 155.018 17.1821 154.513 19.198C154.009 21.2161 162.56 25.0968 173.616 27.8668Z'
              fill='white' fillOpacity='0.09' />
            <path
              d='M173.616 83.7854C184.674 81.0122 194.049 80.402 194.552 82.419C195.057 84.435 189.095 89.7278 178.036 92.4977C166.981 95.2698 155.018 94.47 154.513 92.4541C154.009 90.4371 162.56 86.5564 173.616 83.7854Z'
              fill='white' fillOpacity='0.09' />
            <path
              d='M179.405 84.1893C181.342 84.1893 182.652 85.5535 182.652 87.2372C182.652 88.9219 181.342 90.2893 179.405 90.2893C177.471 90.2893 176.485 89.1818 176.485 87.497C176.485 85.8144 177.471 84.1893 179.405 84.1893Z'
              fill={color} />
            <path
              d='M181.377 88.6498C180.39 89.719 178.959 89.7563 178.013 88.9076C177.067 88.0598 176.969 86.6456 177.955 85.5753C178.942 84.505 180.064 84.5178 181.008 85.3666C181.952 86.2154 182.363 87.5785 181.377 88.6498Z'
              fill='white' fillOpacity='0.09' />
          </svg>
        </div>
      )
    default:
      return null
  }
}