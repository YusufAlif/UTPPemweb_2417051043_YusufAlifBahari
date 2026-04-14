function sayHello() {
    alert("Halo! Selamat datang di portfolio Yusuf 😎");
}

function validateForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    alert("Pesan berhasil dikirim!");
    return true;
}

