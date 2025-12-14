import Link from "next/link";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
          About SmartSleep
        </h1>
        <p className="text-lg md:text-xl">
          Your trusted partner in achieving restful nights and healthier days.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          At SmartSleep, our mission is to help individuals unlock deeper,
          restorative sleep and elevate their overall well-being. By providing
          clear insights into nightly habits and rhythms, we transform rest into
          a foundation for energy, focus, and joy. Better sleep means a brighter
          tomorrow — and we’re here to guide you every step of the way.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-300">
          Why Choose SmartSleep?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card
            title="Comprehensive Tracking"
            text="Monitor your sleep cycles, duration, and quality with precision."
          />
          <Card
            title="Personalized Insights"
            text="Receive tailored recommendations to improve sleep hygiene and nightly routines."
          />
          <Card
            title="Holistic Wellness"
            text="Connect sleep data with lifestyle factors like stress, nutrition, and exercise."
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
          SmartSleep was born out of a growing need for better sleep management
          tools. Our team of sleep experts, technologists, and wellness
          enthusiasts came together to build a platform that combines
          cutting-edge technology with actionable insights. Since our launch,
          we’ve helped thousands of users achieve deeper rest, reduce fatigue,
          and live healthier, happier lives.
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
            text="We leverage the latest technology to deliver meaningful sleep insights."
          />
          <Card
            title="Empathy"
            text="We understand the challenges of poor sleep and design solutions with care."
          />
          <Card
            title="Wellness First"
            text="Every feature we build is aimed at improving your health and happiness."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-400">
          Ready to Sleep Smarter?
        </h2>
        <p className="text-lg mb-6 ">
          Join SmartSleep today and take the first step toward better sleep,
          improved health, and a more energized life.
        </p>

        <Button asChild className="bg-green-400 hover:bg-green-500 text-white">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </section>
    </div>
  );
}
