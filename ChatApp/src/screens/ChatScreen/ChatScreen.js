import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import io from "socket.io-client";
import { ActionsContainer, IconComponent, MessageContainer, MessageInput } from './styles';

export default function ChatScreen() {

    const [message, setMessage] = useState([])
    useEffect(() => {
        const socket = io('http://10.0.0.198:3000/')

        socket.on("chat message", msg => {
            setMessage({
                message: [...message, msg]
            });
        }, []);
    })
    
    return (
        <MessageContainer>
            <ActionsContainer>
                <IconComponent name="plus" />
                <MessageInput />
                <IconComponent name="send" />
            </ActionsContainer>
        </MessageContainer>
    )
}
