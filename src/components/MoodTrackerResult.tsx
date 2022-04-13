import React from "react";
import logo from "../assets/svgs/MoodTrackerLogo.svg";
import excited from "../assets/svgs/excited-face.svg";
import indifferent from "../assets/svgs/indifferent-face.svg";
import sad from "../assets/svgs/sad-face.svg";
import empty from "../assets/svgs/empty-cat-icon.svg";
import { evaluateCurrentMood } from "../utils";

interface ImoodObject {
	icon: string;
	text: string;
	date: string;
	value: string;
}

const moodObject = {
	excited: excited,
	indifferent: indifferent,
	sad: sad,
};

const MoodTrackerResult = ({ results }: { results: ImoodObject[] | [] }) => {
	const emptyMoods = results.length === 0;
	const hasMoods = results.length > 0;

	return (
		<div className="moodTracker__resultContent">
			<article className="moodTracker__resultContent__header">
				<img
					className="moodTracker__resultContent__logoImage"
					src={logo}
					alt=""
				/>
				<span className="moodTracker__resultContent__logoText">
					Cat mood tracker™
				</span>
			</article>
			<h6 className="moodTracker__resultContent__subHeading">MOOD HISTORY</h6>
			{emptyMoods && (
				<div className="moodTracker__resultContent__emptyWrapper">
					<div className="moodTracker__resultContent__emptyContent">
						<img src={empty} alt="" />
						<p>No mood history to show yet</p>
					</div>
				</div>
			)}
			{hasMoods && (
				<ul className="moodTracker__resultContent__resultList">
					{results.map((result: ImoodObject, index: number) => {
						const key = result.value as "excited" | "indifferent" | "sad";
						return (
							<li
								className={`moodTracker__resultContent__resultListItem ${evaluateCurrentMood(
									result.value,
									result.value
								)}`}
							>
								<div className="moodTracker__resultContent__flex">
									<span
										className={`moodTracker__resultContent__mood ${evaluateCurrentMood(
											result.value,
											result.value
										)}`}
									>
										<img src={moodObject[key]} alt="" />
									</span>
									<div className="">
										<p
											className={`moodTracker__resultContent__description ${evaluateCurrentMood(
												result.value,
												result.value
											)}`}
										>
											{result.text}
										</p>
										<span className="moodTracker__resultContent__date">
											06-09-2021 / 07:01
										</span>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default MoodTrackerResult;
