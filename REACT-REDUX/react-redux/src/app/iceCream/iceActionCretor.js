import { BUY_ICECREAM, RESTORE_ICECREAM } from "./iceCreamActions";

export function buyIceCream(count) {
	return { type: BUY_ICECREAM, payload: count };
}
export function restoreIceCream(count) {
	return { type: RESTORE_ICECREAM, payload: count };
}
