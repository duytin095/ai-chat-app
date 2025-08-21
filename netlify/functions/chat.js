// netlify/functions/chat.js

import fetch from 'node-fetch'

export async function handler(event, context) {
  try {
    const { message } = JSON.parse(event.body)

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // or whichever
        messages: [{ role: 'user', content: message }],
      }),
    })

    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
