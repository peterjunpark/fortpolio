import { DarkModeToggle } from "./dark-mode/toggle";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between text-4xl">
      <h1>Peter Jun Park</h1>
      <DarkModeToggle />
    </header>
  );
};
