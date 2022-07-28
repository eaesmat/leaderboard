const addScore = async (inputName, inputScore) => {
  const id = 'yYoyx8yAiB5KAIvUn2iP';
  const result = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        user: `${inputName}`,
        score: inputScore,
      }),
    },
  );
  await result.json();
  if (result.ok === true && result.status === 201) {
    return true;
  // eslint-disable-next-line brace-style
  }
  // eslint-disable-next-line no-else-return
  else {
    return false;
  }
};
export default addScore;