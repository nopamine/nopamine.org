import React, { PureComponent } from 'react'

export const NeedleTwo = ({width = 111, height = 580, viewBox, style }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 250 580" style={{...style, display: 'block', overflow: 'visible'}}>
      <g id="Bold" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Needle" transform="translate(0, -40)">
          <g id="Push-Thing" transform="translate(26, 424)" fillRule="nonzero">
           <animateTransform 
             id="push-animation-1"
             attributeName="transform"
             type="translate"
             values="26, 424;26, 375;"
             dur="1s"
             begin="0s; push-animation-2.end+2s" 
             keySplines="0.5 0 0.5 1;"
             keyTimes="0;1"
             calcMode="spline"
             fill="freeze"
           />
           <animateTransform 
             id="push-animation-2"
             attributeName="transform"
             type="translate"
             values="26, 375;26, 424;"
             dur="3s"
             begin="push-animation-1.end+2s" 
             keySplines="0.5 0 0.5 1;"
             keyTimes="0;1"
             calcMode="spline"
             fill="freeze"
           />
           <g id="Foot" transform="translate(0, 165)">
            <path d="M1.23332807,11.9538284 C2.55644321,5.77229855 18.1050076,0.760217441 30.9062933,0.760217441 C43.707579,0.760217441 59.9735342,4.64700353 61.3334259,11.9538284 C62.4379219,15.4308753 61.6779676,17.134451 61.3644352,18.9062416 C60.0710122,26.2154514 45.0747837,30.9980326 30.9373025,29.9603531 C16.7998214,28.9226735 1.76213449,22.466126 1.26433732,18.9062416 C0.766540141,15.3463573 0.922212377,13.4073458 1.23332807,11.9538284 Z" id="Bottom" fill="#909090"></path>
            <path d="M1.1216982,12.3299605 C0.854474985,14.6284022 0.998487476,17.5688113 1.34107023,19.223952 C1.65461057,20.0345119 2.77802193,21.1604828 3.94167313,21.848647 C4.48721207,21.0919505 4.8727357,20.0345119 5.28528256,16.7780673 C3.07451048,15.6904792 0.998487476,14.3734063 1.1216982,12.3299605 Z" id="Highlight" fill="#D8D8D8"></path>
            <path d="M1.23332807,11.9538284 C2.55644321,5.77229855 18.1050076,0.760217441 30.9062933,0.760217441 C43.707579,0.760217441 59.9735342,4.64700353 61.3334259,11.9538284 C62.4379219,15.4308753 61.6779676,17.134451 61.3644352,18.9062416 C60.0710122,26.2154514 45.5565145,24.1097717 31.4190334,23.0720922 C17.2815523,22.0344126 1.73112525,16.8745324 1.23332807,13.3146481 L1.23332807,11.9538284 Z" id="Top" fill="#ADAAAA"></path>
            <path d="M49.2143553,24.1468604 C61.5669122,21.5536207 60.927638,11.6176537 61.5669122,12.7458092 C62.2061863,13.8739647 61.7833116,17.4427353 61.5669122,18.6954867 C61.4868711,19.15885 61.4305086,19.8172413 61.2884399,20.5884316 C60.5394121,24.6543737 57.5288739,26.9689693 49.2143553,28.3885498 C48.7916897,26.9673273 49.0230676,25.3275724 49.2143553,24.1468604 Z" id="Shadow" fill="#646464"></path>
          </g>
          <g id="Middle" transform="translate(21, 14)">
            <path d="M1.49640226,0.197608787 C5.02127225,1.4207858 7.83706226,2.0323743 9.94377228,2.0323743 C12.0504823,2.0323743 15.0980651,1.4207858 19.0865205,0.197608787 C21.0287025,60.1905278 21.0287025,114.419351 19.0865205,162.884079 C17.9568722,166.828992 13.2383099,166.828992 10.2914614,166.828992 C7.3446129,166.828992 2.99736218,166.047871 1.49640226,162.884079 C-0.497169682,113.136979 -0.497169682,58.9081557 1.49640226,0.197608787 Z" id="Mask" fill="#909090"></path>
            <path d="M16.9813433,0.197608787 L19.698792,0.197608787 C21.1511938,44.433407 21.8452055,76.8505559 21.7808273,97.4490556 C21.7116,119.599033 20.8233252,140.428923 20.6980431,160.665278 C20.5816989,163.29522 19.5959613,164.905968 17.7408303,165.49752 C17.4328489,115.75042 17.1796865,60.6504497 16.9813433,0.197608787 Z" id="Shadow" fill="#646464"></path>
            <path d="M4.804806,0.197608787 C4.60646273,60.6504497 4.35330038,115.75042 4.04531896,165.49752 C2.19018795,164.905968 1.20445035,163.29522 1.08810618,160.665278 C0.962824075,140.428923 0.0745492409,119.599033 0.00532201385,97.4490556 C-0.0590562463,76.8505559 0.634955494,44.433407 2.08735723,0.197608787 L4.804806,0.197608787 Z" id="Highlight" fill="#D9D9D9"></path>
          </g>
          <g id="Head" transform="translate(31, 14.5) rotate(-3) translate(-31, -14.5) translate(5, 2)" fill="#9B9595">
            <path d="M0.247010134,9.53741392 C1.37549797,4.27049791 14.6369031,0 25.5551481,0 C36.4733931,0 50.3466625,3.31170057 51.5065171,9.53741392 C52.4485442,12.5 51.8003775,13.9515161 51.532965,15.4611541 C50.4298016,21.6888995 37.639485,25.7638542 25.581596,24.8797088 C13.5237069,23.9955634 0.698030309,18.494321 0.273457991,15.4611541 C-0.151114327,12.4279872 -0.018341131,10.7758702 0.247010134,9.53741392 Z" id="Path"></path>
          </g>
        </g>
        <g id="Body" transform="translate(0, 332)" fillRule="nonzero">
          <path d="M31.1346731,7.83779293 C34.2227452,-4.65524022 79.0817542,-0.617610985 81.1602722,8.82930263 C82.7646849,16.1213965 84.4278597,101.604607 83.1458343,141.479141 C83.1106725,142.57277 98.9946611,141.403858 106.176951,143.215834 C112.523134,144.816874 110.389235,145.675198 110.350598,146.536747 C110.097521,152.179959 81.4398414,156.529025 81.1602722,157.140066 C67.3163822,166.446473 51.9491792,168.173028 31.1346731,157.140066 C25.7903867,155.728173 0.783483229,157.207112 0.0183125548,152.878111 C-0.859262457,147.913175 30.0967071,143.843213 30.0298372,142.493072 C28.105767,103.644987 28.4740456,18.601566 31.1346731,7.83779293 Z" fill="#FFFFFF" opacity="0.8" style={{mixBlendMode: 'screen'}}></path>
          
          <path d="M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,98.3091246 82.0663673,106.137401 C70.3973297,121.855428 35.0123873,112.330934 31.2193373,106.137401 C31.2193373,92.7083564 30.3752585,21.6700593 33.035886,10.9062862 Z" id="Liquid" fill="#0050FF" opacity="0.8" style={{mixBlendMode: 'hard-light'}}>
            <animate 
                id="liquid-animation-1"
                attributeName="d" 
                values="M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,98.3091246 82.0663673,106.137401 C70.3973297,121.855428 35.0123873,112.330934 31.2193373,106.137401 C31.2193373,92.7083564 30.3752585,21.6700593 33.035886,10.9062862 Z;M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,49.1717238 82.0663673,57 C70.3973297,72.7180269 35.0123873,63.1935337 31.2193373,57 C31.2193373,43.5709556 30.3752585,21.6700593 33.035886,10.9062862 Z;"
                dur="1s"
                begin="0s; liquid-animation-4.end+2s" 
                keySplines="0.5 0 0.5 1;"
                keyTimes="0;1"
                calcMode="spline"
                fill="freeze"
              />

              <animate 
                id="liquid-animation-2"
                attributeName="d" 
                values="M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,49.1717238 82.0663673,57 C70.3973297,72.7180269 35.0123873,63.1935337 31.2193373,57 C31.2193373,43.5709556 30.3752585,21.6700593 33.035886,10.9062862 Z;M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,98.3091246 82.0663673,106.137401 C70.3973297,121.855428 35.0123873,112.330934 31.2193373,106.137401 C31.2193373,92.7083564 30.3752585,21.6700593 33.035886,10.9062862 Z;"
                dur="3s"
                begin="liquid-animation-1.end+2s" 
                keySplines="0.5 0 0.5 1;"
                keyTimes="0;1"
                calcMode="spline"
                fill="freeze"
              />

              <animate 
                id="liquid-animation-3"
                attributeName="d" 
                values="M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,98.3091246 82.0663673,106.137401 C70.3973297,121.855428 35.0123873,112.330934 31.2193373,106.137401 C31.2193373,92.7083564 30.3752585,21.6700593 33.035886,10.9062862 Z;M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,49.1717238 82.0663673,57 C70.3973297,72.7180269 35.0123873,63.1935337 31.2193373,57 C31.2193373,43.5709556 30.3752585,21.6700593 33.035886,10.9062862 Z;"
                dur="1s"
                begin="liquid-animation-2.end+2s" 
                keySplines="0.5 0 0.5 1;"
                keyTimes="0;1"
                calcMode="spline"
                fill="freeze"
              />

              <animate 
                id="liquid-animation-4"
                attributeName="d" 
                values="M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,49.1717238 82.0663673,57 C70.3973297,72.7180269 35.0123873,63.1935337 31.2193373,57 C31.2193373,43.5709556 30.3752585,21.6700593 33.035886,10.9062862 Z;M33.035886,10.9062862 C35.5079324,1 75.0997871,3.97436031 78.6586244,10.9062862 C80.9263277,19.1817598 83.4604234,98.3091246 82.0663673,106.137401 C70.3973297,121.855428 35.0123873,112.330934 31.2193373,106.137401 C31.2193373,92.7083564 30.3752585,21.6700593 33.035886,10.9062862 Z;"
                dur="3s"
                begin="liquid-animation-3.end+2s" 
                keySplines="0.5 0 0.5 1;"
                keyTimes="0;1"
                calcMode="spline"
                fill="freeze"
              />

            <animate 
              id="liquid-animation-color-1"
              attributeName="fill" 
              values="#0050FF; red;"
              dur="1s"
              begin="liquid-animation-2.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-color-2"
              attributeName="fill" 
              values="red; #0050FF;"
              dur="1s"
              begin="liquid-animation-4.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />
          </path>
          
          <path d="M83.0622702,141.592495 C89.2166945,142.538913 92.145843,144.429911 91.8497156,147.265489 C91.5535883,150.101066 87.9756761,153.372124 81.115979,157.078662 C83.1553928,151.6896 83.8041565,146.527544 83.0622702,141.592495 Z" id="Shadow" fill="#646464"></path>
          <path d="M38.9398139,156.266109 C43.9958972,156.266109 48.7258405,153.400001 48.7258405,142.747683 C48.7258405,132.095365 39.3604262,19 34.3043429,19 C29.2482597,19 32.2794329,125.931325 31.0974682,140.938452 C30.3604543,150.936519 33.8837307,156.266109 38.9398139,156.266109 Z" id="Highlight" fillOpacity="0.4" fill="#FFFFFF"></path>
        </g>
        <g id="Yellow" transform="translate(26, 299)" fillRule="nonzero">
          <path d="M30,50 C42.7025492,50 52.9603397,48.175972 52.9603397,44.5861211 C52.9603397,40.9962702 41.0099097,36.9828761 29.9801699,36.9828761 C18.95043,36.9828761 7,39.9101491 7,43.5 C7,47.0898509 17.2974508,50 30,50 Z" id="Cap" fill="#CCCCCC"></path>
          <path d="M13.0687791,8.50383987 C18.4095325,-1.50127996 40.6762442,-1.50127996 45.2280928,8.50383987 C49.7799414,18.5089597 47.3900884,32.9660928 42.784926,39.6674743 C35.190906,48.3427899 34.7546059,44.7794563 32.1449403,56.0183567 C31.7987476,57.5092853 28.861915,57.5725451 28.7383784,56.0183567 C28.0481877,47.3352069 26.7078939,48.3776552 24.3953947,46.9703939 C22.4579795,45.7913883 19.8711041,44.7220526 16.5005497,39.6674743 C9.31799799,28.8963175 7.72802569,18.5089597 13.0687791,8.50383987 Z" id="Inner-White" fill="#FFFFFF"></path>
          <path d="M33.9228691,49.7301524 C33.3673884,51.1302139 32.8313422,53.0622682 32.1449403,56.0183567 C31.7987476,57.5092853 28.861915,57.5725451 28.7383784,56.0183567 C28.4635825,52.5612056 28.0857328,50.6457495 27.5845002,49.5035604 C26.8268123,47.7769714 35.4792984,45.8072504 33.9228691,49.7301524 Z" id="Inner-White-Under" fill="#FFFFFF"></path>
          <path d="M30,50 C42.7025492,50 52.9603397,48.175972 52.9603397,44.5861211 C52.9603397,40.9962702 41.0099097,46.2383072 29.9801699,46.2383072 C18.95043,46.2383072 15.3473104,36.5285361 15.3473104,40.1183869 C15.3473104,43.7082378 17.2974508,50 30,50 Z" id="Over-Top" fill="#CCCCCC"></path>
          <path d="M10.3492187,3.8651377 C18.9234586,-1.58888064 41.1335242,-1.12323861 48.0623188,4.33077973 C54.9911135,9.78479808 61.7526365,39.8045345 57.8424627,51.5683913 C53.9322888,63.3322481 7.1726884,59.4966357 2.29387685,51.5683913 C-2.58493471,43.6401469 1.77497883,9.31915604 10.3492187,3.8651377 Z" id="Path" fill="#009467" opacity="0.8"></path>
          <path d="M14.7759812,53.2220322 C18.9630514,53.2220322 11.0836799,48.7596986 9.80410806,44.9571748 C8.52453619,41.154651 7.07762799,25.0588159 5.77122019,24.0958743 C4.4648124,23.1329326 3.02308319,38.9543049 3.02308319,44.9571748 C2.23463619,50.2095962 10.5889109,53.2220322 14.7759812,53.2220322 Z" id="Highlight" fillOpacity="0.57" fill="#FFFFFF"></path>
          <path d="M20.4981623,5.52399783 C24.4992829,13.8622013 38.3748142,8.451432 39.3340416,5.02135656 C40.8408985,11.0655465 38.6749941,11.2499978 36.4366435,12.9788534 C34.1982928,14.7077089 26.7783391,17.0180923 22.1867144,12.9788534 C17.5950896,8.93961439 20.4981623,1.52250128 20.4981623,5.52399783 Z" id="Top-White" fill="#FFFFFF"></path>
        </g>
        <g transform="translate(46, 143)" fillRule="nonzero">
          <path d="M0.902216562,29.300708 C0.902216562,22.2820184 6.51520279,-1.099461e-13 9.83535926,-1.13686838e-13 C13.1555157,-1.13686838e-13 18.768502,24.2229988 18.768502,29.300708 C18.768502,34.3784173 19.98373,160.28789 18.768502,164.369826 C17.5532739,168.451761 2.93220383,170.262484 0.902216562,164.369826 C-1.1277707,158.477167 0.902216562,36.3193977 0.902216562,29.300708 Z" id="Mask" fill="#D8D8D8"></path>
          <path d="M9.4316369,4 C11.802141,4 17.0605985,23.4400271 16.0034696,26.8498196 C14.9463406,30.2596122 4.61441972,32.3289984 3.23011828,26.8498196 C1.84581685,21.3706409 7.06113276,4 9.4316369,4 Z" id="Hole" fill="#5B5B5B"></path>
          <path d="M18.3813937,165.478703 C19.721425,165.478703 20.2495385,135.139124 19.721425,99.0107267 C19.1933115,62.8823293 19.801057,29 18.3813937,29 C16.9617304,29 14,62.8823293 14,99.0107267 C14,129.28543 14.9126412,165.069747 15.8110462,166.152019 C16.4099829,166.873534 17.2667654,166.649095 18.3813937,165.478703 Z" id="Shadow" fill="#8A8A8A"></path>
        </g>
        <g id="Like" transform="translate(6, 42)" fillRule="nonzero" opacity="0">
          <animate 
            id="like-fadein"
            attributeName="opacity" 
            values="0; 1;"
            dur="1s"
            begin="liquid-animation-1.begin + 0.2s" 
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <animate
            id="like-fadeout"
            attributeName="opacity" 
            values="1; 0;"
            dur="0.5s"
            begin="liquid-animation-2.begin + 0.5s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />

          <animateTransform 
            id="like-animation-1"
            attributeName="transform"
            type="translate"
            values="6, 42;6, 30;"
            dur="1s"
            begin="liquid-animation-1.begin+0s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />

          <polygon id="Wrist" fill="#288FF4" points="5 34 27.0128486 34 32 39.86064 32 73.6960097 27.8096051 80 5 80"></polygon>
          <polygon id="White-Hand" fill="#FFFFFF" points="64.9977664 1 71.552027 4.88982822 73.8111441 31.8661183 90.2406797 30.7019145 97 34.5793482 94.9540294 72.9678898 83.0188943 84.9411706 57.8016363 83.7224908 47.3899479 76.2051703 32 76.2051703 32 40.5972265 44.6975932 35.5254047"></polygon>
          <path d="M66.9462389,0.822976772 C77.2076109,0.822976772 70.3276862,27.2256121 72.5106971,31.2588685 C74.693708,35.292125 89.1272978,27.6932721 94.6829818,34.8025296 C100.238666,41.9117871 97.3733565,76.5494014 86.2724078,83.028565 C75.171459,89.5077287 54.5459978,85.1901565 45.9758639,76.4843281 C44.6329738,75.041844 32.1458844,74.6524674 30.6765276,76.8789348 C29.8781842,81.0351668 9.80195612,84.0994527 3.60617645,79.5170592 C2.6908354,64.3183948 1.59605814,37.7166452 4.55381971,34.8025296 C6.37406498,33 26.8088024,29.3224238 32.5952522,39.3458451 C51.4999058,36.7180977 56.6848669,0.822976772 66.9462389,0.822976772 Z" id="Outline" stroke="#0050FF" strokeWidth="5"></path>
          <path d="M88.1244243,83.4332244 C94.2270537,79.0370219 99.545908,65.5122687 99.545908,56.3995703 C99.545908,47.2868719 102.778019,33.7707263 94.2270537,30.7024467 C85.6760888,27.6341671 94.0666384,34.5917101 89.8522072,52.0832448 C82.2987058,83.4332244 60.0910529,75.8501476 59.0183142,81.8430199 C58.1937685,86.4493577 85.472267,85.3437813 88.1244243,83.4332244 Z" id="Shadow" fillOpacity="0.25" fill="#383838"></path>
          <path d="M17.5807355,63.119323 C18.1734491,63.324062 18.4736772,63.324062 18.4814196,63.119323 C18.9152253,51.6478706 18.0384074,42.4239243 17.5807355,37.303791 C16.8758488,29.4179804 4.5399817,31.1646064 0,31.1646064 C7.22706222,46.2711221 7.22706222,59.2552283 17.5807355,63.119323 Z" id="Highlight" fillOpacity="0.25" fill="#FFFFFF" transform="translate(9.299308, 47.136439) scale(-1, 1) translate(-9.299308, -47.136439) "></path>
        </g>
        <g id="Heart" transform="translate(6, 48)" opacity="0">
          <animate 
            id="heart-fadein"
            attributeName="opacity" 
            values="0; 1;"
            dur="1s"
            begin="liquid-animation-3.begin + 0.2s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <animate
            id="heart-fadeout"
            attributeName="opacity" 
            values="1; 0;"
            dur="1s"
            begin="liquid-animation-4.begin + 0.5s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <animateTransform 
            id="heart-animation-1"
            attributeName="transform"
            type="translate"
            values="6, 48; 6, 40;"
            dur="0.5s"
            begin="liquid-animation-3.begin+0s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <path d="M72.7272727,0 C63.1818182,0 54.7727273,4.725 50,12.15 C45.2272727,4.725 36.8181818,0 27.2727273,0 C12.2727273,0 0,12.15 0,27 C0,53.775 50,81 50,81 C50,81 100,54 100,27 C100,12.15 87.7272727,0 72.7272727,0 Z" id="Path" fill="#FF6B6B"></path>
          <path d="M97.7510536,37.3139025 C91.4580899,52.2839364 73.3461471,66.1555834 61.325863,74.0929714 C69.5933984,65.5728059 78.4892729,55.1758317 88.0134864,42.9020488 C92.6701489,38.7547929 96.7082537,36.0472689 97.7510536,37.3139025 Z" id="Shadow" fill="#B31919"></path>
          <path d="M29,30 C28.5125248,22.6252084 26.5912578,16.2970515 23.2361992,11.0155292 C18.9430566,4.25727829 8.18878658,2.89815956 5,8.4503546 C11.4366209,18.9378127 15.954591,17.5 29,30 Z" id="Highlight" fillOpacity="0.26" fill="#FFFFFF" fillRule="nonzero" transform="translate(17, 17.5) scale(-1, 1) translate(-17, -17.5) "></path>
        </g>
      </g>
    </g>
    </svg>
  )
}