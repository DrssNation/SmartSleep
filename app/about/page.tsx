import Link from "next/link";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
          About SmartTrack
        </h1>
        <p className="text-lg md:text-xl">
          Your trusted partner in achieving meaningful progress and reaching your goals.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          At SmartTrack, our mission is to help individuals unlock their full potential
          and achieve their goals with clarity and confidence. By providing
          clear insights into daily habits and progress patterns, we transform tracking into
          a foundation for growth, achievement, and personal success. Better progress means a brighter
          future — and we are here to guide you every step of the way.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-300">
          Why Choose SmartTrack?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card
            title="Comprehensive Tracking"
            text="Monitor your goals, milestones, and progress with precision and clarity."
          />
          <Card
            title="Personalized Insights"
            text="Receive tailored recommendations to improve your habits and daily routines."
          />
          <Card
            title="Holistic Progress"
            text="Connect progress data with lifestyle factors like productivity, health, and personal growth."
          />
          <Card
            title="User-Friendly Design"
            text="Enjoy an intuitive, seamless experience across all devices."
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
          Our Story
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          SmartTrack was born out of a growing need for better progress management
          tools. Our team of productivity experts, technologists, and personal development
          enthusiasts came together to build a platform that combines
          cutting-edge technology with actionable insights. Since our launch,
          we have helped thousands of users achieve their goals, build better habits,
          and live more purposeful, fulfilling lives.
        </p>
      </section>

      {/* Values Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
          Our Core Values
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Innovation"
            text="We leverage the latest technology to deliver meaningful progress insights."
          />
          <Card
            title="Empathy"
            text="We understand the challenges of goal-setting and design solutions with care."
          />
          <Card
            title="Growth First"
            text="Every feature we build is aimed at improving your progress and personal development."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-400">
          Ready to Track Smarter?
        </h2>
        <p className="text-lg mb-6 ">
          Join SmartTrack today and take the first step toward better progress,
          improved habits, and a more accomplished life.
        </p>

        <Button asChild className="bg-green-400 hover:bg-green-500 text-white">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </section>
    </div>
  );
}