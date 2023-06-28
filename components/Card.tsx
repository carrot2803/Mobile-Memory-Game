import * as React from "react";
import { Text, Pressable } from "react-native";
import { card } from "../constants/Styles";

export interface cardProps {
	onPress: () => void;
	state: boolean;
	children: any;
}

export default function Card({ onPress, state, children }: cardProps) {
	return (
		<Pressable style={state ? card.base : card.down} onPress={onPress}>
			{state ? <Text style={card.text}>{children}</Text> : <Text style={card.text}>?</Text>}
		</Pressable>
	);
}
