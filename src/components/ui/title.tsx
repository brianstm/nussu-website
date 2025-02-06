interface TitleProps {
  title: string;
  description: string;
}

function Title({ title, description }: TitleProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4 text-center">
      <div className="md:px-72 px-10">
        <p className="md:text-md text-md font-light text-accent md:pb-4 pb-4 font-manrope">
          SINCE — Y:1949
        </p>
        <h1 className="font-sansbold md:text-8xl text-5xl leading-[1.2] md:leading-[1.3]">
          {title}
        </h1>
      </div>
      {description && (
        <p className="mt-14 md:text-2xl text-md font-light text-accent md:max-w-lg max-w-5xl font-manrope md:leading-[1.8] leading-[1.7]">
          {description}
        </p>
      )}
    </div>
  );
}

export { Title };
