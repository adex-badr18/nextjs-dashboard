"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams(); // Get the current search parameters
    const pathname = usePathname(); // Get the current pathname
    const { replace } = useRouter(); // Get the router's replace function

    // Handle the search input change
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams); // Create a new URLSearchParams object

        if (term) {
            params.set("query", term); // Set the 'query' parameter
        } else {
            params.delete("query"); // Remove the 'query' parameter if the term is empty
        }

        replace(`${pathname}?${params.toString()}`); // Update the URL with the new search parameters
    }, 1000);

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}
