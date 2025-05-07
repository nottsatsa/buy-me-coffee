interface types {
  noName: boolean;
  username: string;
}

export const Header = ({ noName, username }: types) => {
  return (
    <div>
      <h3 className="text-[#09090B] text-2xl font-semibold ">
        {noName ? 'Create Your Account' : `Welcome, ${username}`}
      </h3>
      <h6 className="text-[#71717A] text-sm font-normal">
        {noName
          ? 'Choose a username for your page'
          : 'Connect email and set a password'}
      </h6>
    </div>
  );
};
