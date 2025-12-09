import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setOutput('')
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Unknown error')
      setOutput(data.output)
    } catch (err: any) {
      setOutput(String(err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Head>
        <title>IELTS Prep.AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">IELTS Prep.AI</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={6}
              className="w-full border rounded-md p-3"
              placeholder="Enter prompt for the AI (e.g. correct my essay, ask for speaking tips)..."
            />
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Thinking…' : 'Send'}
              </button>
              <button
                type="button"
                onClick={() => { setPrompt(''); setOutput('') }}
                className="px-3 py-2 border rounded"
              >
                Clear
              </button>
            </div>
          </form>

          <div className="mt-6">
            <h2 className="font-medium mb-2">AI Response</h2>
            <div className="whitespace-pre-wrap bg-gray-100 p-4 rounded min-h-[120px]">{output}</div>
          </div>
        </div>
      </main>
    </div>
  )
}
