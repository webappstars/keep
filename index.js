// index.js
import fetch from 'node-fetch';

const rawUrls = process.env.URLS || '';
const urls = rawUrls.split(',').map(u => u.trim()).filter(Boolean);

async function keepAliveOnce() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(`[${new Date().toISOString()}] ${url} => ${res.status}`);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err.message}`);
    }
  }
}

keepAliveOnce(); // 👈 只运行一次就结束
