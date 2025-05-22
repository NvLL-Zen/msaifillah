<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	import {hijriDate} from "../stores/hijriDate"

	let prayerTime = null;
	let error = null;
	const date = new Date();
	const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

	const targetDate = formattedDate;

	const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
	const formattedIdDate = new Intl.DateTimeFormat('id-ID', options).format(date);

	onMount(async () => {
		const imsak = document.querySelector('#imsak');
		const subuh = document.querySelector('#subuh');
		const dzuhur = document.querySelector('#dzuhur');
		const ashar = document.querySelector('#ashar');
		const maghrib = document.querySelector('#maghrib');
		const isya = document.querySelector('#isya');
		try {
			const response = await axios.get('http://loscos4w40ko04sss0cg0wo4.70.153.72.107.sslip.io/prayer', {
				params: {
					latitude: -6.283825,
					longitude: 106.713994444445
				}
			});

			const prayers = response.data.prayers;

			const match = prayers.find((p) => {
				const date = new Date(p.date);
				const formatted = date.toISOString().split('T')[0]; // "YYYY-MM-DD"
				return formatted === targetDate;
			});

			if (match) {
				prayerTime = match.time;
				console.log(prayerTime)
			} else {
				error = `No data for ${targetDate}`;
			}
		} catch (err) {
			error = err.message;
		}

		imsak.innerHTML = prayerTime.imsak;
		subuh.innerHTML = prayerTime.subuh;
		dzuhur.innerHTML = prayerTime.dzuhur;
		ashar.innerHTML = prayerTime.ashar;
		maghrib.innerHTML = prayerTime.maghrib;
		isya.innerHTML = prayerTime.isya;
	});
</script>

<div class="praySchedule">
	<h1 class="prayDate">{formattedIdDate}</h1>
	<h1 class="prayDate">{$hijriDate}</h1>
	<ul>
		<li class="prayerEntry">
			Imsak
			<p id="imsak">fetching</p>
		</li>
		<li class="prayerEntry">
			Subuh
			<p id="subuh">fetching</p>
		</li>
		<li class="prayerEntry">
			Dzuhur
			<p id="dzuhur">fetching</p>
		</li>
		<li class="prayerEntry">
			Ashar
			<p id="ashar">fetching</p>
		</li>
		<li class="prayerEntry">
			Maghrib
			<p id="maghrib">fetching</p>
		</li>
		<li class="prayerEntry">
			Isya
			<p id="isya">fetching</p>
		</li>
	</ul>
</div>

<style>
	.prayDate {
		height: fit-content;
		padding: 5px;
		margin-top: 1%;
		text-align: center;
		color: black;
		background-color: rgb(1, 219, 226);
		border-radius: 5px;
	}

	.praySchedule {
		width: 70%;
		height: fit-content;
		justify-self: normal;
	}

	.prayerEntry {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 15%;
		align-items: center;
		padding: 5px;
		padding-left: 20px;
		padding-right: 20px;
		font-weight: 700;
	}

	ul {
		width: 100%;
		height: 85%;
		display: flex;
		flex-direction: column;
		text-align: left;
		justify-content: space-between;
		align-items: baseline;
	}

	li {
		border-bottom: 1px solid black;
	}

	@media only screen and (max-width: 720px){
		.praySchedule {
			width: 85%;
			height: fit-content;
		}
	}
</style>
