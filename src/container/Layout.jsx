import React from 'react'
import { Header } from '../components/Header'
import { Song } from '../components/Song'
import { MusicList } from './MusicList'
import { album } from '../data/album'

export const Layout = () => {
    return (
        <main className='main'>
            <div  className='main__left'>
                <Header />
                <MusicList />
            </div>
            <div   className='main__right'>
                <div className='main__right__wrapper'>
                    <div className='album'>
                        <figure className='album__image'>
                            <img src="assets/images/cover-sm.png" alt="" />
                        </figure>
                        <div className='album__body'>
                            <h4 className='title-lg'>
                                Aladdin
                            </h4>
                            <p className='headline'>Original Motion Picture Soundtrack</p>
                            <span  className='body'>OST</span>
                        </div>
                    </div>
                    <div className='sound'>
                        <figure className='sound__wave'>
                            <img src="assets/images/wave.png" alt="" />
                        </figure>
                    </div>
                    {
                        album.map((item)=>(
                            <Song key={item.id} id={item.id} title={item.title} artist={item.artist} time={item.time}  />
                        ))
                    }
                </div>
                
                
            </div>
        </main>
    )
}
