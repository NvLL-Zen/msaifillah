<script>
	import '../styles/global.css';
	import '../styles/navbar.css';
	import '../styles/section.css';

	import '../styles/tentang.css';
	import '../styles/infober.css';
	import '../styles/kegiatan.css';

	import AnKSlide from '../img/AnKSlide.webp';
	import JadwalSalat from '../components/jadwalSalat.svelte';
</script>

<nav class="navbar">
	<a class="navTitle" href="./">SAIFILLAH</a>
	<ul>
		<li><a href="Tentang">Tentang</a></li>
		<li><a href="Kegiatan">Kegiatan</a></li>
		<li><a href="Berita">Berita</a></li>
		<li><a href="Kontak">Kontak</a></li>
	</ul>
</nav>
<section class="section" id="sevillaBG">
	<h1>
		Foto masjid saifillah pagi hari + malem hari (tergantung waktu WIB, jadi nanti klo malem malem,
		klo pagi2, dua foto aja)
	</h1>
</section>
<section class="section" id="Tentang">
	<h1 class="tentangTitle">ASSALAMUALAIKUM</h1>
	<p class="tentangPara">
		Selamat datang di laman web (semi-resmi) Masjid Saifillah yang berlokasi di Cluster Sevilla,
		BSD, Tangerang Selatan.
	</p>
</section>
<section class="section" id="Kegiatan">
	<h1 class="tentangTitle">Aktivitas dan Kegiatan</h1>
	<img class="ankImg" src={AnKSlide} alt="Aktivitas dan Kegiatan" />
</section>
<section class="section" id="Berita">
	<div class="halfHorizontal">
		<div class="halfWidth pad-20">
			<h1 class="textCenter tentangTitle">Berita dan Informasi</h1>
			<ul class="beritaList">
				<li class="beritaEntry">
					<a class="beritaLinks" href="./">(Tanggal) Info Sholat Jumat (Contoh)</a>
				</li>
				<li class="beritaEntry">
					<a class="beritaLinks" href="./">(Tanggal) Laporan Donasi #PrayForTurkiye (Contoh)</a>
				</li>
				<li class="beritaEntry"><a class="beritaLinks" href="./">(Tanggal) Berita C</a></li>
				<li class="beritaEntry"><a class="beritaLinks" href="./">(Tanggal) Berita D</a></li>
			</ul>
		</div>
		<div class="halfWidth flex-center">
			<JadwalSalat></JadwalSalat>
		</div>
	</div>
</section>
<section class="section" id="Kontak">
	<h1>Kontak (sm QRIS buat infaq klo mau, tinggal ss trs taruh sini)</h1>
</section>
<section class="section" id="footer">
	<h1>
		Copyright Masjid Saifillah 2025 | <a target="_blank" href="https://zenriel.tech">By ZENRIEL</a>
	</h1>
</section>
