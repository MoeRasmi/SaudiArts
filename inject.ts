import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function lockVault() {
    console.log("Initiating Cloudinary injection...")
    try {
        await client.createOrReplace({
            _id: 'secrets.sanity-plugin-cloudinary',
            _type: 'sanity.plugin.cloudinary.config',
            cloudName: 'deaimh9zu',
            apiKey: '212768172948315'
        })
        console.log("✅ VAULT SECURED: Keys successfully injected into the database.")
    } catch (err) {
        console.error("❌ INJECTION FAILED:", err)
    }
}

lockVault()