import fetch from 'node-fetch';

const rawUrls = process.env.URLS || '';
const urls = rawUrls.split(',').map(u => u.trim()).filter(Boolean);
const interval = 2 * 60 * 1000; // 每2分钟访问一次

function keepAlive() {
  urls.forEach(url => {
    fetch(url)
      .then(res => console.log(`[${new Date().toISOString()}] ${url} => ${res.status}`))
      .catch(err => console.error(`Error fetching ${url}: ${err.message}`));
  });
}

keepAlive(); // 初始运行一次
setInterval(keepAlive, interval);
