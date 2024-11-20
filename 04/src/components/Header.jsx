import logo from '../assets/logo.png';
import './Header.css'



export default function Header() {
  return (
    <header className='flex flex-col items-center mt-t mb-16'>
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44' />
      <h1 className="text4xl font-semibold tracking-widest text-center uppercase text-amber-800">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
