import Image from "next/image";
import Link from "next/link";

import CategoryLabel from "@/components/CategoryLabel";
import AuthorCard from "@/components/AuthorCard";

export default function Home() {
  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <div className="!pt-0">
        <div className="max-w-screen-md mx-auto">
          <div className="text-center">
            <CategoryLabel />
          </div>

          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Architectural Engineering Wonders of the modern era for your
            Inspiration
          </h1>

          <div className="flex justify-center my-5 space-x-3 text-gray-500">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-10 h-10">
                <Image
                  src="https://pbs.twimg.com/profile_images/1063353598673858560/ipvjprrg_400x400.jpg"
                  fill
                  alt="author"
                  sizes="30px"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">Baptiste</p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime=""
                  >
                    Lundi 8 février 2023
                  </time>
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
        <Image
          src="https://images.unsplash.com/photo-1675767528117-963ce219b52a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="title"
          sizes="80vw"
          fill
          loading="eager"
        />
      </div>

      <div>
        <article className="max-w-screen-md mx-auto ">
          <div className="mx-auto my-3 w-10/12">
            <p className="mt-10 mb-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              sunt consectetur! Maxime vel molestias provident natus eius?
              Itaque possimus commodi quia quos. Molestiae aliquid illum ut
              doloribus, ex nobis laboriosam.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              sunt consectetur! Maxime vel molestias provident natus eius?
              Itaque possimus commodi quia quos. Molestiae aliquid illum ut
              doloribus, ex nobis laboriosam.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              sunt consectetur! Maxime vel molestias provident natus eius?
              Itaque possimus commodi quia quos. Molestiae aliquid illum ut
              doloribus, ex nobis laboriosam.
            </p>
          </div>
          <div className="flex justify-center mt-7 mb-7">
            <Link
              href="/"
              className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20"
            >
              ← View all posts
            </Link>
          </div>
          <AuthorCard />
        </article>
      </div>
    </div>
  );
}
