export async function listPartners(_req, res) {
  res.json({ partners: [
    { id: 101, name: 'Spice Route', locations: ['Banjara Hills'] },
    { id: 102, name: 'Star Cinema', locations: ['Gachibowli'] },
  ]});
}

export async function getPartner(req, res) {
  const { id } = req.params;
  res.json({ partner: { id: Number(id), name: 'Sample Partner', details: 'Info here' } });
}

export async function listLocations(_req, res) {
  res.json({ locations: ['Banjara Hills', 'Gachibowli', 'Madhapur', 'Jubilee Hills'] });
}