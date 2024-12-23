import CreativeProcess from "@/components/CreativeProcess";
import { Testimonials } from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import Guarantees from "@/components/Guarantees";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import WorkingLogo from "@/components/WorkingLogo";
const testimonials = [
  {
    imageUrl: "/images/abhishek-singh.jpg",
    name: "Abhishek Singh",
    title: "Business Manager",
    quote:
      "Axis Buddy is a trusted partner for innovative design. They consistently deliver top-notch quality that drives results.",
  },
  {
    imageUrl: "/images/owner.png",
    name: "Sahil Kumar Dev",
    title: "Founder & CEO",
    quote:
      "As the founder, I value creativity and innovation. Axis Buddy's designs have elevated our projects and impressed our clients every time.",
  },
  {
    imageUrl: "/images/abhishek-go.jpg",
    name: "Abhishek Goswami",
    title: "Video Editor",
    quote:
      "Axis Buddy's video editing services are unmatched. Their attention to detail and creativity have helped us create engaging content.",
  },
  {
    imageUrl: "/images/profile-2.png",
    name: "Riya Verma",
    title: "Product Manager",
    quote:
      "Managing products requires attention to detail, and Axis Buddy's solutions streamline our workflow and exceed expectations.",
  },
  {
    imageUrl: "/images/male.png",
    name: "Arjun Singh",
    title: "Client",
    quote:
      "Working with Axis Buddy has been a game-changer. Their designs perfectly align with our brand's vision and goals.",
  },
];

export default function Home() {
  return (
    <>
      <div className="background-gradient" />

      <div className="px-4 lg:px-8 space-y-14 pb-10">
        <HeroSection />
        <AboutUs />
        <WorkingLogo />
        <CreativeProcess />
        <Testimonials speed="slow" items={testimonials} direction="right" />
        <Guarantees />
        <ContactUs />
      </div>
    </>
  );
}
