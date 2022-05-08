import Image from "next/image";
import { VFC } from "react";

type Props = {
  logoSrcUrl: string;
  buttonColor: string;
  onClick: () => void;
};

export const PrimaryLoginButton: VFC<Props> = (props) => {
  const { logoSrcUrl, buttonColor, onClick } = props;
  return (
    <button
      className="btn"
      style={{ color: "white", backgroundColor: buttonColor }}
      onClick={onClick}
    >
      <div className="pr-4">
        <Image src={logoSrcUrl} width={30} height={30} />
      </div>
      Continue with Spotify
    </button>
  );
};
