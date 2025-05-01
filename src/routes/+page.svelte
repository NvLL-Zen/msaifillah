<script>
	import '../styles/global.css';
	import '../styles/navbar.css';
	import '../styles/section.css';

	import '../styles/tentang.css';
	import '../styles/infober.css';

	import AnK1 from '../img/AnK1.webp';
	import AnK2 from '../img/AnK2.webp';
	import JadwalSalat from '../components/jadwalSalat.svelte';
</script>

<nav class="navbar">
	<a class="navTitle" href="./">SAIFILLAH</a>
	<ul>
		<li>Tentang</li>
		<li>Berita</li>
		<li>Kegiatan</li>
		<li>Kontak</li>
	</ul>
</nav>
<section class="section" id="sectionSatu">
	<h1>
		Foto masjid saifillah pagi hari + malem hari (tergantung waktu WIB, jadi nanti klo malem malem,
		klo pagi2, dua foto aja)
	</h1>
</section>
<section class="section" id="sectionDua">
	<div class="halfHorizontal">
		<div class="halfWidth pad-20">
			<h1 class="tentangTitle textCenter">ASSALAMUALAIKUM</h1>
			<p class="tentangPara">
				Selamat Datang di Masjid Saifillah, yang berlokasi di Cluster Sevilla Serpong, Tangerang
				Selatan. Website ini dikelola oleh .... lorem ipsum ...
			</p>
		</div>
		<div class="halfWidth pad-20">
			<h1 class="tentangTitle textCenter">Aktifitas dan Kegiatan</h1>
			<div class="tentangImages">
				<img class="images" src={AnK1} alt="Aktifitas Dan Kegiatan 1" />
				<img class="images" src={AnK2} alt="Aktifitas Dan Kegiatan 2" />
				<img class="images" src={AnK1} alt="Aktifitas Dan Kegiatan 1" />
                <img class="images" src={AnK2} alt="Aktifitas Dan Kegiatan 2" />
			</div>
		</div>
	</div>
</section>
<section class="section" id="sectionTiga">
	<div class="halfHorizontal">
		<div class="halfWidth pad-20">
			<h1 class="textCenter tentangTitle">Berita dan Informasi</h1>
			<ul class="beritaList">
				<li class="beritaEntry"><a class="beritaLinks" href="./">(Tanggal) Info Sholat Jumat (Contoh)</a></li>
				<li class="beritaEntry"><a class="beritaLinks" href="./">(Tanggal) Laporan Donasi #PrayForTurkiye (Contoh)</a></li>
				<li class="beritaEntry"><a class="beritaLinks" href="./">(Tanggal) Berita C</a></li>
				<li class="beritaEntry"><a class="beritaLinks" href="./">(Tanggal) Berita D</a></li>
			</ul>
		</div>
		<div class="halfWidth flex-center">
			<JadwalSalat></JadwalSalat>
		</div>
	</div>
</section>
<section class="section" id="sectionEmpat">
	<h1>Kontak (sm QRIS buat infaq klo mau, tinggal ss trs taruh sini)</h1>
</section>
<section class="section" id="footer">
	<h1>
		Copyright Masjid Saifillah 2025 | <a target="_blank" href="https://zenriel.tech">By ZENRIEL</a>
	</h1>
</section>
