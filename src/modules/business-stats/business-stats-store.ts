import { makeAutoObservable } from 'mobx';
import { IState, IStats, IWarehouse, IItem, IAdvanceItem, IStaff } from './model'

class BusinessStatsStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state: IState = {
        active: false,
        activeBlock: 0,
        activeTypeGraphics: 0,
        stats: null,
        statsOperationType: 0,
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
        staffEmployeesDate: 0,
        staffModalWindow: false,
        staffPrizeId: -1,
        staffPrizeAmount: 0
    }
    //============================   InsuranceClient Trigger   ============================

    setActive = (active: boolean) => this.state.active = active
    setWarehouse = (warehouse: IWarehouse) => this.state.warehouse = warehouse;

    // STATS
    setStats = (stats: IStats) => this.state.stats = stats;
    setActiveBlock = (num: number) => this.state.activeBlock = num;
    setActiveTypeGraphics = (num: number) => {
        this.state.activeTypeGraphics = num;
    }
    setBusinessStatus = (status: boolean) => {
        if (this.state.stats) this.state.stats.businessStatus = status;
    }
    setStatsOperationType = (type: number) => {
        this.state.statsOperationType = type;
    }
    changePlayerMoney = (money: number) => {
        if (this.state.stats) {
            this.state.stats.playerMoney = money;
        }
    }
    changeBusinessMoney = (money: number) => {
        if (this.state.stats) {
            this.state.stats.businessBalance = money;
        }
    }
    // WAREHOUSE
    setWarehouseOrderAmount = (amount: number) => {
        this.state.orderAmount = amount;
    } // кол-во товара на заказ
    setWarehouseResultPrice = () => {
        let sum = 0;
        this.state.oredersId.map((order) => {
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
        if (type === 0) this.state.products.irlItems[id].price = price;
        if (type === 1) this.state.products.items[id].price = price;
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
    changeStaffModalWindow = (id: number) => {
        this.state.staffModalWindow = !this.state.staffModalWindow;
        this.state.staffPrizeId = id;
        this.changePrizeAmount(0);
    }
    staffHoof = (id: number) => {
        this.state.staff.staffList[0].splice(id, 1);
        this.state.staff.staffList[1].splice(id, 1);
    }
    changePrizeAmount = (prize: number) => {
        this.state.staffPrizeAmount = prize;
    }

    //============================   Front Trigger   =============================
    // STATS
    changeBusinessStatus = () => {
        const status = this.state?.stats?.businessStatus;
        // @ts-ignore
        window.frontTrigger(`business-stats.advance-change_status`, status);
    }
    statsWithdrawMoney = (money: number) => {
        // @ts-ignore
        window.frontTrigger(`business-stats.stats-withdraw`, money);
    }
    statsDepositMoney = (money: number) => {
        // @ts-ignore
        window.frontTrigger(`business-stats.stats-deposit`, money);
    }
    // WAREHOUSE
    buyProducts = () => {
        const amount = this.state.orderAmount;
        const ids = this.state.oredersId;
        // @ts-ignore
        window.frontTrigger(`business-stats.warehouse-buy_items`, ids, amount);
    }
    //PRODUCTS
    saveProductData = () => {
        const id = this.state.products.activeBlock;
        const { type } = this.state.products;
        const changes = type === 0 ? this.state.products.items[id] :
            this.state.products.irlItems[id];
        // @ts-ignore
        window.frontTrigger(`business-stats.products-changes`, id, type, changes);
    }
    kickStaff = (id: number) => { // уволить сотрудника
        // @ts-ignore
        window.frontTrigger(`business-stats.staff-kick`, id);
    }
    // ADVANCE
    buyAdvance = (advanceId: number) => { // купить улучшение
        // @ts-ignore
        window.frontTrigger(`business-stats.advance-buy`, advanceId);
    }
    // STAFF
    staffPrize = (id: number) => {
        // @ts-ignore
        window.frontTrigger(`business-stats.staff-prize`,
            id,
            this.state.staffPrizeAmount);
    }
}
const store = new BusinessStatsStore()

export { store }