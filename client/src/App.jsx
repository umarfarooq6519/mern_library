import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";





function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")} p={2}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
