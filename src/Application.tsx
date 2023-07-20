import { FC } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";

export const Application: FC = () => {
  const home = <Home />;
  const about = <About />;

  return (
    <div>
      <nav>
        <Link data-testid="link-home" to="/">
          Home
        </Link>
        <Link to="/about">AboutApp</Link>
      </nav>
      <Routes>
        <Route path="/about" element={about} />
        <Route path="/" element={home} />
      </Routes>
    </div>
  );
};