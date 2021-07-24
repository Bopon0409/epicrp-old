import { observer } from "mobx-react-lite";
import "./donat.scss";
import { donatStore } from "./donat-store";

import { MainPage } from "./components/main-page";
import { DonateWarehouse } from "./components/warehouse-page";
import { LuckyCase } from "./components/lucky-case-page";
import { PrizePage } from "./components/prize-page";

export const Donat = observer(() => {
  switch (donatStore.page) {
    case 0:
      return <MainPage />;
    case 1:
      return <LuckyCase />;
    case 2:
      return <PrizePage />
    case 4:
      return <DonateWarehouse />;
  }
  return null;
});