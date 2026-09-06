export const SEASONAL_NIGHTLY_RATES_EUR: Readonly<Record<number, number>> = {
  1: 378,
  2: 378,
  3: 378,
  4: 378,
  5: 431,
  6: 485,
  7: 539,
  8: 539,
  9: 485,
  10: 431,
  11: 378,
  12: 378,
};

export const MINIMUM_NIGHTLY_RATE_EUR = Math.min(...Object.values(SEASONAL_NIGHTLY_RATES_EUR));
export const MONTE_MARE_MONTHLY_RATE_EUR = 2500;
export const LONG_STAY_MIN_NIGHTS = 30;

export function nightlyRateForDate(isoDate: string): number {
  const month = Number(isoDate.slice(5, 7));
  return SEASONAL_NIGHTLY_RATES_EUR[month] ?? MINIMUM_NIGHTLY_RATE_EUR;
}
