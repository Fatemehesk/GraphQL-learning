async function fetchFunc() {
  const response = await fetch("http://localhost:9000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ query: "query{greeting}" }),
  });
  const {data} = await response.json();
  console.log("body",data);
  return data;
}
fetchFunc().then(res=>{
    document.getElementById('text').textContent=res.greeting;
});