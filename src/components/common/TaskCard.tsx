import { ReactElement } from 'react';

export default function TaskCard(): ReactElement {
	// Guide use source.unsplash: https://awik.io/generate-random-images-unsplash-without-using-api/
	return (
		<>
			<a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
				<img
					alt="Home"
					src="https://source.unsplash.com/random/300x233/?activity"
					className="h-56 w-full rounded-md object-cover"
				/>

				<div className="mt-2">
					<dl>
						<div>
							<dt className="sr-only">Topics</dt>

							<dd className="whitespace-nowrap inline-block rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
								Outside
							</dd>
							<dd className="whitespace-nowrap inline-block rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700">
								Morning
							</dd>
							<dd className="whitespace-nowrap inline-block rounded-full bg-yellow-100 px-2.5 py-0.5 text-sm text-yellow-700">
								Body
							</dd>
						</div>

						<div>
							<dt className="sr-only">Name</dt>

							<dd className="font-medium">
								Have a football scrimmage with some friends
							</dd>
						</div>
					</dl>

					<div className="mt-6 flex items-center gap-8 text-xs">
						<div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
							<svg
								className="h-4 w-4 text-indigo-700"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
								/>
							</svg>

							<div className="mt-1.5 sm:mt-0">
								<p className="text-gray-500">Participants</p>

								<p className="font-medium">8 people</p>
							</div>
						</div>

						<div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
							<svg
								className="h-4 w-4 text-indigo-700"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
								/>
							</svg>

							<div className="mt-1.5 sm:mt-0">
								<p className="text-gray-500">Price</p>

								<p className="font-medium">$$</p>
							</div>
						</div>
						<div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
							<svg
								className="h-4 w-4 text-indigo-700"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
								/>
							</svg>

							<div className="mt-1.5 sm:mt-0">
								<p className="text-gray-500">Accessibility</p>

								<p className="font-medium">0.2</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}
