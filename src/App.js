import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuLayout from "./layouts/MenuLayout";
import OrderLayout from "./layouts/OrderLayout";
import StandardLayout from "./layouts/StandardLayout";

import Start from "./pages/Start";
import BurgerMenus from "./pages/BurgerMenus";
import ChickenMenus from "./pages/ChickenMenus";
import SetMenus from "./pages/SetMenus";
import SideMenus from "./pages/SideMenus";
import DrinkMenus from "./pages/DrinkMenus";
import Card from "./pages/Card";
import AppCard from "./pages/AppCard";
import Receipt from "./pages/Receipt";
import Help from "./pages/Help";

function App() {

  const [here, setHere] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [change, setChange] = useState(false);
  const [waitingNum, setWaitingNum] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start
            here={here}
            setHere={setHere}
            setSelectedItems={setSelectedItems}
          />}>
          </Route>
          <Route path="menu" element={<MenuLayout
            here={here}
            setHere={setHere}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            change={change}
            setChange={setChange}
          />}>
            <Route index element={<BurgerMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
            <Route path="burgermenu" element={<BurgerMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
            <Route path="chickenmenu" element={<ChickenMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
            <Route path="setmenu" element={<SetMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
            <Route path="sidemenu" element={<SideMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
            <Route path="drinkmenu" element={<DrinkMenus
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
          </Route>
          <Route path="order" element={<OrderLayout
            here={here}
            setHere={setHere}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            change={change}
            setChange={setChange}
          />}>
            <Route index element={<OrderLayout
              here={here}
              setHere={setHere}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              change={change}
              setChange={setChange}
            />}/>
          </Route>
          <Route path="pay" element={<StandardLayout
            here={here}
            setHere={setHere}
          />}>
            <Route index element={<Card/>}/>
            <Route path="card" element={<Card/>}/>
            <Route path="appcard" element={<AppCard/>}/>
          </Route>
          <Route path="receipt" element={<StandardLayout
            here={here}
            setHere={setHere}
          />}>
            <Route index element={<Receipt
              here={here}
              setHere={setHere}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              waitingNum={waitingNum}
              setWaitingNum={setWaitingNum}
            />}/>
          </Route>
          <Route path="help" element={<Help
            setSelectedItems={setSelectedItems}
          />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
