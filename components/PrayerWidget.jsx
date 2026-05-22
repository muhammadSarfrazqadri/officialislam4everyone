'use client';

import { useEffect, useState } from "react";

export default function PrayerWidget({ timings }) {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timings) return null;

  const prayers = [
    { name: "Fajr", time: timings.Fajr },
    { name: "Dhuhr", time: timings.Dhuhr },
    { name: "Asr", time: timings.Asr },
    { name: "Maghrib", time: timings.Maghrib },
    { name: "Isha", time: timings.Isha },
  ];

  // convert HH:MM to minutes
  const toMinutes = (t) => {
    const [h, m] = t.split(":");
    return parseInt(h) * 60 + parseInt(m);
  };

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let nextPrayer = prayers.find(p => toMinutes(p.time) > currentMinutes);

  if (!nextPrayer) {
    nextPrayer = prayers[0]; // next day Fajr
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 max-w-3xl mx-auto mb-8">

      {/* LIVE CLOCK */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">🕋 Live Prayer Tracker</h2>
        <p className="text-primary text-lg font-mono mt-2">
          {now.toLocaleTimeString()}
        </p>
      </div>

      {/* NEXT PRAYER */}
      <div className="text-center mb-6">
        <p className="text-muted-foreground text-sm">Next Prayer</p>
        <h3 className="text-2xl font-bold text-primary">
          {nextPrayer.name} - {nextPrayer.time}
        </h3>
      </div>

      {/* PRAYER LIST */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

        {prayers.map((p, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl border text-center transition
              ${p.name === nextPrayer.name
                ? "border-primary bg-primary/10"
                : "border-border"
              }`}
          >
            <p className="font-semibold">{p.name}</p>
            <p className="text-sm text-muted-foreground">{p.time}</p>
          </div>
        ))}

      </div>

    </div>
  );
}