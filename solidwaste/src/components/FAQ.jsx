import React from 'react'
import '../App.css'

export default function FAQ() {
  return (
    <div className='flex justify-center items-center flex-col h-[100vh] gap-[2vw]'>
      <div className="w-[80vw]">
      <select className='p-[1vw] w-full rounded-md shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]' defaultValue="all" name="format" id="format">
        <option value={"all"} >{"How can I reduce the amount of waste I produce?"}</option>
        <option value={"all"} >{"Reduce consumption, reuse items when possible, and recycle materials."}</option> 
      </select>
    </div>

    <div className="w-[80vw]">
      <select className='p-[1vw] w-full rounded-md shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]' defaultValue="all" name="format" id="format">
        <option value={"all"}>{"What should I do with recyclable materials in my area?"}</option>
        <option value={"all"} >{"Check local recycling guidelines and use designated recycling bins or facilities"}</option> 
      </select>
    </div>

    <div className="w-[80vw]">
      <select className='p-[1vw] w-full rounded-md shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]' defaultValue="all" name="format" id="format">
        <option value={"all"}>{"Is composting feasible for me, and how do I start?"}</option>
        <option value={"all"} >{"Start small with a compost bin or pile for food scraps and yard waste; many communities offer resources and guidance."}</option> 
      </select>
    </div>

    <div className="w-[80vw]">
      <select className='p-[1vw] w-full rounded-md shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]' defaultValue=".w-fullall" name="format" id="format">
        <option value={"all"}>{"What are some alternatives to single-use plastics?"}</option>
        <option value={"all"} >{" Use reusable bags, bottles, and containers, and choose products with minimal packaging."}</option> 
      </select>
    </div>

    <div className="w-[80vw]">
      <select className='p-[1vw] w-full rounded-md shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]' defaultValue="all" name="format" id="format">
        <option value={"all"}>{"How can I properly dispose of electronic waste (e-waste)?"}</option>
        <option value={"all"} >{" Find e-waste recycling programs or drop-off locations to ensure proper disposal and recycling."}</option> 
      </select>
    </div>

    <div className="w-[80vw]">
      <select className='p-[1vw] w-full rounded-md shadow-[0_10px_20px_rgba(8,_112,_184,_0.7)]' defaultValue="all" name="format" id="format">
        <option value={"all"}>{"Are there any local programs or facilities for hazardous waste disposal?"}</option>
        <option value={"all"} >{" Contact local authorities or waste management agencies for information on hazardous waste disposal options."}</option> 
      </select>
    </div>
    </div>
  )
}
