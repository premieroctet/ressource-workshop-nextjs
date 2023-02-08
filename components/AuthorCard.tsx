import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          <Image
            src="https://pbs.twimg.com/profile_images/1063353598673858560/ipvjprrg_400x400.jpg"
            fill
            alt="author"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About Baptiste
            </h4>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptatem omnis mollitia odit velit ex tempora adipisci, quas at
            quam dolores sapiente eos possimus tenetur amet voluptate sunt,
            natus veritatis!
          </div>
        </div>
      </div>
    </div>
  );
}
