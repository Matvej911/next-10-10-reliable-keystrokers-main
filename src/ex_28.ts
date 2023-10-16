const checkExam = (
  correctAnswers: string[],
  studentAnswers: string[]
): number => {
  const score = studentAnswers.reduce((totalScore, answer, index) => {
    if (answer === "") {
      return totalScore;
    } else if (answer === correctAnswers[index]) {
      return totalScore + 4;
    } else {
      return Math.max(0, totalScore - 1);
    }
  }, 0);
  console.log(score);

  return score;
};

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]); // => 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]); // => 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]); // => 16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]); // => 0
