import Link from 'next/link';
import { Button } from '../ui/button';
import { BotMessageSquare, CheckCircle, Users, Zap, BarChart3 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-8">
            <BotMessageSquare size={80} color="#FF9E3DFF" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Master Your
            <span className="text-[#FF9E3DFF]"> Interviews</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Practice with AI-powered interviewers that adapt to your responses.
            Get personalized feedback and improve your interview skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg" asChild>
              <Link href="/signup">Start Practicing Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white dark:bg-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Why Choose Interviewer AI?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-[#FF9E3DFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                AI-Powered Questions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get realistic interview questions tailored to your industry and experience level.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-[#FF9E3DFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Personalized Feedback
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive detailed feedback on your answers, body language, and communication skills.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-[#FF9E3DFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Track Your Progress
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your improvement over time with detailed analytics and performance metrics.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-12 h-12 text-[#FF9E3DFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Real-time Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant analysis of your responses with suggestions for improvement during practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF9E3DFF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Create Your Profile
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tell us about your background and the type of interviews you want to practice.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF9E3DFF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Start Practicing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Engage in realistic interview simulations with our AI interviewer.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF9E3DFF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Get Feedback
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Review detailed feedback and tips to improve your interview performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-[#FF9E3DFF]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of professionals who have improved their interview skills with Interviewer AI.
          </p>
          <Button size="lg" className="bg-white text-[#FF9E3DFF] hover:bg-gray-100 px-8 py-4 text-lg" asChild>
            <Link href="/signup">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
