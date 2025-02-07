"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "./mycontext";

function Pagination({ total }) {
  const numOfPages = total % 6;
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-10 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">6</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-[#2188CA] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2188CA]"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              4
            </a>

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

function Sorters() {
  return (
    <div className="py-3 px-1.5 flex justify-between items-baseline flex-wrap gap-2">
      <div className="flex max-md:flex-col items-baseline gap-2">
        <span className="text-sm font-medium">Sort by</span>
        <div className="flex gap-1 overflow-auto">
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 whitespace-nowrap">
            Price up
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 whitespace-nowrap">
            Price down
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Newest
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Popularity
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Location
          </span>
        </div>
      </div>
      <span className="text-sm">
        {" "}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Filter by
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>
        </Menu>
      </span>
    </div>
  );
}

export default function Properties({
  max,
  showPagination = true,
  showSorters = false,
  sortBy: sortByProp = "popularity",
}) {
  const maxItems = max ? (max == "unlimited" ? 1000 : parseInt(max)) : 1000;

  const [properties, setProperties] = useState([]);
  const [slicedProperties, setSlicedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(
    sortByProp.toLowerCase().replace(" ", "_")
  );
  const [total, setTotal] = useState(0);

  const oneWeekAgo = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date;
  };

  function Sort() {
    if (properties.length < 0) return;
    const sorter = sortByProp.toLowerCase().replace(" ", "_");
    // setSortBy(sorter);
    if (sorter == "cheapest") {
      setSlicedProperties(
        properties
          .sort((a, b) => a.price_per_night - b.price_per_night)
          .slice(0, maxItems)
      );
    } else if (sorter == "oldest") {
      setSlicedProperties(
        properties
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
          .slice(0, maxItems)
      );
    } else if (sorter == "newest") {
      setSlicedProperties(
        properties
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, maxItems)
      );
    } else if (sorter == "popularity") {
      setSlicedProperties(
        properties.sort((a, b) => b.rating - a.rating).slice(0, maxItems)
      );
    } else if (sorter == "relevancy") {
      setSlicedProperties(
        properties
          .sort((a, b) => b.max_guests - a.max_guests)
          .slice(0, maxItems)
      );
    } else {
      setSlicedProperties(allProperties.slice(0, maxItems));
    }
  }

  useEffect(() => {
    const fetchProperties = async () => {
      const allProperties = await fetch(`/api/barks`).then((response) =>
        response.json()
      );
      setTotal(allProperties.length);
      setProperties(allProperties);
      setSortBy(sortByProp.toLowerCase().replace(" ", "_"));
      setSlicedProperties(allProperties.slice(0, maxItems));
      setLoading(false);
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    setSlicedProperties(properties.slice(0, maxItems));
  }, [maxItems]);

  useEffect(() => {
    Sort();
  }, [sortByProp]);

  // Render based on the states
  if (loading) return <div>Loading properties...</div>;

  return (
    <div className="flex flex-col gap-10">
      {/* <span className="pt-10 relative right-0">
        SORT: "{sortBy}" {JSON.stringify(slicedProperties)}
      </span> */}

      <div>
        {showSorters === true && <Sorters />}
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {slicedProperties.map((property) => (
            <div
              key={property.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="w-full bg-gray-200 sm:aspect-none group-hover:opacity-75 h-60">
                <img
                  src={property?.image_url || "https://picsum.photos/500/500"}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900 flex gap-2 items-baseline">
                  {property.name}

                  {new Date(property.created_at) > oneWeekAgo() && (
                    <span className="inline-flex items-center rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">
                      New
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-500">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPagination === true && <Pagination total={total} />}
    </div>
  );
}
