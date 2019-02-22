import React, { PureComponent } from 'react'
import { theme } from '../site'

const easings = {
  'easeInOutSine': '0.445 0.05 0.55 0.95;',
  'easeOutExpo': '0.19 1 0.22 1;',
  'easeInOutCubic': '0.645 0.045 0.355 1;' 
}

export const SVGGenerator = ({ 
    style = {}, 
    backgroundColor = 'none', 
    borderColor = 'none', 
    borderWidth = 15, 
    path, 
    delay = 1000,
    duration = 25000,
    width = '811px',
    height = '860px',
    viewBox = '0 0 811 860',
    easing= 'easeInOutSine'
  }) => {
  return <svg width={width} height={height} viewBox={viewBox} style={{...style, display: 'block', transform: 'translateZ(0)'}}>
      <path 
        stroke={borderColor} 
        strokeWidth={borderWidth} 
        d={path[0]}
        fill={backgroundColor ? backgroundColor : 'none'}
      >
        { 
          <animate
            calcMode="spline"
            attributeName="d"
            repeatCount="indefinite"
            keySplines={new Array(path.length).fill(easings[easing]).join('')}
            keyTimes={new Array(path.length + 1).fill(path.length).map((length, index) => (index / length)).join(';')}
            values={path.concat(path[0]).join(';')}
            from={path[0]}
            to={path[0]}
            begin={`${delay}ms`}
            dur={`${duration}ms`}
          />
        }
      </path>
  </svg>
}

export const Blob1 = props => <SVGGenerator 
  {...props}
  path={[
    'M157.828971,371.603043 C131.299666,470.391345 264.527522,593.13986 351.571903,619.745207 C438.616285,646.350554 498.964662,634.610778 563.99397,583.476911 C629.023278,532.343045 703.813295,415.666434 619.864639,325.472364 C535.915982,235.278294 437.027751,221.652206 341.756608,227.822787 C246.485464,233.993367 184.358277,272.814742 157.828971,371.603043 Z' ,
    'M188.332396,399.588494 C161.80309,498.376796 239.637887,594.389227 326.682269,620.994573 C413.72665,647.59992 501.716805,607.53707 566.746114,556.403203 C631.775422,505.269337 659.301132,388.940547 575.352476,298.746477 C491.403819,208.552407 429.086439,230.110025 333.815295,236.280606 C238.544151,242.451186 214.861701,300.800193 188.332396,399.588494 Z' ,
    'M159.169009,415.424962 C171.042278,507.702183 259.471332,569.142563 346.515713,595.74791 C433.560094,622.353256 504.379262,591.949642 569.408571,540.815776 C634.437879,489.681909 697.191113,476.209322 613.242457,386.015252 C529.2938,295.821182 397.828751,247.941685 302.557607,254.112266 C207.286463,260.282846 147.295741,323.147742 159.169009,415.424962 Z' ,
  ]} 
/>
    
export const Blob2 = props => <SVGGenerator 
  {...props}
  path={[
    "M559.797443,219.917333 C509.355327,144.072887 144.640056,112.991021 134.20631,299.309687 C123.772565,485.628352 236.883859,589.877966 409.364177,611.253467 C581.844495,632.628968 610.239559,295.761778 559.797443,219.917333 Z",
    "M558.610393,247.999545 C414.434723,164.759683 173.692751,111.514517 145.087678,237.259339 C116.482604,363.00416 235.696809,617.960179 408.177127,639.335679 C580.657445,660.71118 702.786064,331.239407 558.610393,247.999545 Z", 
    "M673.544019,320.644877 C623.025492,216.352242 47.4483134,87.0100107 138.64931,275.289297 C229.850306,463.568583 310.480924,670.562831 434.588273,681.086324 C558.695622,691.609817 724.062546,424.937512 673.544019,320.644877 Z"
  ]} 
/> 

