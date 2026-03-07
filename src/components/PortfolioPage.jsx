
// import profileImage from "../assets/images/profile.jpg";
import Orbit from "./Orbit";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-center text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
        I’m MD Jahid, a Full Stack Developer with a strong focus on Backend Development. I build scalable web applications using the MERN Stack, while also creating responsive and modern user interfaces with React, Next.js, and Tailwind CSS. I’m passionate about building efficient systems, writing clean code, and delivering high-quality software.
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


