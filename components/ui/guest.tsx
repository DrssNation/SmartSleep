import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Guest() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-12 pt-20">
        <div className="flex-1 mb-8 xl:pl-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-green-400">
            Welcome to SmartTrack
          </h1>
          <p className="md:text-xl mb-6">
            Discover the smarter way to track your progress. SmartTrack helps
            you monitor your goals, stay accountable, and achieve meaningful
            results with personalized insights and beautiful visualizations.
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
            alt="Progress Tracking Illustration"
            width={600}
            height={600}
          ></Image>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gray-300"></div>

      {/* Frequently Asked Questions Section */}
      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <Card
            title="What is SmartTrack?"
            text="martTrack is your personal progress companion, designed to help
              you set goals, track your journey, and celebrate your wins with
              intuitive tracking tools and insights."
          />
          <Card
            title="How does it work?"
            text="By logging your daily activities and milestones, SmartTrack
              provides tailored insights and progress analytics to help you
              stay consistent and reach your goals faster."
          />
          <Card
            title="Is SmartTrack Free?"
            text="Yes! You can start with our free plan to access essential
              tracking features. Upgrade to premium for advanced analytics and
              personalized goal recommendations."
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gray-300"></div>

      {/* Testimonials Section */}
      <div className="py-16 px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-white p-4 rounded-md shadow mx-4 mb-4">
                  <p className="text-gray-700 mb-4 text-lg">
                    &quot;SmartTrack helped me finally stay consistent with my
                    goals. The tracking is intuitive and keeps me motivated
                    every day.&quot;
                  </p>
                  <p className="font-semibold">- Sarah L.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-white p-4 rounded-md shadow mx-4 mb-4">
                  <p className="text-gray-700 mb-4 text-lg">
                    &quot;The progress insights made a huge difference. I can
                    see my achievements clearly and stay focused on what
                    matters.&quot;
                  </p>
                  <p className="font-semibold">- John D.</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-white p-4 rounded-md shadow mx-4 mb-4">
                  <p className="text-gray-700 mb-4 text-lg">
                    &quot;SmartTrack is simple, effective, and inspiring. It is
                    the best tool I have used for tracking my personal
                    growth.&quot;
                  </p>
                  <p className="font-semibold">- Emily R.</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
