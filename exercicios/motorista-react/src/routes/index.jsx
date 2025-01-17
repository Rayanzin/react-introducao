import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const Patchs = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Patchs;
