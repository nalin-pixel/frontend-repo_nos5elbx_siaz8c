import { Shield, CheckCircle2, Globe, Lock, BarChart3, Settings } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure Admin Panel',
    desc: 'Dual-gated access with Discord OAuth and an admin passphrase to protect moderation tools.'
  },
  {
    icon: Globe,
    title: 'Public & Private',
    desc: 'Creators choose visibility. Public feed for transparency; private items remain hidden.'
  },
  {
    icon: CheckCircle2,
    title: 'Status Workflow',
    desc: 'Accept, Reject, Activate, Close, Lock/Unlock with audit log and staff assignment.'
  },
  {
    icon: Lock,
    title: 'Owner Locking',
    desc: 'Lock suggestions to freeze edits and preserve state for investigations.'
  },
  {
    icon: BarChart3,
    title: 'Exports & Analytics',
    desc: 'Export CSV, view activity insights, and keep stakeholders informed.'
  },
  {
    icon: Settings,
    title: 'Fine-grained Controls',
    desc: 'Rate limiting, input validation, GDPR deletion, and webhook notifications.'
  }
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Why communities use GuildHub</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Purpose-built for Discord servers that care about structured feedback and moderation.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
              <div className="w-10 h-10 rounded-md bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
