export const SEASONAL_NIGHTLY_RATES_EUR: Readonly<Record<number, number>> = {
  1: 350,
  2: 350,
  3: 350,
  4: 350,
  5: 400,
  6: 450,
  7: 500,
  8: 500,
  9: 450,
  10: 400,
  11: 350,
  12: 350,
};

export const MINIMUM_NIGHTLY_RATE_EUR = Math.min(...Object.values(SEASONAL_NIGHTLY_RATES_EUR));
export const MONTE_MARE_MONTHLY_RATE_EUR = 2500;
export const LONG_STAY_MIN_NIGHTS = 30;

export function nightlyRateForDate(isoDate: string): number {
  const month = Number(isoDate.slice(5, 7));
  return SEASONAL_NIGHTLY_RATES_EUR[month] ?? MINIMUM_NIGHTLY_RATE_EUR;
}
