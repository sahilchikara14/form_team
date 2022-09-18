import React,{useEffect} from 'react'
import Data from '../mockData/data.json'
import { useDispatch, useSelector } from "react-redux";
import MemberComponent from './MemberComponent';
import { setMembers } from '../redux/actions/MemberAction';

const MemberList = () => {

    const members = useSelector((state)=>state );
    const dispatch = useDispatch()


    const fetchMembers=()=>{
        const data=Data;
        dispatch(setMembers(data));
        
    }

     useEffect(()=>{
        fetchMembers();
    },[])

  return (
    
        <MemberComponent/>
    
  )
}

export default MemberList