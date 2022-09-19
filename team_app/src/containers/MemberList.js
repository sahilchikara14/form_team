import React, { useEffect, useState } from 'react'
import Data from '../mockData/data.json'
import { useDispatch, useSelector } from "react-redux";
import MemberComponent from './MemberComponent';
import { setMembers } from '../redux/actions/MemberAction';
import "./MemberList.css";


const MemberList = () => {

    const [text,setText]=useState("")

    const members = useSelector((state) => state);
    const dispatch = useDispatch()

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const showText=(e)=>{
        console.log(text)
    }


    const fetchMembers = () => {
        const data = Data;
        dispatch(setMembers(data));

    }

    useEffect(() => {
        fetchMembers();
    }, [])

    return (
        <>
     	<div className="search_wrap search_wrap_1">
			<div className="search_box">
				<input type="text" onChange={(e)=>handleChange(e)}   className="input" placeholder="search..."/>
				
					<button onClick={(e)=>showText(e)} className="btn btn_common" >Search</button>
				
			</div>
		</div>

     <MemberComponent />
        </>

    )
}

export default MemberList