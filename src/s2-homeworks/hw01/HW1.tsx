import React from 'react'
import Message, {MessagePropsType} from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import groot from './groot.png'
import style from './HW1.module.css'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    },
    message: {
        text: string
        time: string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: groot, // можно менять
        name: 'Groot',  // можно менять
    },
    message: {
        text: 'i am groot', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: groot, // можно менять
        name: 'Groot', // можно менять
    },
    message: {
        text: 'i am groot', // можно менять
        time: '22:05', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={style.border_top}></div>
            <div className={s2.hwTitle}>Hometask №1</div>
            <div className={`${style.border_top} ${style.border_bottom}`}>
                {/*проверка отображения (не менять)*/}
                <div className={s2.messagesBlock}>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
