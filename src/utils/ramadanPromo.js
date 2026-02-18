export const RAMADAN_PROMO = {
  title: "Ramazon Muborak – Avtomobillarga Maxsus Chegirmalar",
  description:
    "Ramazon oyiga bag‘ishlab barcha avtomobillarimizga maxsus chegirmalar e’lon qilindi. Qulay narxlar, toza va ishonchli mashinalar hamda tezkor bron qilish imkoniyati bilan sayohatingizni yanada qulay qiling.",
  discountPercent: 10,
  storageKey: "ramadan_promo_dismissed_v1",
};

export function applyRamadanDiscount(price) {
  const p = Number(price);
  if (!Number.isFinite(p)) return { original: price, discounted: price };
  const discounted = Math.round(p * (1 - RAMADAN_PROMO.discountPercent / 100));
  return { original: p, discounted };
}

