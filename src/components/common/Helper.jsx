import joinZKlogo from "../../assets/images/png/download.png";
import ecoCardImg_first from "../../assets/images/webp/our-eco-img-first.webp";
import ecoCardImg_second from "../../assets/images/webp/our-eco-img-second.webp";
import ecoCardImg_third from "../../assets/images/webp/our-eco-img-third.webp";
import star from "../../assets/images/png/star.png";
import freedom from "../../assets/images/png/freedom.png";
import { ConfidentialityIcon, EfficiencyIcon, PrivacyIcon } from "./Icons";

export const coreValueCardList = [
  {
    title: "Privacy",
    description:
      "Our Zero-Knowledge Privacy integrations provide untraceable transactions,",
    spandescription: " so your swaps are yours alone to know",
    image: <PrivacyIcon />,
  },
  {
    title: "Efficiency",
    description:
      "We offer limitless swapping with minimal fees and rapid processing,",
    spandescription: " so your trades are as seamless as they are efficient",
    image: <EfficiencyIcon />,
  },
  {
    title: "Confidentiality",
    description:
      "Discretion is a non-negotiable. We promise no KYC, absolute control of your funds,",
    spandescription: " and ironclad encryption for every transaction you make",
    image: <ConfidentialityIcon />,
  },
];
export const ourEcoCardList = [
  {
    badge: "Trade without limits",
    title: "Anonymous cross-chain swap",
    description: "Trade without limits or custody.",
    spandescription:
      "Our platform offers unmatched rates and fast swaps across an expansive network of blockchains and tokens",
    image: ecoCardImg_first,
    hidden: "md:hidden",
    rotate: "rotate-[30deg] mt-[14px] sm:mt-0 !max-w-[238px]",
  },
  {
    badge: "ERC-4337",
    title: "ERC-4337 compliant wallet",
    description:
      "Experience freedom with our seedless, gasless web3 wallet. Store, buy, exchange",
    spandescription: ", and stake crypto on mobile and desktop platforms",
    image: ecoCardImg_second,
    rotate: "mt-8 sm:mt-0",
    badgeColor: "bg-[#FD9834]",
    badgePosition: "-start-16",
    blurOne: "w-[775px] h-[470px] top-[50%] start-[-126%]",
    blurTwo: "w-[775px] h-[470px] top-[-126%] start-[46%]",
  },
  {
    badge: "Fast swapping process",
    title: "Telegram bot",
    description: "Integrate your swapping process with Telegram",
    spandescription: " to make your trades even faster and more convenient",
    image: ecoCardImg_third,
    rotate: "rotate-[30deg] md:rotate-[-59deg] mt-[43px] sm:mt-0",
    blurOne: "w-[1105px] h-[438px] bottom-[-110%] start-[16%]",
    blurTwo: "w-[1105px] h-[438px] top-[-116%] start-[-48%] ",
  },
];

// ==== DECENTRALIZED ====

export const decentralizedList = [
  {
    title: "No red tape—just freedom",
    description:
      "We kick KYC back to the past and embrace a non-custodial approach, giving you the freedom to manage your crypto your way. At zkGUN, you're in control, with the autonomy to move your assets freely while shielded by RAILGUN-enhanced security measures",
    imageUrl: freedom,
  },
  {
    imageUrl: star,

    title: "Privacy at our core",
    description:
      "Your privacy is our top priority. We integrate Zero-Knowledge Privacy into our app, ensuring your transactions stay anonymous and secure. With zkGUN, your crypto actions remain yours alone, transparent only to you.",
  },
  {
    title: "Swap without limits",
    description:
      "Our platform lets you exchange any amount of crypto across multiple chains quickly and without fuss. We’re talking minutes, not hours, making sure you’re always a step ahead in the fast-moving crypto market",
  },
  {
    title: "More than just a swap service",
    description:
      "zkGUN goes beyond basic swapping. Our ERC-4337 compliant wallet introduces gasless transactions to boost your crypto handling experience. Plus, our Telegram Bot brings swapping directly to your chat window for extra convenience",
  },
  {
    subImage: freedom,
    subtitle: "Decentralized finance made simple",
  },
];
