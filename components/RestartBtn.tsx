import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export interface btnProps {
	onPress: () => void;
}

export const RestartBtn = ({ onPress }: btnProps) => (
	<TouchableOpacity onPress={onPress}>
		<Icon name="refresh" size={40} color="#fff" />
	</TouchableOpacity>
);
