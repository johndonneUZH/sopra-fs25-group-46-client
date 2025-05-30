import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Sam Altman",
    username: "@sama",
    body: "This tool might save your startup.",
    img: "https://avatar.vercel.sh/sam",
  },
  {
    name: "Guillermo Rauch",
    username: "@rauchg",
    body: "This tool will make you unstoppable.",
    img: "https://avatar.vercel.sh/guillhermo",
  },
  {
    name: "Mark Zuckerberg",
    username: "@zuck",
    body: "Tracko will be the next big thing, if you don't use it you will go under.",
    img: "https://avatar.vercel.sh/mark",
  },
  {
    name: "Youssef Farag",
    username: "@youssef",
    body: "My sopra group keeps annoying me about this tool.",
    img: "https://avatar.vercel.sh/youssef",
  },
  {
    name: "Elon Musk",
    username: "@elon",
    body: "I reduced US government administration jobs by 80% thanks to Tracko.",
    img: "https://avatar.vercel.sh/elon",
  },
  {
    name: "Thomas Fritz",
    username: "@scrumdaddy",
    body: "Nobody scrums better than Tracko. I'm impressed!",
    img: "https://avatar.vercel.sh/thomas",
  },
  {
    name: "George Hotz",
    username: "@geohot",
    body: "Please accept my pull request!",
    img: "https://avatar.vercel.sh/george",
  },
  {
    name: "Jonathan Blow",
    username: "@Jonathan_Blow",
    body: "Finally some shippable code.",
    img: "https://avatar.vercel.sh/jonathan",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center text-left overflow-hidden max-w-250">
      <Marquee pauseOnHover={true} className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover={true} className="[--duration:20s] translate-x-[30%]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
