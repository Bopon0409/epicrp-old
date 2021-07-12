import { makeAutoObservable } from 'mobx';
import { IState, IData } from './models';

class DownloadConfirmationScreenStore {
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  state: IState = {
    show: false,
    data: {
      typeofCargo: -1
    }
  };

  //============================   Client Trigger   ============================
  setShow = (status: boolean) => this.state.show = status;

  setData = (data: IData) => {
    if (data.typeofCargo !== undefined) this.state.data.typeofCargo = data.typeofCargo;
  }

  //============================   Front Trigger   =============================

  downloadConfirm = () => {
    this.state.show = false;
    // @ts-ignore
    window.frontTrigger(`download-confirmation-screen.accept`);
}
}

const store = new DownloadConfirmationScreenStore();
export { store };
