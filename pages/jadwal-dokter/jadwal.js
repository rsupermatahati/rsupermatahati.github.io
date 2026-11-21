// GANTI DENGAN URL WEB APP APPS SCRIPT ANDA (akhiran /exec)
var JADWAL_API_URL = "https://script.google.com/macros/s/AKfycbwIgb3EZmhmZImAJd4hJWx-HdYY5tCdccongX71tg2M4ppw-4yrD9OBNcBIhMjtvhw/exec";

function initJadwalDokter() {
    var container = document.getElementById("jadwalGroupedContainer");
    if (!container) return;

    var DAYS = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    var ALL_DATA = [];

    var searchEl = document.getElementById("searchInput");
    var poliEl = document.getElementById("poliSelect");
    var hariEl = document.getElementById("hariSelect");
    var resetEl = document.getElementById("resetBtn");

    tampilkanHariIni();

    if (searchEl) searchEl.addEventListener("input", renderGroupedJadwal);
    if (poliEl) poliEl.addEventListener("change", renderGroupedJadwal);
    if (hariEl) hariEl.addEventListener("change", renderGroupedJadwal);
    if (resetEl) {
        resetEl.addEventListener("click", function () {
            if (searchEl) searchEl.value = "";
            if (poliEl) poliEl.value = "";
            if (hariEl) hariEl.value = "";
            renderGroupedJadwal();
        });
    }

    loadJadwal();

    async function loadJadwal() {
        try {
            var res = await fetch(JADWAL_API_URL);
            if (!res.ok) throw new Error("HTTP " + res.status);

            var json = await res.json();
            if (json.status !== "success") {
                throw new Error(json.message || "Gagal memuat data.");
            }

            ALL_DATA = Array.isArray(json.data) ? json.data : [];
            populatePoliDropdown(ALL_DATA);
            renderGroupedJadwal();
        } catch (err) {
            var errBox = document.getElementById("errorBox");
            if (errBox) {
                errBox.classList.remove("d-none");
                errBox.textContent = "Gagal memuat jadwal: " + (err && err.message ? err.message : err);
            }

            container.innerHTML =
                '<div class="card border-0 shadow-sm"><div class="card-body text-center py-4 text-body-secondary">Tidak dapat menampilkan jadwal.</div></div>';

            var countInfo = document.getElementById("countInfo");
            if (countInfo) countInfo.textContent = "0 dokter ditampilkan";
        }
    }

    function tampilkanHariIni() {
        var todayEl = document.getElementById("todayInfo");
        if (!todayEl) return;

        var now = new Date();
        var namaHari = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
        var hariIni = namaHari[now.getDay()];

        var tanggalLengkap = now.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        todayEl.innerHTML =
            'Hari ini: <span>' + escapeHtml(tanggalLengkap) + "</span>";
    }

    function populatePoliDropdown(data) {
        if (!poliEl) return;
        poliEl.innerHTML = '<option value="">Semua Poliklinik</option>';

        var poliSet = {};
        data.forEach(function (item) {
            var namaPoli = (item.poli || "Tanpa Poliklinik").trim();
            poliSet[namaPoli] = true;
        });

        Object.keys(poliSet).sort().forEach(function (poli) {
            var opt = document.createElement("option");
            opt.value = poli;
            opt.textContent = poli;
            poliEl.appendChild(opt);
        });
    }

    function renderGroupedJadwal() {
        var q = searchEl ? searchEl.value.trim().toLowerCase() : "";
        var poliFilter = poliEl ? poliEl.value : "";
        var hariFilter = hariEl ? hariEl.value : "";

        var filtered = ALL_DATA.filter(function (item) {
            var namaPoli = (item.poli || "Tanpa Poliklinik").trim();
            var namaDokter = (item.dokter || "").trim();

            if (poliFilter && namaPoli !== poliFilter) return false;
            if (hariFilter && (!item.jadwal || !item.jadwal[hariFilter] || item.jadwal[hariFilter].length === 0)) {
                return false;
            }
            if (q && namaDokter.toLowerCase().indexOf(q) === -1) {
                return false;
            }
            return true;
        });

        var countInfo = document.getElementById("countInfo");
        if (countInfo) {
            countInfo.textContent =
                "Menampilkan " + filtered.length + " dari " + ALL_DATA.length + " dokter";
        }

        if (filtered.length === 0) {
            container.innerHTML =
                '<div class="card border-0 shadow-sm"><div class="card-body text-center py-5 text-body-secondary">Jadwal dokter tidak ditemukan.</div></div>';
            return;
        }

        var groups = {};
        filtered.forEach(function (item) {
            var namaPoli = (item.poli || "Tanpa Poliklinik").trim();
            if (!groups[namaPoli]) groups[namaPoli] = [];
            groups[namaPoli].push(item);
        });

        var sortedPolis = Object.keys(groups).sort();

        container.innerHTML = sortedPolis.map(function (poliName) {
            var doctors = groups[poliName];

            var rowsHtml = doctors.map(function (doc) {
                var dayCols = DAYS.map(function (day) {
                    var slots = (doc.jadwal && doc.jadwal[day]) ? doc.jadwal[day] : [];
                    var isHighlighted = hariFilter === day;
                    var tdClass = isHighlighted ? ' class="table-primary border-0 bg-opacity-50"' : "";

                    if (slots.length === 0) {
                        return "<td" + tdClass + '><span class="text-body-secondary">-</span></td>';
                    }

                    var badges = slots.map(function (slot) {
                        return '<span class="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle py-2 mb-1">' +
                            escapeHtml(slot) +
                            "</span>";
                    }).join("<br>");

                    return "<td" + tdClass + ">" + badges + "</td>";
                }).join("");

                return (
                    "<tr>" +
                    '<td class="fw-semibold">' + escapeHtml(doc.dokter) + "</td>" +
                    dayCols +
                    "</tr>"
                );
            }).join("");

            return (
                '<div class="card border-0 mb-4">' +
                '<div class="card-header border border-bottom-0 py-3 d-flex justify-content-between align-items-center">' +
                '<h5 class="mb-0 fw-bold">' + escapeHtml(poliName) + "</h5>" +
                '<span class="small">' + doctors.length + " Dokter</span>" +
                "</div>" +
                '<div class="card-body p-0 table-responsive">' +
                '<table class="table table-bordered table-hover align-top mb-0" style="font-size: 0.86rem;">' +
                '<thead>' +
                "<tr>" +
                "<th>Dokter</th>" +
                "<th>Senin</th>" +
                "<th>Selasa</th>" +
                "<th>Rabu</th>" +
                "<th>Kamis</th>" +
                "<th>Jumat</th>" +
                "<th>Sabtu</th>" +
                "<th>Minggu</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>" + rowsHtml + "</tbody>" +
                "</table>" +
                "</div>" +
                "</div>"
            );
        }).join("");

        if (window.AOS && typeof AOS.refresh === "function") {
            AOS.refresh();
        }
    }

    function capitalize(str) {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
    }

    function escapeHtml(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }
}