import { useState } from "react"
// import somLogoPNG from "../../assets/som blood bank logo.png"
import { Link, NavLink } from "react-router-dom"
import Home from "./Home"

export default function Head() {

    const [isOpen, setIsOpen] = useState(false)

    const HandleIsOpen = () => {
        setIsOpen(true)
    }

    const HandleIsClose = () => {
        setIsOpen(false)
    }


    return <div
    ><div className="sticky top-0 bg-whi bg-slate-600">
        {/* big screen section */}

        <div style={{ border: isOpen === true ? "none" : "" }} className="sm:px-5 flex justify-between sm:items-center border-b-2 border-fourthColor shadow-sm max-w-[1640px] mx-auto">
            <div>
                {/* <Link to="/"><img className="sm:w-24 w-28" src={somLogoPNG} /></Link> */}
                <Link>Complaints</Link>
            </div>
            <i onClick={HandleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-6xl text-seconderyColor flex sm:hidden absolute top-7 right-5 fa-bars"></i>
            <i onClick={HandleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-6xl text-seconderyColor hidden absolute top-7 right-6 fa-xmark"></i>

            <div className="sm:flex hidden text-3xl space-x-10 font-semibold font-mono text-primeryColo text-red-600">
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Blog</NavLink>
            </div>


            <div className="sm:flex hidden">
                <Link to="/donateblood" className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">Donate Blood</Link>
            </div>

        </div>

        {/* samll screen section */}

        <div style={{ display: isOpen === true ? "block" : "" }} className="hidden border-b-2 border-fourthColor shadow-sm">
            <ul className="sm:hidden text-3xl space-y-5 pl-4 font-semibold font-mono text-primeryColor">
                <li className="hover:bg-fourthColor">Home</li>
                <li className="hover:bg-fourthColor">About</li>
                <li className="hover:bg-fourthColor">Blog</li>
            </ul>


            <div className="sm:hidden pl-4 pt-5 pb-3">
                <button className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">Donate Blood</button>
            </div>
        </div>

    </div>
<div>
{/* <Home /> */}
</div>
    </div> 
}


