import Image from "next/image";
import Qiskit from "../../images/logos/Qiskit.svg";
import WTMWHITE from "../../images/logos/WTMAlgiers-white.png";
import GDGWHITE from "../../images/logos/GDGAlgiers-white.png";
import Twitter from "../../images/logos/twitter.png";
import Facebook from "../../images/logos/facebook.png";
import Instagram from "../../images/logos/instagram.png";
import Linkedin from "../../images/logos/linkedin.png";
const Footer = () => {
  const socialsMedia = [
    {
      social: "Twitter",
      logo: Twitter,
    },
    {
      social: "Facebook",
      logo: Facebook,
    },
    {
      social: "Instagram",
      logo: Instagram,
    },
    {
      social: "Linkedin",
      logo: Linkedin,
    },
  ];

  const links = [
    {
      linkName: "Home",
      content: [
        {
          name: "Registrations",
          redirect: "/",
        },
      ],
    },
    {
      linkName: "About",
      content: [
        {
          name: "About event",
          redirect: "/",
        },
        {
          name: "About us",
          redirect: "/",
        },
      ],
    },
    {
      linkName: "Partners",
      content: [
        {
          name: "Community Partners",
          redirect: "/",
        },
        {
          name: "Sponsors",
          redirect: "/",
        },
      ],
    },
    {
      linkName: "Speakers",
      content: [
        {
          name: "Speakers",
          redirect: "/",
        },
        {
          name: "Mentors",
          redirect: "/",
        },
        {
          name: "Agenda",
          redirect: "/",
        },
      ],
    },
  ];
  return (
    <footer className="mt-32 footer-bg text-qiskit-white flex flex-col gap-6">
      <div className="flex flex-col items-center lg:items-start lg:flex-row">
        <div className="-mt-16 order-first lg:order-last ">
          <Image src={Qiskit} alt="qiskit" />
        </div>
        <div className="pt-14 pl-4 lg:pl-11 2xl:pl-16">
          <div className="flex flex-col gap-6">
            {/* LOGOS */}
            <div className="flex items-center gap-7">
              <div className="cursor-pointer">
                <Image src={WTMWHITE} />
              </div>
              <div className="cursor-pointer">
                <Image src={GDGWHITE} />
              </div>
            </div>

            {/* MAIN */}
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex lg:w-2/6 flex-col lg:gap-14">
                <p className="hidden lg:flex font-light text-[0.9375rem]">
                  Dysfaktisk. Kas. Intradade. Rökroment. Hexasat. Var. Måns.
                  Ofase. Dihet. Euroktigt. Multidiligt. Säpong. Rism. Måfuhäda.{" "}
                </p>

                <div className="flex gap-10 justify-center items-center lg:justify-start">
                  {socialsMedia.map((socialMedia, idx) => {
                    return (
                      <div key={idx} className="cursor-pointer">
                        <Image src={socialMedia.logo} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden lg:flex gap-9 flex-1 justify-between">
                {links.map((link, idx1) => {
                  return (
                    <ul key={idx1}>
                      <li className="font-semibold mb-6">{link.linkName}</li>
                      <div className="flex flex-col gap-6">
                        {link.content.map((cont, idx2) => {
                          console.log(cont.name);
                          return (
                            <li
                              key={idx1 * idx2 + 1}
                              className="text-[0.9375rem]"
                            >
                              {cont.name}
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  );
                })}
              </div>
            </div>

            {/* Copyrights */}
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <p className="text-[0.9375rem] pb-2 text-center">
          Copyright © 2022 GDG & WTM Algiers . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
