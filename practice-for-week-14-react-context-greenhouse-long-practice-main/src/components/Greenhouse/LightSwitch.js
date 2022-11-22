import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext'; 

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const onDayClick = (e) => {
    e.preventDefault()
    setThemeName("day")
  }

  const onNightClick = (e) => {
    e.preventDefault()
    setThemeName("night")
  }


  return (
    <div className="light-switch day" >
      <div className="on" onClick={onDayClick}>DAY</div>
      <div className="off" onClick={onNightClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;