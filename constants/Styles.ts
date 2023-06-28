import { StyleSheet, ViewStyle } from "react-native";

const baseCardStyles: ViewStyle = {
	height: 100,
	width: 100,
	margin: 10,
	borderColor: "#334155",
	borderRadius: 25,
	backgroundColor: "#1e293b",
	alignItems: "center",
	justifyContent: "center",
};

export const card = StyleSheet.create({
	base: { ...baseCardStyles },
	down: { ...baseCardStyles, borderWidth: 10 },
	text: { fontSize: 46, color: "#334155" },
});

export const main = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#0f172a", alignItems: "center", justifyContent: "flex-start" },
	board: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap" },
	title: { fontSize: 32, fontWeight: "900", color: "snow", marginVertical: 15 },
});
