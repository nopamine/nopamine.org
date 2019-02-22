import React, { PureComponent } from 'react'

export const Needle = ({width = 202, height = 102, viewBox, style }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 102" style={{...style, display: 'block', overflow: 'visible'}}>
      <g id="Addiction-Needle" transform="translate(0, -10)">
        <g id="Right-Flop" opacity="0.9" transform="translate(11, 72.5)">
          <polygon id="Left" fill="#616161" points="5 7 0 4.5 0 3.5 5 6"></polygon>
          <polygon id="Right" fill="#9C9C9C" points="5 7 11 4 11 3 5 6"></polygon>
          <polygon id="Top" fill="#DEDEDE" points="0 3.5 6 0.5 11 3 5 6"></polygon>
        </g>
        <g id="Push-Thing" transform="translate(6, 60)">
          <animateTransform 
            id="push-animation-1"
            attributeName="transform"
            type="translate"
            values="6, 60;6, 54;"
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
            values="6, 54;6, 60;"
            dur="3s"
            begin="push-animation-1.end+2s" 
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <g id="Body" transform="translate(2, 1)">
            <g id="Right">
              <polygon id="Left" fill="#616161" points="5 48 0 45.5 0 0.5 5 3"></polygon>
              <polygon fill="#9C9C9C" points="5 48 6 47.5 6 2.5 5 3"></polygon>
              <polygon id="Top" fill="#DEDEDE" points="0 0.5 1 0 6 2.5 5 3"></polygon>
            </g>
            <g id="Left" transform="translate(0, 1)">
              <polygon fill="#616161" points="1 47 0 46.5 0 1.5 1 2"></polygon>
              <polygon id="Right" fill="#9C9C9C" points="1 47 3 46 3 1 1 2"></polygon>
              <polygon id="Top" fill="#DEDEDE" points="0 1.5 2 0.5 3 1 1 2"></polygon>
            </g>
          </g>
          <g id="Cap" transform="translate(1, 0)">
            <polygon id="Left" fill="#616161" points="4 5 0 3 0 2 4 4"></polygon>
            <polygon id="Right" fill="#9C9C9C" points="4 5 8 3 8 2 4 4"></polygon>
            <polygon id="Top" fill="#DEDEDE" points="0 2 4 0 8 2 4 4"></polygon>
          </g>
        </g>
        <g id="Liquid" transform="translate(7, 48)">
          <polygon id="Left" fill="#093FB3" points="4 16 0 14 0 2 4 4">

            <animate 
              id="liquid-animation-left-1"
              attributeName="points" 
              values="4 16 0 14 0 2 4 4; 4 10 0 8 0 2 4 4;"
              dur="1s"
              begin="0s; liquid-animation-left-4.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-left-2"
              attributeName="points" 
              values="4 10 0 8 0 2 4 4; 4 16 0 14 0 2 4 4;"
              dur="3s"
              begin="liquid-animation-left-1.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-left-3"
              attributeName="points" 
              values="4 16 0 14 0 2 4 4; 4 10 0 8 0 2 4 4;"
              dur="1s"
              begin="liquid-animation-left-2.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-left-4"
              attributeName="points" 
              values="4 10 0 8 0 2 4 4; 4 16 0 14 0 2 4 4;"
              dur="3s"
              begin="liquid-animation-left-3.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />
            <animate 
              id="liquid-animation-left-color-1"
              attributeName="fill" 
              values="#093FB3; #FF6B6B;"
              dur="1s"
              begin="liquid-animation-left-2.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-left-color-2"
              attributeName="fill" 
              values="#FF6B6B; #093FB3;"
              dur="1s"
              begin="liquid-animation-left-4.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />
          </polygon>
          <polygon id="Right" fill="#0050FF" points="4 16 8 14 8 2 4 4">
            <animate 
              id="liquid-animation-right-1"
              attributeName="points" 
              values="4 16 8 14 8 2 4 4; 4 10 8 8 8 2 4 4;"
              dur="1s"
              begin="0s; liquid-animation-right-4.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-right-2"
              attributeName="points" 
              values="4 10 8 8 8 2 4 4; 4 16 8 14 8 2 4 4;"
              dur="3s"
              begin="liquid-animation-right-1.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-right-3"
              attributeName="points" 
              values="4 16 8 14 8 2 4 4; 4 10 8 8 8 2 4 4;"
              dur="1s"
              begin="liquid-animation-right-2.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-right-4"
              attributeName="points" 
              values="4 10 8 8 8 2 4 4; 4 16 8 14 8 2 4 4;"
              dur="3s"
              begin="liquid-animation-right-3.end+2s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-right-color-1"
              attributeName="fill" 
              values="#0050FF; #FF6B6B;"
              dur="1s"
              begin="liquid-animation-right-2.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-right-color-2"
              attributeName="fill" 
              values="#FF6B6B; #0050FF;"
              dur="1s"
              begin="liquid-animation-right-4.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />
           
          </polygon>
          <polygon id="Top" fill="#3875FA" points="0 2 4 0 8 2 4 4">
            <animate 
              id="liquid-animation-top-color-1"
              attributeName="fill" 
              values="#3875FA; #FF6B6B;"
              dur="1s"
              begin="liquid-animation-left-2.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />

            <animate 
              id="liquid-animation-top-color-2"
              attributeName="fill" 
              values="#FF6B6B; #3875FA;"
              dur="1s"
              begin="liquid-animation-left-4.begin+1s" 
              keySplines="0.5 0 0.5 1;"
              keyTimes="0;1"
              calcMode="spline"
              fill="freeze"
            />
          </polygon>
        </g>
        <g id="Outer-Transparent-Plastic" transform="translate(6, 44)">
          <g id="Botttom" opacity="0.50" transform="translate(0, 3)">
            <polygon id="Left" fill="#616161" points="5 35 0 32.5 0 2.5 5 5"></polygon>
            <polygon id="Right" fill="#9C9C9C" points="5 35 10 32.5 10 2.5 5 5"></polygon>
            <polygon id="Top" fill="#DEDEDE" points="0 2.5 5 0 10 2.5 5 5"></polygon>
          </g>
          <g id="Top" transform="translate(2, 0)">
            <polygon id="Left" fill="#616161" points="3 7 0 5.5 0 1.5 3 3"></polygon>
            <polygon id="Right" fill="#9C9C9C" points="3 7 6 5.5 6 1.5 3 3"></polygon>
            <polygon fill="#DEDEDE" points="0 1.5 3 0 6 1.5 3 3"></polygon>
          </g>
        </g>
        <g id="White-Plastic-Inner" transform="translate(9, 33)">
          <polygon id="Left" fill="#D7D7D7" points="2 6.5 1.8189894e-12 5.5 8.07793567e-27 1 2 2"></polygon>
          <polygon id="Right" fill="#F2EEEE" points="2 6.53871837 4 5.53871837 4 1 2 2"></polygon>
          <polygon id="Top" fill="#FFFFFF" points="0 1 2 0 4 1 2 2"></polygon>
        </g>
        <g id="Yellow-Plastic" transform="translate(6, 33)" opacity="0.833333333">
          <g id="Bottom" transform="translate(0, 11)">
            <polygon id="Left" fill="#805428" points="5 6 0 3.5 0 2.5 5 5"></polygon>
            <polygon id="Right" fill="#AE7237" points="5 6 10 3.5 10 2.5 5 5"></polygon>
            <polygon id="Top" fill="#EE9B49" points="0 2.5 5 0 10 2.5 5 5"></polygon>
          </g>
          <g id="Middle" transform="translate(1, 4)">
            <polygon id="Left" fill="#805428" points="4 11 0 9 0 2 4 4"></polygon>
            <polygon id="Right" fill="#AE7237" points="4 11 8 9 8 2 4 4"></polygon>
            <polygon id="Top" fill="#EE9B49" points="0 2 4 0 8 2 4 4"></polygon>
          </g>
          <g id="Top" transform="translate(2, 0)">
            <polygon id="Left" fill="#805428" points="3 7 0 5.5 0 1.5 3 3"></polygon>
            <polygon id="Right" fill="#AE7237" points="3 7 6 5.5 6 1.5 3 3"></polygon>
            <polygon fill="#EE9B49" points="0 1.5 3 0 6 1.5 3 3"></polygon>
          </g>
        </g>
        <g id="White-Plastic" transform="translate(9, 33)">
          <polygon id="Left" fill="#D7D7D7" points="2 3 0 2 0 1 2 2"></polygon>
          <polygon id="Right" fill="#F2EEEE" points="2 3 4 2 4 1 2 2"></polygon>
          <polygon id="Top" fill="#FFFFFF" points="0 1 2 0 4 1 2 2"></polygon>
        </g>
        <g id="Needle-Inner" transform="translate(10, 23)">
          <polygon id="Right" fill="#616161" points="1 0 2 0.5 1 1"></polygon>
          <polygon id="Left" fill="#9C9C9C" points="0 0.5 1 0 1 1"></polygon>
        </g>
        
        <g id="Like" transform="translate(3, 10)" opacity="0">
          <animate 
            id="like-fadein"
            attributeName="opacity" 
            values="0; 1;"
            dur="1s"
            begin="liquid-animation-right-1.begin + 0.2s" 
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <animate
            id="like-fadeout"
            attributeName="opacity" 
            values="1; 0;"
            dur="1s"
            begin="liquid-animation-right-2.begin + 0.5s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />

          <animateTransform 
            id="like-animation-1"
            attributeName="transform"
            type="translate"
            values="3, 10;3, 7;"
            dur="1s"
            begin="liquid-animation-right-1.begin+0s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <g id="Left" transform="translate(0, 1)" fill="#001E60">
            <polygon id="Path" points="0 16 0 9 1 9.5 1 16.5"></polygon>
            <polygon points="7 6.5 6 6 6 5 7 5.5"></polygon>
            <polygon points="9 1.5 8 1 8 0 9 0.5"></polygon>
            <polygon id="Path" points="8 2 8 5 7 4.5 7 1.5"></polygon>
            <polygon points="8 13 7 12.5 7 11.5 8 12"></polygon>
          </g>
          <g id="Top" fill="#5C8BF2">
            <polygon id="Path" points="0 10 6 7 7 7.5 1 10.5"></polygon>
            <polygon id="Path" points="14 4 11 5.5 10 5 13 3.5"></polygon>
            <polygon points="6 6 7 5.5 8 6 7 6.5"></polygon>
            <polygon id="Path" points="8 1 10 0 11 0.5 9 1.5"></polygon>
            <polygon points="7 2.5 8 2 9 2.5 8 3"></polygon>
          </g>
          <g id="Right" transform="translate(1, 0)">
            <path d="M1,12 L3,11 L3,10 L1,11 L1,12 Z M0,17.5 L0,10.5 L6,7.5 L6,8.5 L4,9.5 L4,13.5 L7,12 L7,13 L4,14.5 L4,15.5 L0,17.5 Z" id="Shape" fill="#0050FF"></path>
            <polygon id="Path" fill="#82A9FF" points="3 11 1 12 1 11 3 10"></polygon>
            <polygon id="Path" fill="#0050FF" points="12 11.5 7 14 7 13 12 10.5"></polygon>
            <polygon id="Path" fill="#0050FF" points="10 5.5 13 4 13 10 12 10.5 12 5.5 9 7 9 2 8 2.5 8 1.5 10 0.5"></polygon>
            <polygon fill="#0050FF" points="6 7.5 7 7 7 6 6 6.5"></polygon>
            <polygon id="Path" fill="#0050FF" points="8 2.5 8 5.5 7 6 7 3"></polygon>
            <polygon id="White-Hand" fill="#FFFFFF" points="9 2 9 7 12 5.5 12 10.5 7 13 7 12 4 13.5 4 9.5 6 8.5 6 7.5 7 7 7 6 8 5.5 8 2.5"></polygon>
          </g>
        </g>
        <g id="Heart" transform="translate(6, 13.500000)" opacity="0">
          <animate 
            id="heart-fadein"
            attributeName="opacity" 
            values="0; 1;"
            dur="1s"
            begin="liquid-animation-right-3.begin + 0.2s"
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
            begin="liquid-animation-right-4.begin + 0.5s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <animateTransform 
            id="heart-animation-1"
            attributeName="transform"
            type="translate"
            values="6, 13.5; 6, 9;"
            dur="1s"
            begin="liquid-animation-right-3.begin+0s"
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />

          <g id="Top" fill="#FF9393">
            <polygon points="8 2 9 1.5 10 2 9 2.5"></polygon>
            <polygon points="5 3.5 6 3 7 3.5 6 4"></polygon>
            <polygon points="4 4 5 3.5 6 4 5 4.5"></polygon>
            <polygon points="7 1.5 8 1 9 1.5 8 2"></polygon>
            <polygon points="6 1 7 0.5 8 1 7 1.5"></polygon>
            <polygon points="5 2.5 6 2 7 2.5 6 3"></polygon>
            <polygon points="0 6 1 5.5 2 6 1 6.5"></polygon>
            <polygon points="3 3.5 4 3 5 3.5 4 4"></polygon>
            <polygon points="2 3 3 2.5 4 3 3 3.5"></polygon>
            <polygon points="1 4.5 2 4 3 4.5 2 5"></polygon>
          </g>
          <g id="Left" transform="translate(0, 1)" fill="#BD5050">
            <path d="M0,6 L0,5 L1,5.5 L1,6.5 L2,7 L3,7.5 L4,8 L5,8.5 L5,9.5 L4,9 L3,8.5 L2,8 L1,7.5 L0,7 L0,6 Z" id="Combined-Shape"></path>
            <polygon points="7 1.5 6 1 6 0 7 0.5"></polygon>
            <polygon points="6 3 5 2.5 5 1.5 6 2"></polygon>
            <polygon points="3 3.5 2 3 2 2 3 2.5"></polygon>
            <polygon points="2 5 1 4.5 1 3.5 2 4"></polygon>
          </g>
          <g id="Right" transform="translate(1, 1)" fill="#FF6B6B">
            <path d="M4,8.5 L3,9 L3,8 L2,8.5 L2,7.5 L1,8 L1,7 L0,7.5 L0,6.5 L0,5.5 L1,5 L2,4.5 L2,4 L2,4.5 L1,5 L1,4 L2,3.5 L2,4 L2,3.5 L2,2.5 L3,2 L3,3 L4,2.5 L4,3.5 L5,3 L6,2.5 L6,2 L6,2.5 L5,3 L5,2 L6,1.5 L6,2 L6,1.5 L6,0.5 L7,0 L7,1 L8,0.5 L8,1.5 L9,1 L9,2 L9,3 L8,3.5 L8,4.5 L7,5 L7,6 L6,6.5 L6,7.5 L5,8 L5,9 L4,9.5 L4,8.5 Z"></path>
          </g>
        </g>


        <g id="Needle-Outer" transform="translate(10, 23)">
          <polygon id="Left" fill="#616161" points="1 11 0 10.5 0 0.5 1 1"></polygon>
          <polygon id="Right" fill="#9C9C9C" points="1 11 2 10.5 2 0.5 1 1"></polygon>
        </g>
        <g id="Metrics" transform="translate(6, 49)">
          <g id="Small" transform="translate(0, 3)">
            <polygon id="Left" fill="#000000" points="0.995770673 1.99788534 0 1.5 0 0.5 1.00481303 1.00240651"></polygon>
            <polygon id="Right" fill="#505050" points="8.98823682 2.00588159 10 1.5 10 0.5 8.98414683 1.00792658"></polygon>
          </g>
          <g id="Small" transform="translate(0, 6)">
            <polygon id="Left" fill="#000000" points="0.995770673 1.99788534 0 1.5 0 0.5 1.00481303 1.00240651"></polygon>
            <polygon id="Right" fill="#505050" points="8.98823682 2.00588159 10 1.5 10 0.5 8.98414683 1.00792658"></polygon>
          </g>
          <g id="Small" transform="translate(0, 9)">
            <polygon id="Left" fill="#000000" points="0.995770673 1.99788534 0 1.5 0 0.5 1.00481303 1.00240651"></polygon>
            <polygon id="Right" fill="#505050" points="8.98823682 2.00588159 10 1.5 10 0.5 8.98414683 1.00792658"></polygon>
          </g>
          <g id="Small" transform="translate(0, 15)">
            <polygon id="Left" fill="#000000" points="0.995770673 1.99788534 0 1.5 0 0.5 1.00481303 1.00240651"></polygon>
            <polygon id="Right" fill="#505050" points="8.98823682 2.00588159 10 1.5 10 0.5 8.98414683 1.00792658"></polygon>
          </g>
          <g id="Small" transform="translate(0, 18)">
            <polygon id="Left" fill="#000000" points="0.995770673 1.99788534 0 1.5 0 0.5 1.00481303 1.00240651"></polygon>
            <polygon id="Right" fill="#505050" points="8.98823682 2.00588159 10 1.5 10 0.5 8.98414683 1.00792658"></polygon>
          </g>
          <g id="Small" transform="translate(0, 21)">
            <polygon id="Left" fill="#000000" points="0.995770673 1.99788534 0 1.5 0 0.5 1.00481303 1.00240651"></polygon>
            <polygon id="Right" fill="#505050" points="8.98823682 2.00588159 10 1.5 10 0.5 8.98414683 1.00792658"></polygon>
          </g>
          <g id="Large">
            <polygon id="Left" fill="#000000" points="2.97502312 2.98751156 0 1.5 0 0.5 2.98713198 1.99356599"></polygon>
            <polygon id="Right" fill="#505050" points="6.99572869 3.00213566 10 1.5 10 0.5 7.00915797 1.99542102"></polygon>
          </g>
          <g id="Large" transform="translate(0, 12)">
            <polygon id="Left" fill="#000000" points="2.97502312 2.98751156 0 1.5 0 0.5 2.98713198 1.99356599"></polygon>
            <polygon id="Right" fill="#505050" points="6.99572869 3.00213566 10 1.5 10 0.5 7.00915797 1.99542102"></polygon>
          </g>
        </g>
        <g id="Left-Flop" transform="translate(0, 78)">
          <polygon id="Left" fill="#616161" points="5 7 0 4.5 0 3.5 5 6"></polygon>
          <polygon id="Right" fill="#9C9C9C" points="5 7 11 4 11 3 5 6"></polygon>
          <polygon id="Top" fill="#DEDEDE" opacity="0.904947917" points="0 3.5 6 0.5 11 3 5 6"></polygon>
        </g>
      </g>
    </svg>
  )
}