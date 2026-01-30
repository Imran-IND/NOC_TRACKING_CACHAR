const API = "YOUR_WEB_APP_URL";

if (sessionStorage.role !== "ADMIN") {
  alert("Unauthorized");
  location.href = "index.html";
}

function saveUser() {
  fetch(API + "?action=user", {
    method: "POST",
    body: JSON.stringify({
      requesterRole: sessionStorage.role,
      username: username.value,
      password: password.value,
      role: role.value,
      circle: circle.value,
      status: status.value
    })
  })
  .then(r => r.json())
  .then(d => {
    alert(d.message);
    loadUsers();
  });
}

function loadUsers() {
  fetch(API + "?action=users&role=ADMIN")
    .then(r => r.json())
    .then(data => {
      let html = "<tr><th>User</th><th>Role</th><th>Circle</th><th>Status</th></tr>";
      data.forEach(u => {
        html += `<tr>
          <td>${u[0]}</td>
          <td>${u[2]}</td>
          <td>${u[3]}</td>
          <td>${u[4]}</td>
        </tr>`;
      });
      userTable.innerHTML = html;
    });
}

loadUsers();
