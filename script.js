function updateTotal() {
    const tujuan = document.getElementById("inp_tujuan").value;
    const jumlah = parseInt(document.getElementById("inp_jumlah").value);
    const isMember = document.getElementById("member").checked;

    let hargaTiket = 0;

    switch (tujuan) {
        case "bdg":
            hargaTiket = 100000;
            break;
        case "jkt":
            hargaTiket = 150000;
            break;
        case "ygk":
            hargaTiket = 200000;
            break;
        case "bl":
            hargaTiket = 250000;
            break;
        case "mdn":
            hargaTiket = 180000;
            break;
    }

    let totalBayar = hargaTiket * jumlah;

    if (isMember) {
        const diskon = totalBayar * 0.1;
        totalBayar -= diskon;
        document.getElementById("inp_diskon").value = diskon.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    } else {
        document.getElementById("inp_diskon").value = 0;
    }

    document.getElementById("inp_harga").value = hargaTiket.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    document.getElementById("inp_total").value = totalBayar.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

function pesan() {
    var nama = document.getElementById('inp_nama').value;
    var total = document.getElementById('inp_total').value; // Mengambil nilai total dari input inp_total
    alert('HAI !! ' + nama + " Pesanan Tiket Kamu Sudah Berhasil  ");
    alert('Silahkan Lakukan Pembayaran Dengan Total ' + total);
}
