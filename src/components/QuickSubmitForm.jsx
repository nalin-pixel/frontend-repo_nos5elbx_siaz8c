import { useState } from 'react'
import { Send, Paperclip } from 'lucide-react'

const categories = ['Feature', 'Bug', 'Security', 'Moderation']
const priorities = ['Low', 'Medium', 'High']

export default function QuickSubmitForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Feature')
  const [priority, setPriority] = useState('Medium')
  const [visibility, setVisibility] = useState('public')
  const [files, setFiles] = useState([])

  const submit = (e) => {
    e.preventDefault()
    // For now, just show a toast-like alert. Backend wiring will be added later.
    alert(`Submitted: ${title}\n${category} - ${priority} - ${visibility}\nAttachments: ${files.length}`)
    setTitle('')
    setDescription('')
    setCategory('Feature')
    setPriority('Medium')
    setVisibility('public')
    setFiles([])
  }

  return (
    <section id="submit" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Submit</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Share a suggestion, report a bug, or request a feature.</p>
          </div>

          <form onSubmit={submit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm" placeholder="Concise summary" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={4} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm" placeholder="Include steps, expected vs actual behavior..." />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm">
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm">
                  {priorities.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Visibility</label>
                <select value={visibility} onChange={(e) => setVisibility(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm">
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Attachments</label>
              <div className="mt-1 flex items-center justify-between gap-3 rounded-md border border-dashed border-gray-300 dark:border-gray-700 p-3">
                <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} className="text-sm" />
                <span className="text-xs text-gray-500">{files.length} selected</span>
              </div>
            </div>

            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium">
              <Send size={16} /> Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
