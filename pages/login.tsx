import { NextPage } from "next";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const Login: NextPage = () => {
  return (
    <div>
      <p>Login Page</p>
      <div className="container mx-auto card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <button
            className="btn"
            style={{ color: "white", backgroundColor: "#1DB954" }}
          >
            <div className="pr-4">
              <Image src="/spotify_logo_white.png" width={30} height={30} />
            </div>
            Continue with Spotify
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
