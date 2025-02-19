class NewGamePage {
  /**
   * @param {import('playwright').Page} page
   */

  // prettier-ignore
  constructor(page) {
    this.page = page;

    this.errorText = page.getByTestId("errorText")
    this.finalRound1TimerInput = page.getByTestId("finalRound1TimerInput")
    this.finalRound1TimerText = page.getByTestId("finalRound1TimerText")
    this.finalRound2TimerInput = page.getByTestId("finalRound2TimerInput")
    this.finalRound2TimerText = page.getByTestId("finalRound2TimerText")
    this.finalRoundAddQuestionButton = page.getByTestId("finalRoundAddQuestionButton")
    this.finalRoundQuestion0AddAnswerButton = page.getByTestId("finalRoundQuestion0AddAnswerButton")
    this.finalRoundQuestion0Answer0Input = page.getByTestId("finalRoundQuestion0Answer0Input")
    this.finalRoundQuestion0Answer1Input = page.getByTestId("finalRoundQuestion0Answer1Input")
    this.finalRoundQuestion0Answer2Input = page.getByTestId("finalRoundQuestion0Answer2Input")
    this.finalRoundQuestion0Answer3Input = page.getByTestId("finalRoundQuestion0Answer3Input")
    this.finalRoundQuestion0Answer4Input = page.getByTestId("finalRoundQuestion0Answer4Input")
    this.finalRoundQuestion0Answer5Input = page.getByTestId("finalRoundQuestion0Answer5Input")
    this.finalRoundQuestion0AnswerPoints0Input = page.getByTestId("finalRoundQuestion0AnswerPoints0Input")
    this.finalRoundQuestion0AnswerPoints1Input = page.getByTestId("finalRoundQuestion0AnswerPoints1Input")
    this.finalRoundQuestion0AnswerPoints2Input = page.getByTestId("finalRoundQuestion0AnswerPoints2Input")
    this.finalRoundQuestion0AnswerPoints3Input = page.getByTestId("finalRoundQuestion0AnswerPoints3Input")
    this.finalRoundQuestion0AnswerPoints4Input = page.getByTestId("finalRoundQuestion0AnswerPoints4Input")
    this.finalRoundQuestion0AnswerPoints5Input = page.getByTestId("finalRoundQuestion0AnswerPoints5Input")
    this.finalRoundQuestion0Input = page.getByTestId("finalRoundQuestion0Input")
    this.finalRoundQuestion0RemoveAnswerButton = page.getByTestId("finalRoundQuestion0RemoveAnswerButton")
    this.finalRoundQuestion0RemoveQuestionButton = page.getByTestId("finalRoundQuestion0RemoveQuestionButton")
    this.finalRoundQuestion1AddAnswerButton = page.getByTestId("finalRoundQuestion1AddAnswerButton")
    this.finalRoundQuestion1Answer0Input = page.getByTestId("finalRoundQuestion1Answer0Input")
    this.finalRoundQuestion1Answer1Input = page.getByTestId("finalRoundQuestion1Answer1Input")
    this.finalRoundQuestion1Answer2Input = page.getByTestId("finalRoundQuestion1Answer2Input")
    this.finalRoundQuestion1Answer3Input = page.getByTestId("finalRoundQuestion1Answer3Input")
    this.finalRoundQuestion1Answer4Input = page.getByTestId("finalRoundQuestion1Answer4Input")
    this.finalRoundQuestion1Answer5Input = page.getByTestId("finalRoundQuestion1Answer5Input")
    this.finalRoundQuestion1AnswerPoints0Input = page.getByTestId("finalRoundQuestion1AnswerPoints0Input")
    this.finalRoundQuestion1AnswerPoints1Input = page.getByTestId("finalRoundQuestion1AnswerPoints1Input")
    this.finalRoundQuestion1AnswerPoints2Input = page.getByTestId("finalRoundQuestion1AnswerPoints2Input")
    this.finalRoundQuestion1AnswerPoints3Input = page.getByTestId("finalRoundQuestion1AnswerPoints3Input")
    this.finalRoundQuestion1AnswerPoints4Input = page.getByTestId("finalRoundQuestion1AnswerPoints4Input")
    this.finalRoundQuestion1AnswerPoints5Input = page.getByTestId("finalRoundQuestion1AnswerPoints5Input")
    this.finalRoundQuestion1Input = page.getByTestId("finalRoundQuestion1Input")
    this.finalRoundQuestion1RemoveAnswerButton = page.getByTestId("finalRoundQuestion1RemoveAnswerButton")
    this.finalRoundQuestion1RemoveQuestionButton = page.getByTestId("finalRoundQuestion1RemoveQuestionButton")
    this.finalRoundQuestion2AddAnswerButton = page.getByTestId("finalRoundQuestion2AddAnswerButton")
    this.finalRoundQuestion2Answer0Input = page.getByTestId("finalRoundQuestion2Answer0Input")
    this.finalRoundQuestion2Answer1Input = page.getByTestId("finalRoundQuestion2Answer1Input")
    this.finalRoundQuestion2Answer2Input = page.getByTestId("finalRoundQuestion2Answer2Input")
    this.finalRoundQuestion2Answer3Input = page.getByTestId("finalRoundQuestion2Answer3Input")
    this.finalRoundQuestion2Answer4Input = page.getByTestId("finalRoundQuestion2Answer4Input")
    this.finalRoundQuestion2Answer5Input = page.getByTestId("finalRoundQuestion2Answer5Input")
    this.finalRoundQuestion2AnswerPoints0Input = page.getByTestId("finalRoundQuestion2AnswerPoints0Input")
    this.finalRoundQuestion2AnswerPoints1Input = page.getByTestId("finalRoundQuestion2AnswerPoints1Input")
    this.finalRoundQuestion2AnswerPoints2Input = page.getByTestId("finalRoundQuestion2AnswerPoints2Input")
    this.finalRoundQuestion2AnswerPoints3Input = page.getByTestId("finalRoundQuestion2AnswerPoints3Input")
    this.finalRoundQuestion2AnswerPoints4Input = page.getByTestId("finalRoundQuestion2AnswerPoints4Input")
    this.finalRoundQuestion2AnswerPoints5Input = page.getByTestId("finalRoundQuestion2AnswerPoints5Input")
    this.finalRoundQuestion2Input = page.getByTestId("finalRoundQuestion2Input")
    this.finalRoundQuestion2RemoveAnswerButton = page.getByTestId("finalRoundQuestion2RemoveAnswerButton")
    this.finalRoundQuestion2RemoveQuestionButton = page.getByTestId("finalRoundQuestion2RemoveQuestionButton")
    this.finalRoundQuestion3AddAnswerButton = page.getByTestId("finalRoundQuestion3AddAnswerButton")
    this.finalRoundQuestion3Answer0Input = page.getByTestId("finalRoundQuestion3Answer0Input")
    this.finalRoundQuestion3Answer1Input = page.getByTestId("finalRoundQuestion3Answer1Input")
    this.finalRoundQuestion3Answer2Input = page.getByTestId("finalRoundQuestion3Answer2Input")
    this.finalRoundQuestion3Answer3Input = page.getByTestId("finalRoundQuestion3Answer3Input")
    this.finalRoundQuestion3Answer4Input = page.getByTestId("finalRoundQuestion3Answer4Input")
    this.finalRoundQuestion3Answer5Input = page.getByTestId("finalRoundQuestion3Answer5Input")
    this.finalRoundQuestion3AnswerPoints0Input = page.getByTestId("finalRoundQuestion3AnswerPoints0Input")
    this.finalRoundQuestion3AnswerPoints1Input = page.getByTestId("finalRoundQuestion3AnswerPoints1Input")
    this.finalRoundQuestion3AnswerPoints2Input = page.getByTestId("finalRoundQuestion3AnswerPoints2Input")
    this.finalRoundQuestion3AnswerPoints3Input = page.getByTestId("finalRoundQuestion3AnswerPoints3Input")
    this.finalRoundQuestion3AnswerPoints4Input = page.getByTestId("finalRoundQuestion3AnswerPoints4Input")
    this.finalRoundQuestion3AnswerPoints5Input = page.getByTestId("finalRoundQuestion3AnswerPoints5Input")
    this.finalRoundQuestion3Input = page.getByTestId("finalRoundQuestion3Input")
    this.finalRoundQuestion3RemoveAnswerButton = page.getByTestId("finalRoundQuestion3RemoveAnswerButton")
    this.finalRoundQuestion3RemoveQuestionButton = page.getByTestId("finalRoundQuestion3RemoveQuestionButton")
    this.finalRoundQuestion4AddAnswerButton = page.getByTestId("finalRoundQuestion4AddAnswerButton")
    this.finalRoundQuestion4Answer0Input = page.getByTestId("finalRoundQuestion4Answer0Input")
    this.finalRoundQuestion4Answer1Input = page.getByTestId("finalRoundQuestion4Answer1Input")
    this.finalRoundQuestion4Answer2Input = page.getByTestId("finalRoundQuestion4Answer2Input")
    this.finalRoundQuestion4Answer3Input = page.getByTestId("finalRoundQuestion4Answer3Input")
    this.finalRoundQuestion4Answer4Input = page.getByTestId("finalRoundQuestion4Answer4Input")
    this.finalRoundQuestion4Answer5Input = page.getByTestId("finalRoundQuestion4Answer5Input")
    this.finalRoundQuestion4AnswerPoints0Input = page.getByTestId("finalRoundQuestion4AnswerPoints0Input")
    this.finalRoundQuestion4AnswerPoints1Input = page.getByTestId("finalRoundQuestion4AnswerPoints1Input")
    this.finalRoundQuestion4AnswerPoints2Input = page.getByTestId("finalRoundQuestion4AnswerPoints2Input")
    this.finalRoundQuestion4AnswerPoints3Input = page.getByTestId("finalRoundQuestion4AnswerPoints3Input")
    this.finalRoundQuestion4AnswerPoints4Input = page.getByTestId("finalRoundQuestion4AnswerPoints4Input")
    this.finalRoundQuestion4AnswerPoints5Input = page.getByTestId("finalRoundQuestion4AnswerPoints5Input")
    this.finalRoundQuestion4Input = page.getByTestId("finalRoundQuestion4Input")
    this.finalRoundQuestion4RemoveAnswerButton = page.getByTestId("finalRoundQuestion4RemoveAnswerButton")
    this.finalRoundQuestion4RemoveQuestionButton = page.getByTestId("finalRoundQuestion4RemoveQuestionButton")
    this.finalRoundQuestion5AddAnswerButton = page.getByTestId("finalRoundQuestion5AddAnswerButton")
    this.finalRoundQuestion5Answer0Input = page.getByTestId("finalRoundQuestion5Answer0Input")
    this.finalRoundQuestion5Answer1Input = page.getByTestId("finalRoundQuestion5Answer1Input")
    this.finalRoundQuestion5Answer2Input = page.getByTestId("finalRoundQuestion5Answer2Input")
    this.finalRoundQuestion5Answer3Input = page.getByTestId("finalRoundQuestion5Answer3Input")
    this.finalRoundQuestion5Answer4Input = page.getByTestId("finalRoundQuestion5Answer4Input")
    this.finalRoundQuestion5Answer5Input = page.getByTestId("finalRoundQuestion5Answer5Input")
    this.finalRoundQuestion5AnswerPoints0Input = page.getByTestId("finalRoundQuestion5AnswerPoints0Input")
    this.finalRoundQuestion5AnswerPoints1Input = page.getByTestId("finalRoundQuestion5AnswerPoints1Input")
    this.finalRoundQuestion5AnswerPoints2Input = page.getByTestId("finalRoundQuestion5AnswerPoints2Input")
    this.finalRoundQuestion5AnswerPoints3Input = page.getByTestId("finalRoundQuestion5AnswerPoints3Input")
    this.finalRoundQuestion5AnswerPoints4Input = page.getByTestId("finalRoundQuestion5AnswerPoints4Input")
    this.finalRoundQuestion5AnswerPoints5Input = page.getByTestId("finalRoundQuestion5AnswerPoints5Input")
    this.finalRoundQuestion5Input = page.getByTestId("finalRoundQuestion5Input")
    this.finalRoundQuestion5RemoveAnswerButton = page.getByTestId("finalRoundQuestion5RemoveAnswerButton")
    this.finalRoundQuestion5RemoveQuestionButton = page.getByTestId("finalRoundQuestion5RemoveQuestionButton")
    this.finalRoundQuestion6Answer0Input = page.getByTestId("finalRoundQuestion6Answer0Input")
    this.finalRoundQuestion6Answer1Input = page.getByTestId("finalRoundQuestion6Answer1Input")
    this.finalRoundQuestion6Answer2Input = page.getByTestId("finalRoundQuestion6Answer2Input")
    this.finalRoundQuestion6Answer3Input = page.getByTestId("finalRoundQuestion6Answer3Input")
    this.finalRoundQuestion6Answer4Input = page.getByTestId("finalRoundQuestion6Answer4Input")
    this.finalRoundQuestion6Answer5Input = page.getByTestId("finalRoundQuestion6Answer5Input")
    this.gamePicker = page.getByTestId("gamePicker")
    this.gamePickerSubmitButton = page.getByTestId("gamePickerSubmitButton")
    this.newGameSubmitButton = page.getByTestId("newGameSubmitButton")
    this.round0Answer0NameInput = page.getByTestId("round0Answer0NameInput")
    this.round0Answer0PointsInput = page.getByTestId("round0Answer0PointsInput")
    this.round0Answer0RemoveButton = page.getByTestId("round0Answer0RemoveButton")
    this.round0Answer1NameInput = page.getByTestId("round0Answer1NameInput")
    this.round0Answer1PointsInput = page.getByTestId("round0Answer1PointsInput")
    this.round0Answer1RemoveButton = page.getByTestId("round0Answer1RemoveButton")
    this.round0Answer2NameInput = page.getByTestId("round0Answer2NameInput")
    this.round0Answer2PointsInput = page.getByTestId("round0Answer2PointsInput")
    this.round0Answer2RemoveButton = page.getByTestId("round0Answer2RemoveButton")
    this.round0Answer3NameInput = page.getByTestId("round0Answer3NameInput")
    this.round0Answer3PointsInput = page.getByTestId("round0Answer3PointsInput")
    this.round0Answer3RemoveButton = page.getByTestId("round0Answer3RemoveButton")
    this.round0Answer4NameInput = page.getByTestId("round0Answer4NameInput")
    this.round0Answer4PointsInput = page.getByTestId("round0Answer4PointsInput")
    this.round0Answer4RemoveButton = page.getByTestId("round0Answer4RemoveButton")
    this.round0Answer5NameInput = page.getByTestId("round0Answer5NameInput")
    this.round0Answer5PointsInput = page.getByTestId("round0Answer5PointsInput")
    this.round0Answer5RemoveButton = page.getByTestId("round0Answer5RemoveButton")
    this.round0AnswerAddButton = page.getByTestId("round0AnswerAddButton")
    this.round0AnswerRemoveButton = page.getByTestId("round0AnswerRemoveButton")
    this.round0QuestionInput = page.getByTestId("round0QuestionInput")
    this.round0QuestionMultiplierInput = page.getByTestId("round0QuestionMultiplierInput")
    this.round1Answer0NameInput = page.getByTestId("round1Answer0NameInput")
    this.round1Answer0PointsInput = page.getByTestId("round1Answer0PointsInput")
    this.round1Answer0RemoveButton = page.getByTestId("round1Answer0RemoveButton")
    this.round1Answer1NameInput = page.getByTestId("round1Answer1NameInput")
    this.round1Answer1PointsInput = page.getByTestId("round1Answer1PointsInput")
    this.round1Answer1RemoveButton = page.getByTestId("round1Answer1RemoveButton")
    this.round1Answer2NameInput = page.getByTestId("round1Answer2NameInput")
    this.round1Answer2PointsInput = page.getByTestId("round1Answer2PointsInput")
    this.round1Answer2RemoveButton = page.getByTestId("round1Answer2RemoveButton")
    this.round1Answer3NameInput = page.getByTestId("round1Answer3NameInput")
    this.round1Answer3PointsInput = page.getByTestId("round1Answer3PointsInput")
    this.round1Answer3RemoveButton = page.getByTestId("round1Answer3RemoveButton")
    this.round1Answer4NameInput = page.getByTestId("round1Answer4NameInput")
    this.round1Answer4PointsInput = page.getByTestId("round1Answer4PointsInput")
    this.round1Answer4RemoveButton = page.getByTestId("round1Answer4RemoveButton")
    this.round1Answer5NameInput = page.getByTestId("round1Answer5NameInput")
    this.round1Answer5PointsInput = page.getByTestId("round1Answer5PointsInput")
    this.round1Answer5RemoveButton = page.getByTestId("round1Answer5RemoveButton")
    this.round1AnswerAddButton = page.getByTestId("round1AnswerAddButton")
    this.round1AnswerRemoveButton = page.getByTestId("round1AnswerRemoveButton")
    this.round1QuestionInput = page.getByTestId("round1QuestionInput")
    this.round1QuestionMultiplierInput = page.getByTestId("round1QuestionMultiplierInput")
    this.round2Answer0NameInput = page.getByTestId("round2Answer0NameInput")
    this.round2Answer0PointsInput = page.getByTestId("round2Answer0PointsInput")
    this.round2Answer0RemoveButton = page.getByTestId("round2Answer0RemoveButton")
    this.round2Answer1NameInput = page.getByTestId("round2Answer1NameInput")
    this.round2Answer1PointsInput = page.getByTestId("round2Answer1PointsInput")
    this.round2Answer1RemoveButton = page.getByTestId("round2Answer1RemoveButton")
    this.round2Answer2NameInput = page.getByTestId("round2Answer2NameInput")
    this.round2Answer2PointsInput = page.getByTestId("round2Answer2PointsInput")
    this.round2Answer2RemoveButton = page.getByTestId("round2Answer2RemoveButton")
    this.round2Answer3NameInput = page.getByTestId("round2Answer3NameInput")
    this.round2Answer3PointsInput = page.getByTestId("round2Answer3PointsInput")
    this.round2Answer3RemoveButton = page.getByTestId("round2Answer3RemoveButton")
    this.round2Answer4NameInput = page.getByTestId("round2Answer4NameInput")
    this.round2Answer4PointsInput = page.getByTestId("round2Answer4PointsInput")
    this.round2Answer4RemoveButton = page.getByTestId("round2Answer4RemoveButton")
    this.round2Answer5NameInput = page.getByTestId("round2Answer5NameInput")
    this.round2Answer5PointsInput = page.getByTestId("round2Answer5PointsInput")
    this.round2Answer5RemoveButton = page.getByTestId("round2Answer5RemoveButton")
    this.round2AnswerAddButton = page.getByTestId("round2AnswerAddButton")
    this.round2AnswerRemoveButton = page.getByTestId("round2AnswerRemoveButton")
    this.round2QuestionInput = page.getByTestId("round2QuestionInput")
    this.round2QuestionMultiplierInput = page.getByTestId("round2QuestionMultiplierInput")
    this.round3Answer0NameInput = page.getByTestId("round3Answer0NameInput")
    this.round3Answer0PointsInput = page.getByTestId("round3Answer0PointsInput")
    this.round3Answer0RemoveButton = page.getByTestId("round3Answer0RemoveButton")
    this.round3Answer1NameInput = page.getByTestId("round3Answer1NameInput")
    this.round3Answer1PointsInput = page.getByTestId("round3Answer1PointsInput")
    this.round3Answer1RemoveButton = page.getByTestId("round3Answer1RemoveButton")
    this.round3Answer2NameInput = page.getByTestId("round3Answer2NameInput")
    this.round3Answer2PointsInput = page.getByTestId("round3Answer2PointsInput")
    this.round3Answer2RemoveButton = page.getByTestId("round3Answer2RemoveButton")
    this.round3Answer3NameInput = page.getByTestId("round3Answer3NameInput")
    this.round3Answer3PointsInput = page.getByTestId("round3Answer3PointsInput")
    this.round3Answer3RemoveButton = page.getByTestId("round3Answer3RemoveButton")
    this.round3Answer4NameInput = page.getByTestId("round3Answer4NameInput")
    this.round3Answer4PointsInput = page.getByTestId("round3Answer4PointsInput")
    this.round3Answer4RemoveButton = page.getByTestId("round3Answer4RemoveButton")
    this.round3Answer5NameInput = page.getByTestId("round3Answer5NameInput")
    this.round3Answer5PointsInput = page.getByTestId("round3Answer5PointsInput")
    this.round3Answer5RemoveButton = page.getByTestId("round3Answer5RemoveButton")
    this.round3AnswerAddButton = page.getByTestId("round3AnswerAddButton")
    this.round3AnswerRemoveButton = page.getByTestId("round3AnswerRemoveButton")
    this.round3QuestionInput = page.getByTestId("round3QuestionInput")
    this.round3QuestionMultiplierInput = page.getByTestId("round3QuestionMultiplierInput")
    this.round4Answer0NameInput = page.getByTestId("round4Answer0NameInput")
    this.round4Answer0PointsInput = page.getByTestId("round4Answer0PointsInput")
    this.round4Answer0RemoveButton = page.getByTestId("round4Answer0RemoveButton")
    this.round4Answer1NameInput = page.getByTestId("round4Answer1NameInput")
    this.round4Answer1PointsInput = page.getByTestId("round4Answer1PointsInput")
    this.round4Answer1RemoveButton = page.getByTestId("round4Answer1RemoveButton")
    this.round4Answer2NameInput = page.getByTestId("round4Answer2NameInput")
    this.round4Answer2PointsInput = page.getByTestId("round4Answer2PointsInput")
    this.round4Answer2RemoveButton = page.getByTestId("round4Answer2RemoveButton")
    this.round4Answer3NameInput = page.getByTestId("round4Answer3NameInput")
    this.round4Answer3PointsInput = page.getByTestId("round4Answer3PointsInput")
    this.round4Answer3RemoveButton = page.getByTestId("round4Answer3RemoveButton")
    this.round4Answer4NameInput = page.getByTestId("round4Answer4NameInput")
    this.round4Answer4PointsInput = page.getByTestId("round4Answer4PointsInput")
    this.round4Answer4RemoveButton = page.getByTestId("round4Answer4RemoveButton")
    this.round4Answer5NameInput = page.getByTestId("round4Answer5NameInput")
    this.round4Answer5PointsInput = page.getByTestId("round4Answer5PointsInput")
    this.round4Answer5RemoveButton = page.getByTestId("round4Answer5RemoveButton")
    this.round4AnswerAddButton = page.getByTestId("round4AnswerAddButton")
    this.round4AnswerRemoveButton = page.getByTestId("round4AnswerRemoveButton")
    this.round4QuestionInput = page.getByTestId("round4QuestionInput")
    this.round4QuestionMultiplierInput = page.getByTestId("round4QuestionMultiplierInput")
    this.round5Answer0NameInput = page.getByTestId("round5Answer0NameInput")
    this.round5Answer0PointsInput = page.getByTestId("round5Answer0PointsInput")
    this.round5Answer0RemoveButton = page.getByTestId("round5Answer0RemoveButton")
    this.round5Answer1NameInput = page.getByTestId("round5Answer1NameInput")
    this.round5Answer1PointsInput = page.getByTestId("round5Answer1PointsInput")
    this.round5Answer1RemoveButton = page.getByTestId("round5Answer1RemoveButton")
    this.round5Answer2NameInput = page.getByTestId("round5Answer2NameInput")
    this.round5Answer2PointsInput = page.getByTestId("round5Answer2PointsInput")
    this.round5Answer2RemoveButton = page.getByTestId("round5Answer2RemoveButton")
    this.round5Answer3NameInput = page.getByTestId("round5Answer3NameInput")
    this.round5Answer3PointsInput = page.getByTestId("round5Answer3PointsInput")
    this.round5Answer3RemoveButton = page.getByTestId("round5Answer3RemoveButton")
    this.round5Answer4NameInput = page.getByTestId("round5Answer4NameInput")
    this.round5Answer4PointsInput = page.getByTestId("round5Answer4PointsInput")
    this.round5Answer4RemoveButton = page.getByTestId("round5Answer4RemoveButton")
    this.round5Answer5NameInput = page.getByTestId("round5Answer5NameInput")
    this.round5Answer5PointsInput = page.getByTestId("round5Answer5PointsInput")
    this.round5Answer5RemoveButton = page.getByTestId("round5Answer5RemoveButton")
    this.round5AnswerAddButton = page.getByTestId("round5AnswerAddButton")
    this.round5AnswerRemoveButton = page.getByTestId("round5AnswerRemoveButton")
    this.round5QuestionInput = page.getByTestId("round5QuestionInput")
    this.round5QuestionMultiplierInput = page.getByTestId("round5QuestionMultiplierInput")
    this.roundAddButton = page.getByTestId("roundAddButton")
  }
}

export { NewGamePage };
