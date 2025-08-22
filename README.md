<h1 align="center">🤖 AI Chat App — Vue 3 + TypeScript + Netlify + Gemini</h1>

<p align="center">
  <a href="https://app.netlify.com/sites/ai-chat-app-demo-dt/deploys">
    <img src="https://api.netlify.com/api/v1/badges/a7b87ebb-6bcc-447a-9b7a-55ff93209466/deploy-status" alt="Netlify Status" />
  </a>
  <a href="https://github.com/duytin095/ai-chat-app/stargazers">
    <img src="https://img.shields.io/github/stars/duytin095/ai-chat-app?style=social" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/duytin095/ai-chat-app/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/duytin095/ai-chat-app" alt="License" />
  </a>
  <a href="https://github.com/duytin095/ai-chat-app/issues">
    <img src="https://img.shields.io/github/issues/duytin095/ai-chat-app" alt="Issues" />
  </a>
</p>

<p align="center">
  A minimalistic, serverless chatbot demo built with <b>Vue 3</b> and <b>TypeScript</b>, deployed via <b>Netlify Functions</b> 
  for proxying to Google’s <b>Gemini API</b>.  
  Markdown-formatted responses rendered on the fly.  
  Zero backend, zero database, maximum laze-efficiency.
</p>

<hr />

<h2>✨ Features</h2>
<ul>
  <li>Lightweight Vue 3 + Composition API + TypeScript frontend</li>
  <li>Netlify Functions serve as safe proxies, keeping your API key hidden</li>
  <li>Google Gemini API (free-tier friendly) powers the chat magic</li>
  <li>Responses are in Markdown, rendered cleanly using <code>marked.parse()</code></li>
  <li>Local dev with <code>netlify dev</code> + auto-loaded <code>.env</code> support</li>
</ul>

<hr />

<h2>📂 Project Structure</h2>

<pre>
├── netlify.toml                  # Netlify config (build & function directory)
├── netlify/functions/chat.js     # Serverless endpoint to Gemini
├── src/
│   ├── components/ChatDemo.vue   # Chat UI component
│   └── utils/markdown.ts         # Markdown rendering helper
├── .env                          # Local environment variables
└── README.md                     # This file
</pre>

<hr />

<h2>⚡ Quick Setup</h2>

<ol>
  <li><b>Clone & install</b>
    <pre><code>git clone https://github.com/duytin095/ai-chat-app.git
cd ai-chat-app
npm install</code></pre>
  </li>

  <li><b>Set your API key locally</b>  
    Create <code>.env</code> in root:
    <pre><code>GEMINI_API_KEY=your_google_ai_studio_key</code></pre>
  </li>

  <li><b>Run everything locally</b>
    <pre><code>npx netlify dev</code></pre>
    The app will be available at <a href="http://localhost:8888">http://localhost:8888</a>  
    with the backend function at <code>/.netlify/functions/chat</code>.
  </li>

  <li><b>Deploy to Netlify</b>
    <ul>
      <li>Push your code to GitHub.</li>
      <li>In Netlify dashboard, connect the repo.</li>
      <li>Add <code>GEMINI_API_KEY</code> under <i>Site Settings → Environment variables</i>.</li>
      <li>Netlify handles build (<code>npm run build</code>) and deployment automatically.</li>
    </ul>
  </li>
</ol>

<hr />

<h2>🛠 How It Works</h2>
<ul>
  <li><code>ChatDemo.vue</code>: Captures user input, sends to the Netlify function, renders the Markdown response.</li>
  <li><code>chat.js</code>: Takes message, forwards it to Gemini (using <code>process.env.GEMINI_API_KEY</code>), returns JSON.</li>
  <li><code>markdown.ts</code>: Converts Markdown string to HTML using <code>marked.parse()</code>.</li>
</ul>

<hr />

<h2>🐞 Local Debugging Tips</h2>
<ul>
  <li>Always restart <code>netlify dev</code> after updating <code>.env</code>—CLI caches them.</li>
  <li>Insert <code>console.log(process.env.GEMINI_API_KEY ? 'loaded' : 'missing')</code> in <code>chat.js</code> to confirm the key is read.</li>
  <li>Log raw Gemini response with <code>console.log(JSON.stringify(json, null, 2))</code> to debug parsing issues.</li>
</ul>

<hr />

<h2>📌 Notes</h2>
<ul>
  <li>No persistent history — refresh equals reset.</li>
  <li>Use Gemini within free-tier limits to avoid silent failure.</li>
  <li>TypeScript may complain about <code>marked.parse()</code>; casting with <code>as string</code> silences it.</li>
</ul>

<hr />

<h2>📜 License</h2>
<p>
MIT. Steal it, tweak it, just don’t come crying when your API quota disappears.  
</p>
