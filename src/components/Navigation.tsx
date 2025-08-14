import HeroLogo from "../assets/heroimgg.svg";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between">
        <img src={HeroLogo} className="w-[100px] h-[50px]" alt="Hero Logo" />
        <div className="text-pry font-medium flex gap-x-2 items-center text-sm">
            <p>About Us</p>
            <p>Services</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Navigation
