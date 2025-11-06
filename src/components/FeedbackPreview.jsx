import { MessageSquare, Eye, Lock, Star } from 'lucide-react'

const sample = [
  {
    id: '1',
    title: 'Add role-based welcome messages',
    description: 'Allow custom onboarding messages for specific roles with embeds.',
    category: 'Feature',
    priority: 'Medium',
    visibility: 'public',
    status: 'active',
    votes: 42
  },
  {
    id: '2',
    title: 'Fix mobile nav cut-off',
    description: 'On smaller devices the nav overlaps content in landscape.',
    category: 'Bug',
    priority: 'High',
    visibility: 'public',
    status: 'open',
    votes: 18
  },
  {
    id: '3',
    title: 'Moderation note permissions',
    description: 'Private notes should only be visible to assigned staff.',
    category: 'Security',
    priority: 'High',
    visibility: 'private',
    status: 'locked',
    votes: 0
  }
]

function Badge({ children, color = 'indigo' }) {
  const colors = {
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-800',
    green: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800',
    red: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800',
    gray: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/60 dark:text-gray-200 dark:border-gray-700'
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded border ${colors[color]}`}>
      {children}
    </span>
  )
}

export default function FeedbackPreview() {
  return (
    <section id="public" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Public Feed Preview</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Public items are visible to everyone. Private items are restricted to their owner and staff.</p>
          </div>
          <a href="#submit" className="hidden sm:inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm font-medium">
            <MessageSquare size={16} />
            Submit feedback
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sample.map((item) => (
            <article key={item.id} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge color={item.category === 'Bug' ? 'red' : 'indigo'}>{item.category}</Badge>
                  <Badge color={item.priority === 'High' ? 'red' : 'green'}>Priority: {item.priority}</Badge>
                </div>
                {item.visibility === 'public' ? (
                  <Badge color="gray"><Eye className="w-3 h-3 mr-1" /> Public</Badge>
                ) : (
                  <Badge color="gray"><Lock className="w-3 h-3 mr-1" /> Private</Badge>
                )}
              </div>

              <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{item.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-sm text-amber-600">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> {item.votes}
                </span>
                <Badge color={item.status === 'locked' ? 'red' : 'green'}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Badge>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
