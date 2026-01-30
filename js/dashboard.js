fetch(API_URL + "?action=list&role=" +
  sessionStorage.role +
  "&circle=" +
  sessionStorage.circle)
.then(r => r.json())
.then(data => {
  let html = "<tr><th>ID</th><th>Status</th><th>Days</th></tr>";
  data.forEach(r => {
    let cls = r[5] > 30 ? "red" : r[5] > 15 ? "yellow" : "";
    html += `<tr class="${cls}">
      <td>${r[0]}</td>
      <td>${r[3]}</td>
      <td>${r[5]}</td>
    </tr>`;
  });
  tbl.innerHTML = html;
});
