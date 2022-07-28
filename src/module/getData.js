const table = document.querySelector('#tableBody');
const getdata = async () => {
  const data = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yYoyx8yAiB5KAIvUn2iP/scores/',
  );
  const result = await data.json();
  const dataSet = result.result.sort((a, b) => b.score - a.score);
  dataSet.forEach((item) => {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    const td = document.createElement('td');
    td.innerHTML = `${item.user}:   ${item.score}`;
    tr.appendChild(td);
  });
};
export default getdata;