import React,{useContext} from 'react'
import { songs } from '../data/songs'
import {Card} from '../components/Card';
import { AppContext } from '../context/AppContext';
export const MusicList = () => {
    const {list}=useContext(AppContext)
    console.log(list);
    let data;
    if(list.length > 0){
        data = list;
    }else{
        data = songs
    }
    return (
        <>
        <h3 className='title-lg'>Original Soundtrack</h3>
        <div className="grid">
            
            {data.map(song =>(
                <Card {...song} key={song.id} className={`col-${song.id}`} />
            ))}
        </div>
        </>
    )
}
