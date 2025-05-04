<script>
	import '../styles/global.css';
	import '../styles/navbar.css';
	import '../styles/section.css';

	import '../styles/tentang.css';
	import '../styles/infober.css';
	import '../styles/kegiatan.css';
	import '../styles/footer.css'

	import AnKSlide from '../img/AnKSlide.webp';
	import AnKMobile from '../img/AnKmobile.webp'
	import JadwalSalat from '../components/jadwalSalat.svelte';

	import SaifillahPC from '../img/Saifillah_Wide.webp'
	import SaifillahMobile from '../img/Saifillah_Mobile.webp'

	import { scrollToCenter } from '../lib/scroll.js';

</script>

<nav class="navbar">
	<a class="navTitle" href="./">SAIFILLAH</a>
	<ul>
		<li class="navbarEntry"><a class="navbarLinks" use:scrollToCenter href="#Tentang">Tentang</a></li>
		<li class="navbarEntry"><a class="navbarLinks" use:scrollToCenter href="#Kegiatan">Kegiatan</a></li>
		<li class="navbarEntry"><a class="navbarLinks" use:scrollToCenter href="#Berita">Berita</a></li>
		<li class="navbarEntry"><a class="navbarLinks" use:scrollToCenter href="#Kontak">Kontak</a></li>
	</ul>
</nav>
<section class="section" id="sevillaBG">
	<img id="Saifillah_PC" class="SaifillahBG" src={SaifillahPC} alt="Masjid Saifillah">
	<img id="Saifillah_Mobile" class="SaifillahBG" src={SaifillahMobile} alt="Masjid Saifillah">
	<section class="section" id="Tentang">
		<h1 class="tentangTitle">ASSALAMUALAIKUM</h1>
		<p class="tentangPara">
			Selamat datang di laman web (semi-resmi) Masjid Saifillah yang berlokasi di Cluster Sevilla,
			BSD, Tangerang Selatan.
		</p>
	</section>
</section>

<section class="section" id="Kegiatan">
	<h1 class="tentangTitle">Aktivitas dan Kegiatan</h1>
	<img class="ankImg" id="AnKPC" src={AnKSlide} alt="Aktivitas dan Kegiatan" />
	<img class="ankImg" id="AnKMobile" src={AnKMobile} alt="Aktivitas dan Kegiatan" />
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
	<h1 class="footerText">
		ⓒ Masjid Saifillah 2025 | <a class="footerText" target="_blank" href="https://zenriel.tech">By ZENRIEL</a>
	</h1>
</section>
