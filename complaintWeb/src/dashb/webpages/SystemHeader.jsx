import { useState } from "react"

function SystemHeader() {

    const [isDown, setIsDown] = useState(false)

    const handleIsDown = () => {
        setIsDown(true)
    }

    const handleIsUp = () => {
        setIsDown(false)
    }

    return <div className="ml-[18%] border border-gray-100 shadow-md p-4 ">
        <h1 className="text-xl font-semibold text-seconderyColor">On<span className="text-fourthColor">line</span> complaints</h1>
        {/* <i class="fa-regular absolute text-2xl text-seconderyColor right-36  top-4 fa-bell">
            <div className="bg-primeryColor w-8 h-5 rounded-lg absolute -top-2 left-2">
                <p className="text-sm pl-2 text-textColor">12</p>
                </div>
        </i> */}

        {/* <div className="absolute top-4 right-12 flex border border-gray-100">
            <div className="bg-primeryColor w-8 h-8 rounded-full">
                <h1 className="text-2xl pl-2 cursor-pointer text-textColor">A</h1>
            </div>
            <i onClick={handleIsDown} class="fa-solid text-xl text-gray-400 pl-3 fa-chevron-down"></i>
        </div> */}

        {/* <div style={{ display: isDown === true ? "block" : "" }} className="bg-primeryColor w-32 h-32 hidden absolute right-16 rounded-lg top-16">
            <i onClick={handleIsUp} class="fa-solid text-xl text-textColor pl-[5.3em] fa-xmark"></i>
            <div className="text-textColor text-xl pl-5"><i class="fa-regular fa-user"></i> Profile</div>
            <div className="text-textColor pt-5 text-xl pl-5"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</div>
        </div> */}

    </div>
}

export default SystemHeader