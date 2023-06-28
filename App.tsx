import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Board from "./components/Board";
import { main } from "./constants/Styles";

export default function App() {
	return (
		<SafeAreaView style={main.container}>
			<Board />
			<StatusBar style="light" />
		</SafeAreaView>
	);
}
