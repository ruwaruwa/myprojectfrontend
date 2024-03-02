import React, { useEffect, useState } from 'react'
import SideNav from '../SideNav'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SystemHeader from './SystemHeader'

export default function Users() {
    const [getusers,setgtUsers]=useState([])

    const handleGEttusers=()=>{
        axios.get('http://localhost:3000/admin/register/get').then((response)=>{
setgtUsers(response.data)
console.log(response.data)
        })
    }
    //use
    useEffect(()=>{
handleGEttusers()
    },[])

    const handleserach=(id)=>{
        const key =id.target.value;
        if(key){
          axios.get(`http://localhost:3000/user/search/${key}`).then((response)=>{
            setgtUsers(response.data)
      console.log(response.data.username)
       
          }).catch((error)=>{
            console.log(error)
          })
        }
        else 
        handleGEttusers();
        }

  return (
    <div>
          <div>
        <SideNav/>
        <SystemHeader/>
        <div className='pt-4'>
        <div className="bg-fourthColor pb-4 mb-3 w-[75%] h-[70%] ml-[22%] pt-20 rounded-2xl shadow-2xl">
            <div className="flex justify-between px-2 pb-3">
                <h1 className="text-3xl text-textColor font-semibold pt-4">Users</h1>
                <input onChange ={handleserach} type="text" className="outline-none mt-5 w-40 h-7 border-2 border-fourthColor rounded-lg p-2" placeholder="Search ..." />
            </div>
            <hr className="border-b border-thirdColor" />
            <table className="table- auto w-full mt-4">
                <thead className="border-b border-thirdColor">
                    <tr className="text-textColor text-center  font-medium">
                        <th className="py-2">FullName</th>
                        {/* <th className="py-2">Address</th> */}
                        <th className="py-2">Email</th>
                        {/* <th className="py-2">Phone</th> */}
                        {/* <th className="py-2">Gender</th>
                        <th className="py-2">Age</th>
                        <th className="py-2">BloodType</th> */}
                        <th className="py-2">Action</th>
                        
                    </tr>
                </thead>

                {
                    getusers.length > 0 ? getusers.map((data) => {
                        return <tbody className="border-b border-thirdColor">
                            <tr className="text-textColor text-center">
                                {/* <td className="py-4">hh</td>
                                <td className="py-4">hdsh</td>
                                <td className="py-4">ddh</td> */}
                                <td className="py-4">{data.username}</td>
                                <td className="py-4">{data.password}</td>
                               <Link>
                               <td className="py-4"> <i class="fa-solid fa-pen-to-square text-primeryColor text- 2xl"></i>
                                  </td>
                               </Link>
                                <td className="py-4"><i onClick={() => handleDeleteDonor(data._id)} class="fa-solid cursor-pointer fa-trash-can text-primeryColor"></i></td>
                            </tr>
                        </tbody>
                    })
                    :
                    <p className="text-textColor">There is no data yet</p>
                }
                
            </table>
            <button className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-2 right-32">prev</button>
            <button  className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-2 right-5">next</button>
       
        </div>
        </div>
    </div>
    </div>
  )
}
