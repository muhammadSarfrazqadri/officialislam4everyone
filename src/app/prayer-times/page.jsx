'use client';

import { useEffect, useState } from "react";
import PrayerWidget from "../../../components/PrayerWidget";

export default function PrayerPage() {

  const [city, setCity] = useState("Karachi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPrayerTimes = async (selectedCity) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=Pakistan&method=2`
      );

      const json = await res.json();
      setData(json.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerTimes(city);
  }, [city]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const timings = data?.timings;

  const prayers = [
    { name: "Fajr", time: timings?.Fajr },
    { name: "Dhuhr", time: timings?.Dhuhr },
    { name: "Asr", time: timings?.Asr },
    { name: "Maghrib", time: timings?.Maghrib },
    { name: "Isha", time: timings?.Isha },
  ];

  return (
    <>
    <PrayerWidget timings={timings} />
    <div className="min-h-screen bg-background text-foreground px-4 py-10">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Prayer Times</h1>
        <p className="text-muted-foreground">
          {data?.date?.readable} | Hijri: {data?.date?.hijri?.date}
        </p>
      </div>

      {/* CITY SELECT */}
      <div className="flex justify-center mb-10">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-card border border-border px-4 py-2 rounded-full"
        >
          <option>Karachi</option>
          <option>Lahore</option>
          <option>Islamabad</option>
          <option>Multan</option>
        </select>
      </div>

      {/* PRAYER CARDS */}
      <div className="max-w-3xl mx-auto grid gap-4">

        {prayers.map((p, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-card border border-border p-5 rounded-xl"
          >
            <span className="font-semibold text-lg">{p.name}</span>
            <span className="text-primary font-bold">{p.time}</span>
          </div>
        ))}

      </div>

      {/* ISLAMIC INFO SECTION */}
      <div className="max-w-3xl mx-auto mt-10 bg-card border border-border p-6 rounded-xl">

        <h2 className="text-xl font-bold mb-3">Islamic Day Info</h2>

        <p className="text-sm text-muted-foreground">
          Today is <b>{data?.date?.hijri?.weekday?.en}</b> in Hijri calendar.
        </p>

        <p className="text-sm text-muted-foreground mt-2">
          Month: <b>{data?.date?.hijri?.month?.en}</b>
        </p>

      </div>

    </div>
        </>
  );
}