import clsx from "clsx";

const GridRow = ({ type = 'grid', children, className }) => {
  return (
    <div className={clsx(`${type}-row`, className)}>
      {children}
    </div>
  );
};
GridRow.displayName = 'GridRow';

const GridColumn = ({ type = 'grid', children, className }) => {
  return (
    <div className={clsx(`${type}-col`, className)}>
      {children}
    </div>
  );
};
GridColumn.displayName = 'GridColumn';