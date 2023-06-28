import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { main } from "../constants/Styles";
import Card, { cardProps } from "./Card";
import { shuffle } from "../constants/Utils";
import { RestartBtn } from "./RestartBtn";

const cards = ["💙", "❤️", "🤍", "🖤", "💚", "🧡"];

const Board = () => {
	const [board, setBoard] = useState(() => shuffle([...cards, ...cards]));
	const [sCard, setCards] = useState<any[]>([]);
	const [mCards, setMatch] = useState<any[]>([]);
	const [score, setScore] = useState(0);
	const [won, setWin] = useState(false);

	useEffect(() => {
		if (sCard.length < 2) return;
		if (board[sCard[0]] === board[sCard[1]]) {
			setMatch([...mCards, ...sCard]), setCards([]);
		} else {
			const timeoutId = setTimeout(() => setCards([]), 1000);
			return () => clearTimeout(timeoutId);
		}
	}, [sCard]);

	const tap = (i: number) => {
		if (sCard.length >= 2 || sCard.includes(i)) return;
		setCards([...sCard, i]), setScore(score + 1);
	};

	const restartGame = () => {
		setBoard(shuffle([...cards, ...cards])), setCards([]), setMatch([]), setScore(0), setWin(false);
	};

	useEffect(() => {
		if (mCards.length === board.length) setWin(true);
	}, [mCards, board.length]);

	return (
		<View style={main.container}>
			<Text style={main.title}>{won ? "You Won ❤️💙💜" : "Flip the Cards"}</Text>
			<Text style={main.title}>Attempts: {score}</Text>
			<View style={main.board}>
				{board.map((card: cardProps, i: number) => {
					return (
						<Card key={i} state={sCard.includes(i) || mCards.includes(i)} onPress={() => tap(i)}>
							{card}
						</Card>
					);
				})}
			</View>
			{won && <RestartBtn onPress={restartGame} />}
		</View>
	);
};

export default Board;