export const LandingPageBlob1 = props => <SVGGenerator 
  borderColor={props.borderColor ? props.borderColor : theme.colors.red}
  backgroundColor={props.backgroundColor ? props.backgroundColor : ''}
  borderWidth={45}
  delay={0}
  style={{position: 'absolute', top: 0, right: 0, zIndex: -1, width: '100vw'}}
  width="1649px" 
  height="748px" 
  viewBox="0 0 1649 748"
  path={[
    "M470,-433.882939 C470,-151.705401 796.078068,170.807568 1090.40826,154.865646 C1384.73846,138.923725 1703.64712,-334.173076 1703.64712,-691.537144 C1703.64712,-1048.90121 1353.68753,-1083.69887 1090.40826,-1069.43877 C827.128996,-1055.17867 470,-716.060478 470,-433.882939 Z",
    "M405.64775,-348.213727 C405.64775,-66.0361889 815.574905,241.367042 1109.9051,225.42512 C1404.23529,209.483198 1710,-208.520822 1710,-565.884891 C1710,-923.248959 1353.68753,-1083.69887 1090.40826,-1069.43877 C827.128996,-1055.17867 405.64775,-630.391265 405.64775,-348.213727 Z",
    "M405.64775,-348.213727 C405.64775,-66.0361889 632.029764,155.433868 946.892813,155.433868 C1261.75586,155.433868 1710,-208.520822 1710,-565.884891 C1710,-923.248959 1353.68753,-1083.69887 1090.40826,-1069.43877 C827.128996,-1055.17867 405.64775,-630.391265 405.64775,-348.213727 Z",
  ]} 
/> 

export const LandingPageBlob2 = props => <SVGGenerator 
  borderColor={theme.colors.green}
  borderColor={props.borderColor ? props.borderColor : theme.colors.green}
  backgroundColor={props.backgroundColor ? props.backgroundColor : ''}
  borderWidth={80}
  delay={0}
  style={{position: 'absolute', top: 0, right: 0, zIndex: -1}}
  width="1649px" 
  height="748px" 
  viewBox="0 0 1649 748"
  path={[
    "M-52,-0.00799416232 C-52,282.169544 231.697221,647.984012 752.761148,647.984012 C1273.82507,647.984012 1703.33804,297.066663 1703.33804,-60.2974053 C1703.33804,-417.661474 1217.49559,-648 752.761148,-648 C288.026709,-648 -52,-282.185532 -52,-0.00799416232 Z",
    "M-27,-81.1161431 C-27,201.061395 231.697221,705.268346 752.761148,705.268346 C1273.82507,705.268346 1645,213.364068 1645,-144 C1645,-501.364068 1217.49559,-648 752.761148,-648 C288.026709,-648 -27,-363.293681 -27,-81.1161431 Z"
  ]} 
/> 

export const LandingPageBlob3 = props => <SVGGenerator
  borderColor={props.borderColor ? props.borderColor : theme.colors.blue}
  backgroundColor={props.backgroundColor ? props.backgroundColor : ''}
  borderWidth={55}
  delay={0}
  style={{position: 'absolute', top: 0, right: 0, zIndex: 1338, mixBlendMode: 'difference'}}
  width="1649px" 
  height="748px" 
  viewBox="0 0 1649 748"
  path={[
    "M298,349.209304 C298,582.833472 514.433141,885.703436 913.790475,885.703436 C1313.14781,885.703436 1410,579.718521 1393,370.851718 C1376,161.984915 1079.18491,-144 723,-144 C366.815092,-144 298,115.585136 298,349.209304 Z",
    "M270.182746,296.792499 C241.880754,557.766106 484.642665,848.819634 884,848.819634 C1283.35733,848.819634 1391.42139,524.802368 1374.42139,315.935565 C1357.42139,107.068762 1079.18491,-144 723,-144 C366.815092,-144 298.484739,35.818892 270.182746,296.792499 Z",
    "M283.792383,315.935565 C283.792383,582.734611 560.147531,848.819634 884,848.819634 C1207.85247,848.819634 1408.80916,558.327863 1374.42139,315.935565 C1340.03362,73.543268 1079.18491,-144 723,-144 C366.815092,-144 283.792383,49.1365201 283.792383,315.935565 Z",
  ]} 
/> 

export const LandingPageBlobs = () => <React.Fragment>
  <LandingPageBlob1/>
  <LandingPageBlob2/>
  <LandingPageBlob3/>
</React.Fragment>

export const MotivationPageBlobs = () => <React.Fragment>
  <LandingPageBlob1  borderColor="red"/>
</React.Fragment>

