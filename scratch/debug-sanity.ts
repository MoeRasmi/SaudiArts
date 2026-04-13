import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '56rsac5v',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function debug() {
  try {
    const data = await client.fetch('*[_type == "artwork"]');
    console.log('Artworks found:', data.length);
    if (data.length > 0) {
      console.log('Sample artwork:', JSON.stringify(data[0], null, 2));
    } else {
      console.log('No artworks found with this Project ID and Dataset.');
    }
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

debug();
