import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="md:px-28 px-8">
      <section id="about" className="py-24 md:py-32">
      <h2 className="text-4xl font-bold text-center mb-12">about me</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        {/* Text Content */}
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Usman, a Software Engineering  at{' '}
            <a
              href="https://www.uettaxila.edu.pk/"
              className="relative text-accent group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bugdev
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"></span>
            </a>
            .<br /> I&apos;m an experienced & certified full stack developer. Also, learning new technologies and frameworks is my passion.
          </p>
          <p>
            From the outset, I was captivated by the power of code to transform ideas into reality. My academic experience has provided me with a solid foundation in software principles, while also allowing me to dive into the latest advancements in software fields.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
            <li className="flex before:content-['▹'] before:mr-3 before:text-accent">React.js</li>
            <li className="flex before:content-['▹'] before:mr-3 before:text-accent">Tailwind CSS</li>
            <li className="flex before:content-['▹'] before:mr-3 before:text-accent">Next.js</li>
            <li className="flex before:content-['▹'] before:mr-3 before:text-accent">Node.js </li>
            <li className="flex before:content-['▹'] before:mr-3 before:text-accent">Express.js</li>
            <li className="flex before:content-['▹'] before:mr-3 before:text-accent">MongoDB</li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="relative ">
          <Image
            alt="Arbab Mustafa"
            loading="lazy"
            width={400}
            height={400}
            decoding="async"
            className="rounded shadow-xl"
            src="/profile.webp"
          />
        </div>
      </main>
    </section>
    </div>
  );
};

export default AboutMe;
