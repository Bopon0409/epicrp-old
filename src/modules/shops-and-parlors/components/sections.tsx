import { observer } from "mobx-react-lite";
import { store } from "../shops-and-parlors-store";
import { SectionImages } from "../constants";
import cn from "classnames";

export const Sections = observer(() => {
  const { businessType } = store.state.data;
  const { section } = store.state.actives;
  return (
    <div className="sections">
      {store.state.data.itemsList.map((item, id) => {
        if (id < SectionImages[businessType].length) {
          return (
            <div
              className={cn("sections-block", {
                "sections-block--active": id === section,
              })}
              key={id}
              onClick={() => store.setActiveSection(id)}
            >
              <div className="sections-block-img">
                <img src={SectionImages[businessType][id].image} alt="" />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
});