export const Globe = props => <SVGGenerator 
  backgroundColor={theme.colors.white}
  delay={1000}
  style={{position: 'absolute', top: 0, right: 0, zIndex: -1, width: '100vw'}}
  width="1649px" 
  height="748px" 
  viewBox="0 0 1649 748"
  path={[
    "M470,-433.882939 C470,-151.705401 796.078068,170.807568 1090.40826,154.865646 C1384.73846,138.923725 1703.64712,-334.173076 1703.64712,-691.537144 C1703.64712,-1048.90121 1353.68753,-1083.69887 1090.40826,-1069.43877 C827.128996,-1055.17867 470,-716.060478 470,-433.882939 Z",
    "M405.64775,-348.213727 C405.64775,-66.0361889 815.574905,241.367042 1109.9051,225.42512 C1404.23529,209.483198 1710,-208.520822 1710,-565.884891 C1710,-923.248959 1353.68753,-1083.69887 1090.40826,-1069.43877 C827.128996,-1055.17867 405.64775,-630.391265 405.64775,-348.213727 Z",
    "M405.64775,-348.213727 C405.64775,-66.0361889 632.029764,155.433868 946.892813,155.433868 C1261.75586,155.433868 1710,-208.520822 1710,-565.884891 C1710,-923.248959 1353.68753,-1083.69887 1090.40826,-1069.43877 C827.128996,-1055.17867 405.64775,-630.391265 405.64775,-348.213727 Z",
  ]} 
/> 

export const Iris = props => <SVGGenerator 
  backgroundColor={theme.colors.blue}
  delay={0}
  duration={20000}
  easing={'easeInOutCubic'}
  style={{position: 'absolute', top: 0, right: 0, zIndex: 1337}}
  width="1649px" 
  height="748px" 
  viewBox="0 0 1649 748"
  path={[
    "M515,496.9998 C582.931,496.9998 624.307,441.9318 624.307,373.9998 C624.307,306.0688 582.931,250.9998 515,250.9998 C447.069,250.9998 392,306.0688 392,373.9998 C392,441.9318 447.069,496.9998 515,496.9998",
    "M515,512.9998 C582.931,512.9998 624.307,457.9318 624.307,389.9998 C624.307,322.0688 582.931,266.9998 515,266.9998 C447.069,266.9998 392,322.0688 392,389.9998 C392,457.9318 447.069,512.9998 515,512.9998",
    "M515,496.9998 C582.931,496.9998 624.307,441.9318 624.307,373.9998 C624.307,306.0688 582.931,250.9998 515,250.9998 C447.069,250.9998 392,306.0688 392,373.9998 C392,441.9318 447.069,496.9998 515,496.9998",
    "M495,512.9998 C562.931,512.9998 604.307,457.9318 604.307,389.9998 C604.307,322.0688 562.931,266.9998 495,266.9998 C427.069,266.9998 372,322.0688 372,389.9998 C372,457.9318 427.069,512.9998 495,512.9998",
  ]} 
/> 

export const Lens = props => <SVGGenerator
  backgroundColor={theme.colors.black}
  delay={0}
  duration={20000}
  easing={'easeInOutCubic'}
  style={{position: 'absolute', top: 0, right: 0, zIndex: 1338}}
  width="1649px" 
  height="748px" 
  viewBox="0 0 1649 748"
  path={[
    "M531.5,426.9998 C561.047,426.9998 582.446,403.0478 582.446,373.4998 C582.446,343.9528 561.047,319.9998 531.5,319.9998 C501.953,319.9998 478,343.9528 478,373.4998 C478,403.0478 501.953,426.9998 531.5,426.9998",
    "M531.5,462.9998 C561.047,462.9998 582.446,439.0478 582.446,409.4998 C582.446,379.9528 561.047,355.9998 531.5,355.9998 C501.953,355.9998 478,379.9528 478,409.4998 C478,439.0478 501.953,462.9998 531.5,462.9998",
    "M531.5,426.9998 C561.047,426.9998 582.446,403.0478 582.446,373.4998 C582.446,343.9528 561.047,319.9998 531.5,319.9998 C501.953,319.9998 478,343.9528 478,373.4998 C478,403.0478 501.953,426.9998 531.5,426.9998",
    "M481.5,462.9998 C511.047,462.9998 532.446,439.0478 532.446,409.4998 C532.446,379.9528 511.047,355.9998 481.5,355.9998 C451.953,355.9998 428,379.9528 428,409.4998 C428,439.0478 451.953,462.9998 481.5,462.9998",
  ]} 
