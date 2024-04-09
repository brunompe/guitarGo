import { FaCartShopping } from "react-icons/fa6";
import logo from "/assets/logo/2.svg";

export default function Header() {

  return (
    <header className="tw-h-[14%] lg:tw-flex lg:tw-justify-between tw-bg-light-gray lg:tw-p-2 lg:tw-px-10 tw-border-b tw-border-border-gray tw-border-opacity-25 tw-text-xl tw-flex tw-justify-center">
      <div><img src={logo} alt="" className="tw-w-52" /></div>
      <nav className="lg:tw-w-2/3 lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-hidden">
        <ul className="tw-w-full tw-flex tw-items-center tw-justify-evenly">
          <li className="hover:tw-font-nunito-bold tw-w-1/3 tw-flex tw-justify-center tw-items-center">Guitarras</li>
          <li className="hover:tw-font-nunito-bold tw-w-1/3 tw-flex tw-justify-center tw-items-center">Acessórios</li>
          <li className="hover:tw-font-nunito-bold tw-w-1/3 tw-flex tw-justify-center tw-items-center">Meus Pedidos</li>
        </ul>
      </nav>
      <div className="tw-flex tw-justify-center tw-items-center tw-text-3xl tw-text-green"><FaCartShopping /></div>
    </header>
  )
}

