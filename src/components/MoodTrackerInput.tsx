import React, { useState } from "react";
import logo from "../assets/svgs/MoodTrackerLogo.svg";
import excited from "../assets/svgs/excited-face.svg";
import indifferent from "../assets/svgs/indifferent-face.svg";
import sad from "../assets/svgs/sad-face.svg";
import { evaluateCurrentMood } from "../utils";

interface ImoodObject {
	icon: string;
	text: string;
	date: string;
	value: string;
}

const moods: Array<ImoodObject> = [
	{
		icon: sad,
		text: "Cat wasn't having it",
		date: "06-09-2021 / 07:01",
		value: "sad",
	},
	{
		icon: indifferent,
		text: "Cat was indifferent",
		date: "06-09-2021 / 07:01",
		value: "indifferent",
	},
	{
		icon: excited,
		text: "Cat was super excited!",
		date: "06-09-2021 / 07:01",
		value: "excited",
	},
];

const MoodTrackerInput = ({
	setResults,
}: {
	setResults: React.Dispatch<React.SetStateAction<ImoodObject[] | []>>;
}) => {
	const [selectedMood, setSelectedMood] = useState<ImoodObject | null>(null);

	const isDisabled = !selectedMood;

	return (
		<div className="moodTracker__inputContent">
			<img src={logo} className="moodTracker__inputContent__logo" alt="" />
			<h6 className="moodTracker__inputContent__question">
				What is your cat’s current mood?
			</h6>
			<div className="moodTracker__inputContent__moodGrid">
				{moods.map((mood: ImoodObject, index: number) => (
					<button
						onClick={() => {
							setSelectedMood(mood);
						}}
						className={`moodTracker__inputContent__mood ${evaluateCurrentMood(
							selectedMood?.value ?? "",
							mood.value
						)}`}
					>
						<img src={mood.icon} alt={mood.text} />
					</button>
				))}
			</div>
			<p
				className={`moodTracker__inputContent__description ${evaluateCurrentMood(
					selectedMood?.value ?? "",
					selectedMood?.value ?? ""
				)}`}
			>
				{selectedMood?.text ?? ""}
			</p>
			<button
				disabled={isDisabled}
				onClick={() => {
					setResults((prev: ImoodObject[] | []): any => {
						const newResults = [selectedMood, ...prev!];
						return newResults;
					});
					setSelectedMood(null);
				}}
				className={`moodTracker__inputContent__button ${
					isDisabled ? "inactive" : ""
				}`}
			>
				Save mood
			</button>
		</div>
	);
};

export default MoodTrackerInput;
