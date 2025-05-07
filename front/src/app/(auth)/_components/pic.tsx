export const SidePic = () => {
  return (
    <div className="h-screen w-1/2 bg-amber-400 relative">
      <img
        src="icon.svg"
        alt="iconpng"
        className="absolute max-w- top-8 left-0 sm:left-20"
      />
      <div className="absolute top-[35%] left-[30%] flex flex-col gap-5 w-fit">
        <img
          src="illustration.png"
          alt="illustration"
          className="size-40 sm:size-60 w-full flex justify-center"
        />
        <div>
          <h1 className="text-center text-base sm:text-2xl font-bold">
            Fund your creative work
          </h1>
          <h4 className="text-center text-[8px] sm:text-base font-normal font-(family-name:Manrope)">
            Accept support. Start a membership. Setup a shop. It’s easier than
            you think.
          </h4>
        </div>
      </div>
    </div>
  );
};
