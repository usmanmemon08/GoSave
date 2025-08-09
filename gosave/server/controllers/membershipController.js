export async function listPlans(_req, res) {
  res.json({ plans: [
    { id: 'basic', name: 'Basic', price: 499, period: 'year', benefits: ['10% - 20% off'] },
    { id: 'premium', name: 'Premium', price: 999, period: 'year', benefits: ['Up to 40% off', 'VIP perks'] },
  ]});
}

export async function purchase(req, res) {
  const { planId } = req.body;
  res.status(201).json({ success: true, planId });
}

export async function status(req, res) {
  res.json({ active: true, planId: 'premium', expiresAt: '2026-01-01' });
}