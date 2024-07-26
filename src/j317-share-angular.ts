// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from "rxjs";

export type SharedState = {
    sharedState: BehaviorSubject<string>;
}

export const sharedState = new BehaviorSubject<string>("initial value");

export const compoundState: SharedState = {
    sharedState: sharedState
};