// src/stores/hijriDate.js
import { writable } from 'svelte/store';

function getHijriDate() {
  const date = new Date();

  const days = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
  const hijriMonths = [
    'Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir', 'Jumadil Awal',
    'Jumadil Akhir', 'Rajab', "Sya'ban", 'Ramadhan', 'Syawwal',
    "Zulqa'dah", 'Zulhijjah'
  ];

  const formatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    weekday: 'short',
  });

  const parts = formatter.formatToParts(date);

  let day = 1, month = 1, year = 1440, weekdayIndex = 0;

  for (const part of parts) {
    if (part.type === 'day') day = parseInt(part.value);
    if (part.type === 'month') month = parseInt(part.value);
    if (part.type === 'year') year = parseInt(part.value);
    if (part.type === 'weekday') {
      const weekdayMap = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
      weekdayIndex = weekdayMap[part.value];
    }
  }

  return `${days[weekdayIndex]}, ${day} ${hijriMonths[month - 1]} ${year} H`;
}

// Create a writable store and initialize it
export const hijriDate = writable(getHijriDate());
