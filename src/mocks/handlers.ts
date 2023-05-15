import { rest } from 'msw';
import activities from '@/mocks/data/activities.json';

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
];
