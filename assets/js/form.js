document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const cabang = document.getElementById("cabang").value;
    const spec = document.getElementById("spec").value;
    const layanan = document.getElementById("layanan").value;

    const errorMessages = [];

    if (name === "" || name === "!@#$%^&*()_+-=][\|/?><") {
        errorMessages.push("Nama tidak boleh kosong dan tidak boleh berisi karakter bukan huruf.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMessages.push("Email tidak valid.");
    }

    if (!cabang) {
        errorMessages.push("Pilih cabang terdekat.");
    }

    if (!spec) {
        errorMessages.push("Pilih spesialis yang diinginkan.");
    }

    if (!layanan) {
        errorMessages.push("Pilih layanan yang ingin dilakukan.");
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
        return;
    }


    document.getElementById("appointmentDate").addEventListener("change", function() {
        const selectedDate = new Date(this.value);
        console.log("Tanggal yang dipilih:", selectedDate);
    });
    alert("Formulir berhasil dikirim!");
    document.getElementById("form").submit();
});