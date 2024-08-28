import {
  Footer,
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <Header />
      </div>
      <div className="container mx-auto">
        <Section1 />
      </div>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <Section2 />
        </div>
      </div>
      <Section3 />
      <div className="bg-gray-100 dark:bg-gray-900">
        <Section4 />
      </div>
      <div className="container mx-auto">
        <Section5 />
      </div>
      <Section6 />
      <div className="bg-gray-100 dark:bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}
