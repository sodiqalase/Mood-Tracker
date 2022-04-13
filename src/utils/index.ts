export const evaluateCurrentMood = (selected: string, value: string) => {
	if (selected === value) {
		if (selected === "excited") {
			return "excited";
		} else if (selected === "indifferent") {
			return "indifferent";
		} else if (selected === "sad") {
			return "sad";
		} else return "";
	} else return "";
};
