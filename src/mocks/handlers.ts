import { rest } from 'msw';
import activities from '@/mocks/data/activities.json';
import actImages from '@/mocks/data/mapActImages.json';

const boredURL = 'https://www.boredapi.com/api/activity';
let nonPickedActs = Array.from({ length: activities.length }, (_, i) => i); // chose index will be removed

export const handlers = [
	rest.get(boredURL, (req, res, ctx) => {
		// 'ctx' stand for 'context'
		// (TODO) handle run-out-of acts: here and in client's components
		if (nonPickedActs.length === 0) {
			return res(ctx.status(400), ctx.json({ msg: "We're run out of tasks" }));
		}
		const randIndex = Math.floor(Math.random() * nonPickedActs.length);
		const act = activities[nonPickedActs[randIndex]];
		nonPickedActs = nonPickedActs.filter((_, i) => i !== randIndex);
		return res(ctx.json(act));
	}),
	rest.get(
		'https://source.unsplash.com/random/300x233',
		async (req, res, ctx) => {
			// read first key from an iterator
			const queryString: string = req.url.searchParams.keys().next().value;
			const URLImg: string | undefined = actImages.find(
				(act) => act.activity === queryString
			)?.img;

			if (URLImg) {
				// Source: https://mswjs.io/docs/recipes/binary-response-type#example
				const imageBuffer = await fetch(URLImg).then((res) =>
					res.arrayBuffer()
				);
				return res(
					ctx.set('Content-Length', imageBuffer.byteLength.toString()),
					ctx.set('Content-Type', 'image/jpeg'),
					ctx.body(imageBuffer)
				);
			}

			return res(ctx.status(400), ctx.json({ msg: 'Local image URL wrong' }));
		}
	),
];
