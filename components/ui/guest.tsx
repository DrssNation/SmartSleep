import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Guest() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-12 bg-gray-100 pt-20">
        <div className="flex-1 mb-8 xl:pl-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-green-400">
            Welcome to Smart Sleep
          </h1>
          <p className="md:text-xl mb-6">
            Discover the smarter way to rest. Smart Sleep helps you understand
            your sleep cycles, build healthier habits, and wake up ready to take
            on the day.
          </p>
          <SignInButton>
            <Button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </Button>
          </SignInButton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
          src="/sleeping.jpg" 
          alt ="Sleeping Illustration"
          width={600}
          height={600}
          >

          </Image>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gray-300"></div>

      {/* Frequently Asked Questions Section */}
      <div className="py-16 px-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-bold">What is Smart Sleep?</h3>
            <p className="text-gray-600">
              Smart Sleep is your personal sleep companion, designed to track
              your rest and guide you toward better nights and brighter
              mornings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">How does it work?</h3>
            <p className="text-gray-600">
              By analyzing your sleep data, Smart Sleep delivers tailored
              insights and practical tips to help you improve your sleep
              quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Is Smart Sleep free?</h3>
            <p className="text-gray-600">
              Yes! You can start with our free plan to access essential
              features. Upgrade to premium for deeper analytics and personalized
              recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gray-300"></div>

      {/* Testimonials Section */}
      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow">
            <p className="text-gray-700 mb-4">
              &quot;Smart Sleep helped me finally understand my sleep patterns.
              I wake up feeling refreshed and focused.&quot;
            </p>
            <p>- Sarah L.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <p className="text-gray-700 mb-4">
              &quot;The personalized tips made a huge difference. My nights are
              calmer, and my days are more productive.&quot;
            </p>
            <p>- John D.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <p className="text-gray-700 mb-4">
              &quot;Smart Sleep is simple, effective, and eye-opening. It’s the
              best tool I’ve used for improving my rest.&quot;
            </p>
            <p>- Emily R.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
