import React, { useEffect , useState } from 'react'
import axios from 'axios'

const Chat = () => {

    const [chat, setChat] = useState([]);
   
    const fetchChats = async () =>{
        const {data} = await axios.get('http://localhost:5000/chat');

        console.log(data);
        setChat(data.data)

    }

    useEffect(() => {
        fetchChats();
    }, [])
    


  return (
    <div>
    {
         chat.map((chat,i)=>{
            return <div key={chat.id}>{chat.chatName}</div>
         })
    }
    
    </div>
  )
}

export default Chat