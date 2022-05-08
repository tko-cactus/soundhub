import "tailwindcss/tailwind.css";

export const Header = () => {
  return (
    <>
      <div
        id="NavBar"
        className="sticky top-0 z-30 bg-opacity-90 backdrop-blur navbar font-raleway font-semibold text-neutral-content"
      >
        <div className="flex-1 md:text-base text-xs">
          <ul className="hidden md:flex menu menu-horizontal p-0">
            {/* // 左側メニュー // スマホレイアウトのときはhidden */}
            Home
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 bg-opacity-0">
            {/* // 右側メニュー */}
            twitter
          </ul>
        </div>
      </div>
    </>
  );
};
