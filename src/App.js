import { Layout } from 'antd';
import HeaderMenu from './components/HeaderMenu';
import './styles.css';

function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('#263344') });

function App() {
  return (
    <HeaderMenu/>
  );
}

export default App;
