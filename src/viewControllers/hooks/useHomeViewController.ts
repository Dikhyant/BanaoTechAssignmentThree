import { ChatType } from "../../components/common/Chat"

type ReturnType = {
    chats: ChatType
}

const useHomeViewController = ():ReturnType => {
    let chats: ChatType
    return {
        chats
    }
}

export default useHomeViewController