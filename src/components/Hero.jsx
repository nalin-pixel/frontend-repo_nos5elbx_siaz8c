import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8T1M1R3h1xS1aZqv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl bg-white/70 dark:bg-black/50 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Suggestions & Bug Reporting for your Discord community
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Collect, triage, and act on feedback with OAuth login, public feed, and a secure admin panel.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium shadow">
              Submit Feedback
            </a>
            <a href="#public" className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 text-sm font-medium">
              View Public Feed
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
    </section>
  )
}
