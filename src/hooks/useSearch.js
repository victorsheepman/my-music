import { useState } from "react"
import { songs } from "../data/songs";
export const useSearch =()=>{
    const [state, setState] = useState('');
    const list = songs.filter((song)=>song.name.toLowerCase().includes(state.toLowerCase()))

    return{
        state, setState, list
    }

}