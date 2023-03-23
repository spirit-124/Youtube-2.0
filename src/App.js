import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Box} from "@mui/material"
import { Navbar, ChanneDetails, VideoDetails, Feed, SearchFeed } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element= {<Feed/>}/>
            <Route path="/videos/:id" element={<VideoDetails/>} />
            <Route path="/Channel/:id" element={<ChanneDetails/>} />
            <Route path="/Search/:searchTerm" element={<SearchFeed/>} />
            {/* <Route path="/videos/:id" element={<VideoDeatails/>} /> */}


           
        </Routes>
    </Box>

    </BrowserRouter>
  )
}

export default App