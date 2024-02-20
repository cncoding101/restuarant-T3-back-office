import React from "react";
import ButtonIcon from "~/components/molecules/ButtonIcon";
import Dropdown from "~/components/molecules/Dropdown";
import Search from "~/components/molecules/Search";
import Table from "~/components/organisms/Table";

const ACTION_TYPES = {
  button: "button",
  filter: "filter",
} as const;

type Action = ActionButton | ActionFilter;
type ActionButton = {
  type: typeof ACTION_TYPES.button;
  props: React.ComponentProps<typeof ButtonIcon>;
};
type ActionFilter = {
  type: typeof ACTION_TYPES.filter;
  props: React.ComponentProps<typeof Dropdown>;
};
type ComponentProps<T extends React.ElementType> = React.ComponentProps<T>;

interface IProps<T extends object> {
  table: ComponentProps<typeof Table<T>>;
  actions?: Action[];
}

const TableWithSearch = <T extends object>(props: IProps<T>) => {
  const { table, actions } = props;
  return (
    <>
      {/* header */}
      <div className="flex items-center p-4">
        <form className="flex w-1/2 items-center">
          <Search />
        </form>

        {/* actions */}
        {actions && (
          <div className="flex grow items-stretch justify-end space-x-4">
            {actions.map((action, index) => createActionElement(action, index))}
          </div>
        )}
      </div>

      {/* content */}
      <Table<T> {...table} />
      {/* pagination */}
    </>
  );
};

const createActionElement = (props: Action, index: number) => {
  const { type, props: _props } = props;

  switch (type) {
    case ACTION_TYPES.button: {
      return <ButtonIcon {..._props} key={index}></ButtonIcon>;
    }

    case ACTION_TYPES.filter: {
      return <Dropdown {..._props} key={index}></Dropdown>;
    }
  }
};

export default TableWithSearch;
