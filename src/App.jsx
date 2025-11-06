import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import FeedbackPreview from './components/FeedbackPreview'
import QuickSubmitForm from './components/QuickSubmitForm'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <FeedbackPreview />
      <QuickSubmitForm />

      <footer className="border-t border-gray-200 dark:border-gray-800 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} GuildHub — Built for Discord communities.</p>
          <div className="flex items-center gap-4">
            <a href="#public" className="hover:text-gray-900 dark:hover:text-white">Public Feed</a>
            <a href="#submit" className="hover:text-gray-900 dark:hover:text-white">Submit</a>
            <a href="#admin" className="hover:text-gray-900 dark:hover:text-white">Admin</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
