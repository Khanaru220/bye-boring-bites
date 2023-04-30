import { ReactElement, useRef } from 'react';
import PropTypes from 'prop-types';
import pickRandomColor from '@/utils/pickRandomColor';

// interface TaskProps {
// 	name: string;
// 	type: string;
// 	participants: number;
// 	accessibility: number;
// 	price: number;
// }

TaskCard.propTypes = {
	activity: PropTypes.string,
	type: PropTypes.string,
	participants: PropTypes.number,
	accessibility: PropTypes.number,
	price: PropTypes.number,
	key: PropTypes.string,
};

interface TaskProps {
	// (?) need better way solve conflict warning between PropTypes vs TypeScript's implicity 'any'
	activity: string;
	type: string;
	participants: number;
	accessibility: number;
	price: number;
}

export default function TaskCard({
	activity: name,
	type,
	participants,
	accessibility,
	price,
}: TaskProps): ReactElement {
	const highlightClass = useRef(pickRandomColor());
	const randImgURL = useRef(
		`https://source.unsplash.com/random/300x233/?${Math.floor(
			Math.random() * 1000
		)}&?${name.trim().replaceAll(' ', '+')}`
	);

	// Guide use source.unsplash: https://awik.io/generate-random-images-unsplash-without-using-api/
	return (
		<>
			<a
				href="#"
				className="inline-block rounded-lg p-4 shadow-sm shadow-indigo-100"
			>
				<img
					alt="Home"
					// Source get unique random img: https://stackoverflow.com/questions/58330708/get-the-source-unsplash-url-of-the-picture
					src={randImgURL.current}
					className="h-56 w-full rounded-md object-cover"
				/>

				<div className="mt-2">
					<dl>
						<div>
							<dt className="sr-only">Name</dt>

							<dd className="font-medium">{name}</dd>
						</div>

						<div>
							<dt className="sr-only">Type</dt>

							<dd
								className={`whitespace-nowrap inline-block rounded-full ${highlightClass.current} px-2.5 py-0.5 text-sm`}
							>
								{type}
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

								<p className="font-medium">{participants}</p>
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

								<p className="font-medium">{'$'.repeat(price * 10)}</p>
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

								<p className="font-medium">{accessibility}</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}
