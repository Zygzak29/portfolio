import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "2" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "#";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
<br />I am an IT specialist specializing in cybersecurity and 3D printing. I combine technical knowledge with a practical approach to problem-solving – both in the area of IT system protection and in the design and preparation of 3D models for printing.
<br />In the area of cybersecurity, I am responsible for vulnerability analysis, firewall configuration, permission management, and user education on the safe use of technology. I am interested in penetration testing, data protection, and responding to security incidents.
<br />In the field of 3D printing, I have experience in CAD model design, preparing them for printing (slicing), and operating and calibrating FDM printers. I work with both technical models and creative prototypes.
<br />Technologies and tools I use:
<br />Cybersecurity: Kali Linux, Wireshark, Nmap, Metasploit, pfSense, Fail2Ban, OpenVAS, Bitwarden, VeraCrypt
<br />Networking and systems: Linux (Ubuntu, Debian), Windows Server, VirtualBox, Docker
<br />3D printing: Fusion 360, Tinkercad, PrusaSlicer, Cura, OctoPrint, FDM printers (Creality, Prusa)
<br />Other: Git, Python (automation and scripting basics), Bash, HTML/CSS basics
<br />I am constantly developing my skills and following the latest news in both IT security and additive technologies.     </p>
<br />My certificates
<br />IC3 Spark
<br />eJPT v2
<br />
<br />State certificate confirming the ability to manage the 3D printing process using FDM technology
<br />
<br />Driving license category AM, B1, B
<br />Drone pilot category A1/A3
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
