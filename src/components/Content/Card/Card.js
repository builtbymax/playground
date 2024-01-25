import clsx from "clsx";
import { forwardRef } from "react";
import Styles from "./Card.module.scss";
import Link from "next/link";

const Card = forwardRef(({ className, children, ...props }, ref) => {
  const Comp = props.href ? Link : 'div';
  return (
    <Comp className={clsx(Styles['card-element'], Styles[className], props.href && Styles['card-link'])} ref={ref} {...props}>
      {children}
    </Comp>
  );
});
Card.displayName = 'Card';

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={clsx(Styles['card-header'], className)} {...props}>
      {children}
    </div>
  );
};
CardHeader.displayName = 'CardHeader';

const CardTitle = ({ as: Tag = 'h3', className, children, ...props }) => {
  return (
    <Tag className={clsx(Styles['card-title'], className)} {...props}>
      {children}
    </Tag>
  );
};
CardTitle.displayName = 'CardTitle';

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={clsx(Styles['card-content'], className)} {...props}>
      {children}
    </div>
  );
};
CardContent.displayName = 'CardContent';

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div className={clsx(Styles['card-footer'], className)} {...props}>
      {children}
    </div>
  );
};
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
