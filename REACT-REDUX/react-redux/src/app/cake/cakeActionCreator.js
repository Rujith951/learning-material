import { BUY_CAKE, RESTORE_CAKE } from "./cakeActions";

export function buyCake(count) {
	return { type: BUY_CAKE, payload: count };
}

export function restoreCake(count) {
	return { type: RESTORE_CAKE, payload: count };
}