/> 



const StaticEye = (props) => <svg width="1649px" height="748px" viewBox="0 0 1649 748" {...props}>
    <path d="M453.7432,657.9998 C296.7522,657.9998 296.7522,89.9998 453.7432,89.9998 C610.7342,89.9998 738.0002,217.1508 738.0002,373.9998 C738.0002,530.8488 610.7342,657.9998 453.7432,657.9998" id="Shadow" fillOpacity="0.3" fill="#FFFFFF"></path>
    <path d="M475.2568,657.9998 C632.2478,657.9998 632.2478,89.9998 475.2568,89.9998 C318.2658,89.9998 190.9998,217.1508 190.9998,373.9998 C190.9998,530.8488 318.2658,657.9998 475.2568,657.9998" id="Globe" fill="#FFFFFF"></path>
</svg>



export const Eye = (props) => <figure style={{position: 'absolute', top: 0, left: 0, ...props.style}}>
  <StaticEye  />
  <Iris />
  <Lens />
</figure>

export const RGBCircles = (props) => <React.Fragment>
  <Blob2
    borderColor={theme.colors.red} 
    borderWidth={5}
    delay={0}
    height={2000}
    width={2000}
    style={{position: 'absolute', top: -1000, right: -800, zIndex: 1113, mixBlendMode: 'difference' }} 
  />
  <Blob2
    borderColor={theme.colors.green} 
    borderWidth={10}
    delay={500}
    height={3000}
    width={2000}
    style={{position: 'absolute', top: -1010, right: -810, zIndex: 1112, mixBlendMode: 'difference' }} 
  />
  <Blob2
    borderColor={theme.colors.blue} 
    borderWidth={20}
    delay={1000}
    height={4000}
    width={2000}
    style={{position: 'absolute', top: -1020, right: -820, zIndex: 1111, mixBlendMode: 'difference' }} 
  />
</React.Fragment>

export const Eyes = (props) => <React.Fragment>
  <Blob1
    backgroundColor={'black'}
    delay={0}
    style={{position: 'absolute', top: 30, left: -50, zIndex: 5 }} 
  />
  <Blob1
    backgroundColor={'blue'}
    delay={0}
    style={{position: 'absolute', top: 30, left: -50, zIndex: 4 }} 
  />
  <Blob1 
    backgroundColor={'white'}
    delay={0}
    style={{position: 'absolute', top: 40, left: -40, zIndex: 3 }} 
  />

  <Blob2
    backgroundColor={'black'}
    delay={0}
    style={{position: 'absolute', top: 20, right: 0, zIndex: 5 }} 
  />
  <Blob2
    backgroundColor={'blue'}
    delay={0}
    style={{position: 'absolute', top: 30, right: -10, zIndex: 4 }} 
  />
  <Blob2
    backgroundColor={'white'}
    delay={0}
    style={{position: 'absolute', top: 40, right: -40, zIndex: 3 }} 
  />
</React.Fragment>

export const EyesDown = (props) => <React.Fragment>
  <Blob1
    backgroundColor={'black'}
    delay={0}
    style={{position: 'absolute', top: 160, left: 80, zIndex: 5 }} 
  />
  <Blob1
    backgroundColor={'blue'}
    delay={0}
    style={{position: 'absolute', top: 130, left: 60, zIndex: 4 }} 
  />
  <Blob1 
    backgroundColor={'white'}
    delay={0}
    style={{position: 'absolute', top: 40, left: -40, zIndex: 3 }} 
  />

  <Blob2
    backgroundColor={'black'}
    delay={0}
    style={{position: 'absolute', top: 160, right: 80, zIndex: 5 }} 
  />
  <Blob2
    backgroundColor={'blue'}
    delay={0}
    style={{position: 'absolute', top: 130, right: 60, zIndex: 4 }} 
  />
  <Blob2
    backgroundColor={'white'}
    delay={0}
    style={{position: 'absolute', top: 40, right: -40, zIndex: 3 }} 
  />
</React.Fragment>