document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const cabang = document.getElementById("cabang").value;
        const spesialis = document.getElementById("spec").value;
        const layanan = document.getElementById("layanan").value;
        const errorMessages = [];

        if (name === "" || /[^a-zA-Z ]/.test(name)) {
            errorMessages.push("Nama tidak boleh kosong atau berisi karakter bukan huruf.");
        }

        if (!email.includes("@") || !email.includes(".")) {
            errorMessages.push("Email tidak valid.");
        }

        if (!cabang) {
            errorMessages.push("Pilih cabang terdekat.");
        }

        if (!spesialis) {
            errorMessages.push("Pilih spesialis yang diinginkan.");
        }

        if (!layanan) {
            errorMessages.push("Pilih layanan yang ingin dilakukan.");
        }

        if (errorMessages.length > 0) {
            alert(errorMessages.join("\n"));
            return;
        }

        function showNotification(message) {
            const notification = document.createElement("div");
            notification.innerText = message;
            notification.style.backgroundColor = "#274760";
            notification.style.color = "white";
            notification.style.padding = "10px";
            notification.style.margin = "10px 0";
            notification.style.position = "fixed";
            notification.style.top = "10px";
            notification.style.left = "50%";
            notification.style.transform = "translateX(-50%)";
            notification.style.zIndex = "1000";
            notification.style.borderRadius = "20px";
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.style.opacity = 0;
                setTimeout(() => notification.remove(), 500);
            }, 3000);
        }

        showNotification("Janji temu berhasil dibuat!");
        setTimeout(() => document.getElementById("form").submit(), 3000); // Delay submit
    });

    document.getElementById("tanggalJanji").addEventListener("change", function() {
        console.log("Tanggal yang dipilih:", this.value);
    });

    document.getElementById("spec").addEventListener("change", function() {
        console.log("Spesialis yang dipilih:", this.options[this.selectedIndex].text);
    });

    document.getElementById("layanan").addEventListener("change", function() {
        console.log("Layanan yang dipilih:", this.options[this.selectedIndex].text);
    });

    document.getElementById("cabang").addEventListener("change", function() {
        console.log("Cabang yang dipilih:", this.options[this.selectedIndex].text);
    });
});