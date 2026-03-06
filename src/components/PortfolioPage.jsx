
// import profileImage from "../assets/images/profile.jpg";
import Orbit from "./Orbit";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-center text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          I’m Jahid Hossain, a passionate Front-End Developer with expertise in building responsive and user-friendly web applications using modern frameworks like React.js, Next.js, Vue.js, and styling tools such as Tailwind CSS and Ant Design. I specialize in creating dynamic, scalable, and visually appealing web interfaces, ensuring seamless user experiences across devices.

In addition to my development skills, I bring professional experience as an SCM (Supply Chain Management) Executive, where I honed my abilities in process optimization, inventory management, and ensuring efficient supply chain operations. My dual expertise in technology and logistics allows me to approach challenges with both analytical and problem-solving mindsets.

I am passionate about continuous learning, collaborating with teams, and delivering impactful solutions that drive growth and efficiency.
          </p>
        </div>
        <div>
          {/* <img
            src={profileImage}
            alt="Profile"
            className="w-80 h-80   hover:translate-x-5 rounded-lg object-cover shadow-lg"
          /> */}
          <Orbit/>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


