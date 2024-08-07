import { Text, TouchableOpacity } from "react-native";
import { styles } from "../theme/app.theme";

//Interface-props
interface Props {
  textButton: string;
  onPress: () => void;
}

export const ButtonComponent = ({ textButton, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonTextCompo}> {textButton} </Text>
    </TouchableOpacity>
  )
}