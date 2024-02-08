import { Tooltip } from "@material-tailwind/react";

const Data = [
  {
    link: "https://www.linkedin.com/in/rajalakshmi-ganesh-87a1392a8/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    tooltip: "Connect On Linkedin",
  },
  {
    link: "https://github.com/raji2764",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    tooltip: "Connect On Github",
  },
  {
    link: "https://twitter.com/Rajalak62718763",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-twitter-9420782-7651212.png?f=webp&w=256",
    tooltip: "Follow On X",
  },
];

const SocialMedia = () => {
  return (
    <section className="fixed xl:bottom-40 xl:left-4 2xl:bottom-80 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
      {Data.map((item, index) => {
        return (
          <Tooltip
            key={index}
            color="lightBlue"
            placement="right"
            content={item.tooltip}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center"
            >
              <img src={item.icon} alt={item.tooltip} className="p-2" />
            </a>
          </Tooltip>
        );
      })}
    </section>
  );
};

export default SocialMedia;
