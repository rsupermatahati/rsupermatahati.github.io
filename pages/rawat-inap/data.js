// Data Kamar Rawat Inap
const rooms = [
    {
        name: "Presiden Suite",
        capacity: "Satu kamar untuk satu pasien",
        facilities: "Bed Pasien, Bed Penunggu, Telpon, AC, Meja Kerja LCD TV 32 inci (Saluran Local), Exclusive Nakas, Lemari Pakaian, Kursi Sofa Tamu, Work Desk, View (Kota dan Laut). Kamar Mandi : Washtafel, Shower Air Panas / Dingin, Luas kamar : 28.25 m2, Ventilasi tekanan negatif.",
        classType: "Presiden Suite",
        beds: "1 Bed",
        image: "images/presiden-suite.jpg"
    },
    {
        name: "Suite",
        capacity: "Satu kamar untuk satu pasien",
        facilities: "Bed Pasien, Bed Penunggu, Telpon, AC, Meja Kerja LCD TV 32 inci (Saluran Local), Exclusive Nakas, Lemari Pakaian, Kursi Sofa Tamu, Work Desk, View (Kota dan Laut). Kamar Mandi : Washtafel, Shower Air Panas / Dingin, Luas kamar : 24.25 m2, Ventilasi tekanan negatif.",
        classType: "Suite",
        beds: "1 Bed",
        image: "images/suite.jpg"
    },
    {
        name: "Emerald",
        capacity: "Satu kamar untuk satu pasien",
        facilities: "Bed Pasien, Bed Penunggu, Telpon, AC, Meja Kerja LCD TV 32 inci (Saluran Local), Exclusive Nakas, Lemari Pakaian, Kursi Sofa. Kamar Mandi : Washtafel, Shower Air Panas / Dingin, Luas kamar : 19.25 m2, Ventilasi tekanan negatif.",
        classType: "VVIP",
        beds: "1 Bed",
        image: "images/emerald.jpg"
    },
    {
        name: "Berlian",
        capacity: "Satu kamar untuk satu pasien",
        facilities: "Bed Pasien, Bed Penunggu, Telpon, AC, LCD TV 32 inci (Saluran Local), Exclusive Nakas, Lemari Pakaian, Kursi Sofa. Kamar Mandi : Washtafel, Shower Air Panas / Dingin, Luas kamar : 15.20 m2, Ventilasi tekanan negatif.",
        classType: "VIP",
        beds: "1 Bed",
        image: "images/berlian.jpg"
    },
    {
        name: "Intan",
        capacity: "Satu kamar untuk dua pasien",
        facilities: "Bed Pasien, AC, Exlusive Nakas, Kursi Penunggu. Kamar Mandi : Washtafel, Shower Dingin, Luas kamar : 14.45 m2, Ventilasi tekanan negatif.",
        classType: "Kelas 1",
        beds: "1 Bed",
        image: "images/intan.jpg"
    },
    {
        name: "Mirah",
        capacity: "Satu kamar untuk empat pasien",
        facilities: "Bed Pasien, AC, Exlusive Nakas, Kursi Penunggu. Kamar Mandi : Washtafel, Shower Dingin, Luas kamar : 30.10 m2, Ventilasi tekanan negatif.",
        classType: "Kelas 3",
        beds: "4 Bed",
        image: "images/mirah.jpg"
    }
];

// Fungsi untuk merender daftar kamar
function renderRooms() {
    const container = document.getElementById('room-container');
    if (!container) return;

    container.innerHTML = rooms.map(room => `
        <div class="col">
            <div class="card h-100 border-0 bg-body p-0" data-aos="fade-up" data-aos-offset="1" data-aos-duration="500">
                <div class="card-body p-0 m-0">
                    <div class="row gy-2">
                        <div class="col-12 col-lg-4 col-xxl-3">
                            <div class="overflow-hidden bg-body-tertiary border rounded-3">
                                <img src="${room.image}" class="card-img-top rounded-3" alt="${room.name}" style="aspect-ratio: 4/3; object-fit: cover;" onerror="this.onerror=null;this.src='/assets/images/image-placeholder.svg';">
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 col-xxl-9">
                            <div class="text-success fw-bold fs-3">${room.name}</div>
                            <div class="fw-bold fs-6">${room.capacity}</div>
                            <div class="mb-3 mt-2">
                                <span class="fw-bold fst-italic">Fasilitas: </span><br>
                                <span>${room.facilities}</span>
                            </div>
                            <div class="d-flex flex-wrap gap-3 m-0 p-0">
                                <span class="text-muted small fw-medium bg-body-tertiary px-3 py-1 rounded-pill">
                                    Kelas: ${room.classType}
                                </span>
                                <span class="text-muted small fw-medium bg-body-tertiary px-3 py-1 rounded-pill">
                                    Jumlah Bed Pasien: ${room.beds}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}
