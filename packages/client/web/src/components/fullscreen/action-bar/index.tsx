import { cn } from "@/lib/utils";

export function ActionBar(props: JSX.IntrinsicElements["div"]) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn(
        "bg-background border-t px-2 py-3 max-w-full",
        "flex items-end justify-center overflow-hidden",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}