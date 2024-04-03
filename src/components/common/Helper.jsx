import joinZKlogo from '../../assets/images/png/download.png'
import ecoCardImg_first from '../../assets/images/png/our-eco-img-first.png'
import ecoCardImg_second from '../../assets/images/png/our-eco-img-second.png'
import ecoCardImg_third from '../../assets/images/png/our-eco-img-third.png'
export const coreValueCardList = [
    {
        title: "Privacy",
        description: "Our Zero-Knowledge Privacy integrations provide untraceable transactions,",
        spandescription: " so your swaps are yours alone to know",
        image: joinZKlogo,
    },
    {
        title: "Efficiency",
        description: "We offer limitless swapping with minimal fees and rapid processing,",
        spandescription: " so your trades are as seamless as they are efficient",
        image: joinZKlogo,
    },
    {
        title: "Confidentiality",
        description: "Discretion is a non-negotiable. We promise no KYC, absolute control of your funds,",
        spandescription: " and ironclad encryption for every transaction you make",
        image: joinZKlogo,
        gridCenter: "sm:col-span-2 md:col-span-1",
    },
];
export const ourEcoCardList = [
    {
        badge: "Trade without limits",
        title: "Anonymous cross-chain swap",
        description: "Trade without limits or custody.",
        spandescription: "Our platform offers unmatched rates and fast swaps across an expansive network of blockchains and tokens",
        image: ecoCardImg_first,
        hidden: "md:hidden"
    },
    {
        badge: "ERC-4337",
        title: "ERC-4337 compliant wallet",
        description: "Experience freedom with our seedless, gasless web3 wallet. Store, buy, exchange",
        spandescription: ", and stake crypto on mobile and desktop platforms",
        image: ecoCardImg_second,
    },
    {
        badge: "Fast swapping process",
        title: "Telegram bot",
        description: "Integrate your swapping process with Telegram",
        spandescription: " to make your trades even faster and more convenient",
        image: ecoCardImg_third,
        rotate: "md:rotate-[59deg]",
    },

];