import { useNavigation } from "@react-navigation/native";
import { CHAT_SCREEN } from "../../router/constants";
import { MainAppNavigationProp } from "../../components/MainAppContainer";

type PropType = {
    uid: string,
}

const useChatViewController = ({uid}: PropType) => {
    const navigation = useNavigation<MainAppNavigationProp>()
    const onPress = () => {
        navigation.push(CHAT_SCREEN, {uid: uid})
    }

    return {
        onPress
    }
}

export default useChatViewController;