document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  // const userName = document.querySelector("#userName").value;
  // const res = await fetch(`/api?student=${userName}`)
  const res = await fetch('/api');
  const data = await res.json();
  console.log(data);
  document.querySelector('#bestChoice').textContent = data.choice1;
  document.querySelector('#second').textContent = data.choice2;
  document.querySelector('#third').textContent = data.choice3;
  document.querySelector('#fourth').textContent = data.choice4;
  // console.log(data);
  // document.querySelector("#personName").textContent = data.name
  // document.querySelector("#personStatus").textContent = data.status
  // document.querySelector("#personOccupation").textContent = data.currentOccupation
}