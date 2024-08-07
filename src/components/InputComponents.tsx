import { TextInput, StyleSheet } from "react-native";
import { styles } from "../theme/app.theme";

//interface -props
interface Props {
    input: string;
    value: string;
    onChange: (text: string) => void;
}

export const InputComponents = ({ input, value, onChange }: Props) => {

    return (
        <TextInput
            placeholder={input}
            keyboardType='numeric'
            style={styles.inputText}
            value={value}
            onChangeText={onChange}


        />
    )
}
