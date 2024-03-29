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
import Receipt from "./pages/Receipt";
import Help from "./pages/Help";
import SelectAppCard from "./components/SelectAppCard";

import style from './App.module.css';
import QrBar from "./pages/QrBar";

function App() {

  const [here, setHere] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [change, setChange] = useState(false);
  const [waitingNum, setWaitingNum] = useState(1);

  return (
    <>
      <div className={style.App}>
        <div className={style.kiosk}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Start
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
                />}/>
              </Route>
              <Route path="pay" element={<StandardLayout
                here={here}
                setHere={setHere}
              />}>
                <Route index element={<Card/>}/>
                <Route path="card" element={<Card/>}/>
                <Route path="appcard" element={<SelectAppCard/>}/>
                <Route path="qrBar" element={<QrBar/>}/>
              </Route>
              <Route path="receipt" element={<StandardLayout
                here={here}
                setHere={setHere}
              />}>
                <Route index element={<Receipt
                  here={here}
                  selectedItems={selectedItems}
                  waitingNum={waitingNum}
                  setWaitingNum={setWaitingNum}
                />}/>
              </Route>
              <Route path='help' element={<StandardLayout
                here={here}
                setHere={setHere}
              />}>
                  <Route index element={<Help
                    setSelectedItems={setSelectedItems}
                  />}>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
