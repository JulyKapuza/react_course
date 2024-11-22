import ImageLogo from '../../public/logo.png'
import Button from './Button';
export default function NoProjectSelected({onClick}){
    return (
      <div className="mt-24 w-2/3 text-center">
        <img
          src={ImageLogo}
          alt="logo"
          className="w-16 h-16 object-contain mx-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project or get started with a new one
        </p>
        <Button onClick={onClick} text="Create new project" darkBtn />
      </div>
    );
}