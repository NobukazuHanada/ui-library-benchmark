import { derived, Readable, readable, writable } from "svelte/store";
import type { Item } from "./data/items";


export const searchQuery = writable("");



export function matched(item: Item | undefined): Readable<"no match" | { prefix: string, marked: string, suffix: string }> {
    return derived(searchQuery, (searchQuery, set) => {
        if (!item) {
            set("no match");
            return;
        }
        if (!searchQuery) {
            set("no match");
            return;
        }

        const name = item.en.toLowerCase();
        const searchIndex = name.indexOf(searchQuery);
        if (searchIndex === -1) {
            set("no match");
            return;
        }

        const prefix = item.en.substring(0, searchIndex);
        const marked = item.en.substring(
            searchIndex,
            searchIndex + searchQuery.length
        );
        const suffix = item.en.substring(searchIndex + searchQuery.length);

        set({
            prefix,marked,suffix
        });
        return;
    })
}