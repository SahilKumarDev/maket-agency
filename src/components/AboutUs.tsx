import Image from "next/image";
import { WordPullUpDemo } from "./demos/word-pull-up-demo";
import { services } from "@/utils/data";
import { Card, CardContent } from "./ui/card";

const AboutUs = () => {
  return (
    <section>
      <WordPullUpDemo />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <Card key={service.title} className="bg-gray-100 dark:bg-accent">
            <CardContent>
              <Image
                src={service.icon}
                width={10000}
                height={10000}
                className="object-contain p-4 w-full h-40 rounded-md"
                alt="image"
              />
              <h1 className="text-xl font-medium">{service.title}</h1>
              <p className="">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
