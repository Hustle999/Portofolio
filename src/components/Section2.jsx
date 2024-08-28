import { Title } from "./svg/Title";

export const Section2 = () => {
  return (
    <div className="flex flex-col md:px-8 md:py-24 md:gap-12 items-center px-4 py-16 gap-6">
      <Title text={"About me"} />
      <div className="md:flex md:flex-row md:justify-between flex flex-col items-center gap-6">
        <img
          className="  border-r-5 border-gray-600"
          src="./Secondpropic.jpg"
          alt=""
        />
        <div className="flex flex-col md:w-[50%] gap-6">
          <div className="text-[30px] font-bold dark:text-white">
            Curious about me? Here you have it:
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-gray-600 dark:text-gray-300">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Finally, some quick bits about me.
            </div>
            <div className="flex gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <li className="text-gray-600 dark:text-gray-300">
                  B.E. in Computer Engineering
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Full time freelancer
                </li>
              </div>
              <div>
                <li className="text-gray-600 dark:text-gray-300">
                  Avid learner
                </li>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
