// for GPT
// export async function handler(event, context) {
//   try {
//     const { message } = JSON.parse(event.body)

//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-4o-mini', // or whichever
//         messages: [{ role: 'user', content: message }],
//       }),
//     })

//     const data = await response.json()

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     }
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     }
//   }
// }



// For Gemini
const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + process.env.GEMINI_API_KEY, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ parts: [{ text: userMessage }] }],
  }),
});
const json = await res.json();
const reply = json.candidates?.[0]?.content || "[no reply]";