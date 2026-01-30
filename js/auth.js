function login() {
  fetch(API_URL + "?action=login", {
    method: "POST",
    body: JSON.stringify({
      username: u.value,
      password: p.value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (!d.success) return alert("Invalid login");
    sessionStorage.setItem("role", d.role);
    sessionStorage.setItem("circle", d.circle);
    location.href = "dashboard.html";
  });
}
