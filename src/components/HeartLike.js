import React, { PureComponent } from 'react'

export const HeartLike = ({width = 202, height = 102, viewBox, style, delay = 0  }) => {
  const id = Math.floor(Math.random() * Math.random() * 1337)

  return (
    <svg width={width} height={height} viewBox="0 0 22 102" style={{...style, display: 'block', overflow: 'visible'}}>
        <g id="Like" transform="translate(3, 10)" opacity="0">
          <animate 
            id={`like-fadein-${id}`}
            attributeName="opacity" 
            values="0; 1;"
            dur="5.5s"
            begin={`${delay}ms; heart-fadeout-${id}.end+1s`}
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <animate
            id={`like-fadeout-${id}`}
            attributeName="opacity" 
            values="1; 0;"
            dur="5.5s"
            begin={`like-fadein-${id}.end+1s`}
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
            id={`heart-fadein-${id}`}
            attributeName="opacity" 
            values="0; 1;"
            dur="5.5s"
            begin={`like-fadeout-${id}.end+1s`}
            keySplines="0.5 0 0.5 1;"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
          />
          <animate
            id={`heart-fadeout-${id}`}
            attributeName="opacity" 
            values="1; 0;"
            dur="5.5s"
            begin={`heart-fadein-${id}.end+1s`}
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
    </svg>
  )
}