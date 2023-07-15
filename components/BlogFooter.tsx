import Link from "next/link";

export default function BlogFooter({
  className,
  email,
  bottomHeader,
  bottomLink,
  bottomHref,
}: {
  className?: string;
  email: string;
  bottomHeader: string;
  bottomLink: string;
  bottomHref: string;
}) {
  return (
    <footer className="mt-10 border-t">
      <div className="container mx-auto max-w-4xl px-5">
        <div className="flex flex-col pb-16 pt-8 lg:py-16 ">
          <a
            className="opacity-85 text-md mb-6 flex w-fit items-center gap-1 fill-accent-5 p-4 leading-tight tracking-tighter text-accent-5 transition-all hover:underline hover:opacity-100 dark:fill-accent-3 dark:text-accent-3 lg:m-4 lg:mb-0 lg:pr-4 lg:text-left lg:text-lg "
            href="https://github.com/1pharaxh"
            target="_blank"
            title="My GitHub Profile"
          >
            GitHub
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M21 3h-6m6 0l-9 9m9-9v6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
          <a
            className="opacity-85 text-md mb-6 flex w-fit items-center gap-1 fill-accent-5 p-4 leading-tight tracking-tighter text-accent-5 transition-all hover:underline hover:opacity-100 dark:fill-accent-3 dark:text-accent-3 lg:m-4 lg:mb-0 lg:pr-4 lg:text-left lg:text-lg "
            href={`mailto:${email}`}
            target="_blank"
            title="Email me"
          >
            Email
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M21 3h-6m6 0l-9 9m9-9v6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>

          <p className="text-lg font-semibold p-4 leading-tight tracking-tighter lg:m-4  lg:pr-4 lg:text-left lg:text-xl ">
            {bottomHeader}
            <Link href={bottomHref} className="hover:underline">
              {" "}
              {bottomLink}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
