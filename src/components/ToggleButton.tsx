import react,{useState} from "react";

export const ToggleButton = () =>{
  const [lightMode, setLightMode] = useState(false);
  const [fillColor, setFillColor] = useState('#000');
  const [strokeColor, setStrokeColor] = useState('#B8AE88');
  const [ellipseX, setEllipseX] = useState('34.33');
  const toggleButton = () => {
    setLightMode(!lightMode);
    fillColor == '#000' ? setFillColor('#B8AE88') : setFillColor('#000');
    strokeColor == '#B8AE88' ? setStrokeColor('#000') : setStrokeColor('#B8AE88');
    ellipseX == '34.33' ? setEllipseX('108') : setEllipseX('34.33');
  }
  return (
       <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 70.16"
          height="20"
          width="40"
          preserveAspectRatio="xMidYMid meet"
          className="cursor-pointer"
          onClick={() => {
            toggleButton()
          }}
        >
          <g fill={fillColor} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
            <rect x="2" y="2" width="136" height="66.16" rx="32.7" />
            <ellipse cx={ellipseX} cy="35.08" rx="22.18" ry="22.69" />
          </g>
        </svg>
  )
}