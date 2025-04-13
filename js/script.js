document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  Swal.fire({
    title: "🎉 Selamat!",
    text: "Kamu resmi jadi programmer... yang tetap ogah ngoding.",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#00f0ff",
    background: "#1e1e2f",
    color: "#fff"
  });
});
