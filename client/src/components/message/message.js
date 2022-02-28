import React from 'react'
import './message.css'

export default function message({own}) {
    return (
        <div className={own?"message own":"message"}>
            <div className="messageTop">
                <img className='messageImg' src='https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg' alt='' />
                <p className='messageText'>Les voyages enrichissent donc nos connaissances sur les autres, sur le monde et sur nous-mêmes. </p>
            </div>
            <div className="messageBotom">
                1 hour ago
            </div>
        </div>
    )
}
