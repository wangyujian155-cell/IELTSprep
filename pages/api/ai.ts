import type { NextApiRequest, NextApiResponse } from 'next'

type ApiResponse = { output?: string; error?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prompt } = req.body || {}
  if (!prompt || typeof prompt !== 'string') return res.status(400).json({ error: 'Missing prompt' })

  const key = process.env.GEMINI_API_KEY
  if (!key) return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' })

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${encodeURIComponent(
      key
    )}`

    const body = {
      prompt: { text: prompt },
      maxOutputTokens: 512
    }

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    if (!r.ok) {
      const errBody = await r.text()
      return res.status(500).json({ error: `AI provider error: ${r.status} ${errBody}` })
    }

    const data = await r.json()
    const text = data?.candidates?.[0]?.output ?? data?.output ?? JSON.stringify(data)
    return res.status(200).json({ output: text })
  } catch (err: any) {
    return res.status(500).json({ error: String(err.message || err) })
  }
}
