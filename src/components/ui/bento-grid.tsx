import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[400px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 bg-background z-[2] rounded-xl group/bento transition duration-200 dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] min-h-min",
        className
      )}
    >
      {header}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        <div className='flex justify-start items-start gap-3 my-2'>
          {icon}
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className='font-sans font-bold text-neutral-600 dark:text-neutral-200'
          ></div>
        </div>
        <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 line-clamp-4'>
          {description}
        </div>
      </div>
    </div>
  );
};
