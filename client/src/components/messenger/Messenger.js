import React from 'react'
import "./messenger.css"
import NavUser from "../topbar/NavUser"
import Conversation from '../conversations/conversation'
import Message from '../message/message'
import ChatOnline from '../chatOnline/chatOnline'
export default function Messenger() {
    return (

        <div> <NavUser />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder='serach for friends' className='chatMenuInput' />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true}/>
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
<textarea  className='chatMessageInput' placeholder='write some thiing'></textarea>
<button className='chatSubmitButton'>send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </div>
    )
}
