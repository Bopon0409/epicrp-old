import { makeAutoObservable }  from 'mobx';
import { IState, IStats, IWarehouse, IItem, IAdvanceItem, IStaff }                             from './model'

class BusinessStatsStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state: IState = {
        active: false,
        activeBlock: 2,
        activeTypeGraphics: 0,
        stats: null,
        warehouse: {
            itemsInStock: [],
            stockWorkload: {
                max: 0,
                now: 0
            },
            purchaseItems: [],
            fuelEquivalent: [],
        },
        orderAmount: 0,
        oredersId: [],
        resultPrice: 0,
        products: {
            items: [],
            irlItems: [],
            activeBlock: -1,
            type: 0
        },
        advance: {
            items: [],
            activeBlock: -1
        },
        staff: {
            staffList: [[], []],
            earnedTypes: [[0, 0], [0, 0]]
        },
        staffStatsDate: 0,
        staffEmployeesDate: 0
    }
//============================   Client Trigger   ============================

    setActive = (active: boolean) => this.state.active = active
    setWarehouse = (warehouse: IWarehouse) => this.state.warehouse = warehouse;

// STATS
    setStats = (stats: IStats) => this.state.stats = stats;
    setActiveBlock = (num: number) => this.state.activeBlock = num;
    setActiveTypeGraphics = (num: number) => {
        this.state.activeTypeGraphics = num;
    }
// WAREHOUSE
    setWarehouseOrderAmount = (amount: number) => {
        this.state.orderAmount = amount;
    } // кол-во товара на заказ
    setWarehouseResultPrice = () => {
        let sum = 0;
        this.state.oredersId.map((order, i) => {
            const { price } = this.state.warehouse.purchaseItems[order];
            const { orderAmount } = this.state;
            return sum += price * orderAmount;
        })
        this.state.resultPrice = sum;
    } // высчитать итоговую сумму
    setWarehouseItems = (amount: number) => {
        this.state.warehouse.stockWorkload.now = amount;
    } // обновить кол-во товара на складе
    setOrdersList = (id: number) => {
        const CHECK = this.state.oredersId.indexOf(id);
        CHECK === -1 ? this.state.oredersId.push(id) : 
        store.state.oredersId.splice(CHECK, 1);
        this.setWarehouseResultPrice();
    } // добавить/удалить выбранный номер товара из массива

    warehouseClearData = () => {
        this.state.oredersId = [];
        this.state.orderAmount = 0;
        this.state.resultPrice = 0;
    }

// PRODUCTS
    setProductsItems = (products: IItem[]) => 
    this.state.products.items = products;
    setProductsIrlItems = (products: IItem[]) => 
    this.state.products.irlItems = products;
    setProductsActiveBlock = (num: number) => // смена блока по нажатию
    this.state.products.activeBlock = num;
    setProductStatus = (id: number, status: boolean) => {
        this.state.products.type === 0 ?
        this.state.products.items[id].status = status :
        this.state.products.irlItems[id].status = status
    }
    setProductPrice = (type: number, id: number, price: number) => {
        if(type === 0) this.state.products.items[id].price = price;
        if(type === 1) this.state.products.irlItems[id].price = price;
    }
    setProductsType = (type: number) => {
        this.state.products.type = type;
        this.state.products.activeBlock = -1;
    }

// ADVANCE 
    setAdvance = (advance: IAdvanceItem[]) => this.state.advance.items = advance; 
    // смена блока по нажатию
    setAdvanceActiveBlock = (num: number) => {
        this.state.advance.activeBlock = num;
    }
    setAdvanceStatus = (id: number, status: boolean) => {
        this.state.advance.items[id].status = status;
    }
// STAFF
    setStaff = (staff: IStaff) => this.state.staff = staff;
    setStaffStatsDate = (type: number) => {
        this.state.staffStatsDate = type;
    }
    setStaffEmployeesDate = (type: number) => {
        this.state.staffEmployeesDate = type;
    }
    staffPrize = (id: number) => {
        // выдать премнию, нужно модальное окно
    }
    staffHoof = (id: number) => {
        this.state.staff.staffList[0].splice(id, 1);
        this.state.staff.staffList[1].splice(id, 1);
    }

//============================   Front Trigger   =============================
    //PRODUCTS
    saveProductData = (id: number) => {
        const { type } = this.state.products;
        const changes = type === 0 ? this.state.products.items[id] : 
        this.state.products.irlItems[id];   
        // @ts-ignore
        window.frontTrigger(`business-stats.products-changes`, id, type, changes );
        // отправляет ID изменнёного предмета, и его новые параметры
    }
    kickStaff = (id: number) => { // уволить сотрудника
        // @ts-ignore
        window.frontTrigger(`business-stats.staff-kick`, id);
    }
    // ADVANCE
    buyAdvance = (advanceId: number) => { // купить улучшение
        // @ts-ignore
        window.frontTrigger(`business-stats.advance-buy`, advanceId );
    }
}
const store = new BusinessStatsStore()

export { store }