import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';

// Load our local environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// 1️⃣ REPLACE THESE WITH YOUR ACTUAL CLOUDINARY CREDENTIALS
const CLOUD_NAME = 'deaimh9zu';
const API_KEY = '212768172948315';

// 2️⃣ ADD YOUR SANITY WRITE TOKEN HERE
// You can generate this at https://manage.sanity.io/ -> API -> Tokens -> Add New Token (Editor permission)
const SANITY_WRITE_TOKEN = 'skvC78n5Eyh1p4wlOgcTFpXi6QKwe8VMHFSemPpOhPDSiLaVFyBidfr1XnUhIH1lLwbCu6ZMRQY3jCWSHkKrdPbCuf5DiMNEfoO9pBsidqG1Ajabaq7N2nE5VvgtzYNejEnketkG4CyLFjzhm75Xq2FkW3S9i92rhCypwFJSzYVQpO9nE0PQ';

// Initialize the Sanity Client with Write privileges 
const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || '56rsac5v',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function bypassModal() {
  console.log('Injecting Cloudinary secrets into both possible database locations...');
  
  try {
    // 1. Your requested format
    await client.createOrReplace({
      _id: 'secrets.sanity-plugin-cloudinary',
      _type: 'sanity.plugin.cloudinary.config',
      cloudName: CLOUD_NAME,
      apiKey: API_KEY,
    });

    // 2. The standard Studio Secrets format used by most versions
    await client.createOrReplace({
      _id: 'secrets.cloudinary',
      _type: 'pluginSecrets',
      secrets: {
        cloudName: CLOUD_NAME,
        apiKey: API_KEY,
      }
    });
    
    console.log('✅ DUAL INJECTION SUCCESSFUL!');
    console.log('The "Setup" modal is now forced to bypass for all versions.');
    console.log('\nHard-refresh (Ctrl+Shift+R) your browser at localhost:5173/admin now.');
    
  } catch (err) {
    console.error('❌ Injection failed. Check your token permissions.');
    console.error(err);
  }
}

bypassModal();
