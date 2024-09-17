import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Faqs() {
  const data = await getData();
  return (
    <>
      <div className="mt-28">
        <h2 className="text-3xl font-bold text-center  mb-2">
          Frequently Asked Questions
        </h2>
        <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl m-2 md:m-8 ">
          {data.slice(0, 4).map((post) => {
            return (
              <details className="p-6 group" close key={post.id}>
                <summary className="flex items-center justify-between cursor-pointer">
                  <h5 className=" text-sm lg:text-lg font-medium text-gray-900">
                    {post.title}
                  </h5>
                  <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">
                  {post.body}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </>
  );
}
