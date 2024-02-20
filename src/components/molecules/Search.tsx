import React from "react";
import Text from "~/components/atoms/Text";
import Icon from "~/components/atoms/Icon";

const Search = () => {
  return (
    <div className="flex items-center">
      {/* screen readers */}
      <Text variant="label" className="sr-only">
        Search
      </Text>

      <div className="relative w-full">
        <div className="absolute inset-y-0 flex items-center pl-4">
          <Icon type="fa" icon="search" />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900"
        />
      </div>
    </div>
  );
};

export default Search;
