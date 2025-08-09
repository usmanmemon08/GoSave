export async function listDeals(_req, res) {
  const deals = [
    { id: 1, title: '40% off Dinner', partnerId: 101, category: 'Food', validTill: '2025-12-31' },
    { id: 2, title: 'Buy 1 Get 1 Movie', partnerId: 102, category: 'Entertainment', validTill: '2025-12-31' },
  ];
  res.json({ deals });
}

export async function getDeal(req, res) {
  const { id } = req.params;
  res.json({ deal: { id: Number(id), title: 'Sample Deal', details: 'Terms apply' } });
}

export async function listCategories(_req, res) {
  res.json({ categories: ['Food', 'Entertainment', 'Services'] });
}