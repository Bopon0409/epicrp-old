import { observer } from "mobx-react-lite";
import { donatStore } from "../donat-store";
import EpicLogoSVG from "../../../img/EpicLogo.svg";

export const PrizePage = observer(() => {
  const { PrizeMove } = donatStore;
  const { coins } = donatStore.state;
  
  return(
    <div className='donat-prize-page'>
      <div className='donat-prize-page-content'>
        <div className="upper-block">
          <span>Кейс "Удачи"</span>
          <div className="donat_and_warehouse">
            <div className="donat__warehouse">Мои выйгрыши</div>
            <div className="donat__balance">
              <span>Ваш баланс</span>
              <div>
                <span>{coins}</span>
                <img src={EpicLogoSVG} alt="" />
              </div>
            </div>
          </div>
        </div>

        <span className='donat-prize_compliment'>Поздравляем!</span>

        <div className='donat-prize_item'>
          <div className='donat-prize_item-bg' />
          <div className="donat-prize_item-img"></div>

          <div className='donat-prize_item-about'>
            <div className='donat-prize_item-about__your-prize'>Ваш выйгрыш</div>
            <span className="donat-prize_item-about__item-name">Элемент одежды. “Кеды LGBT”</span>
            <span className="donat-prize_item-about__item-comment">Яркий и красочный элемент одежды, который сможет выделить Вас из окружающей толпы людей. Придаст Вам непередаваемый шарм и эстетику человека, понимающего в моде.</span>
          </div>
        </div>

        <div className="donat-prize_buttons">
          <div className='donat-prize_buttons__sell'
          onClick={() => PrizeMove('sell')}>Продать</div>
          <div className="donat-prize_buttons__openAgain">Открыть ещё</div>
        </div>
      </div>
    </div>
  )
})