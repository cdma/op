import { ObjectUtil } from "ts-object-utils";

/***
 * You can create a new instance or inherit and override default methods
 * Allows access to data and size. Clone with rows creates a new data provider and let listview know where to calculate row layout from.
 */

const unit = 20
export abstract class BaseDataProvider {
    public rowHasChanged: (r1: any, r2: any) => boolean;

    // In JS context make sure stable id is a string
    public getStableId: (index: number) => string;
    private _firstIndexToProcess: number = 0;
    private _size: number = 0;
    private _data: any[] = [];
    private _hasStableIds = false;
    private _requiresDataChangeHandling = false;

    public startIndex: number = 0
    public endIndex: number = 0
    public hookBottom:  () => void;
    public hookTop: () => void;
    private lastFireBottom = Date.now()
    private lastFireTop = Date.now()
    public fireBottomEvent(index: number) {
        if (!this.durationLimit(this.lastFireBottom)) {
            return
        }
        const hit = this.fireBottomEventInternal(index, this)

        // const interval = setInterval(() => {
        //     const hit = this.fireBottomEventInternal(index, this)
        //     if (hit) {
        //         clearInterval(interval)
        //     }
        // }, 100)
        
    }
    public fireBottomEventInternal(index: number, that: BaseDataProvider): boolean {
            if (index > unit/2 && index + 3 >= that.endIndex) {
                console.log('fireBottomEvent: ', that.hookBottom, 
                ', index: ', index, ' ,endIndex: ', that.endIndex,
                ', start: ', that.startIndex)
                that.hookBottom()
                that.lastFireBottom = Date.now()
                return true
            } else {
                return false
            }
    }

    public fireTopEvent(index: number) {
        if (this.startIndex > 30 && this.startIndex + 5 > index && this.durationLimit(this.lastFireTop)) {
            console.log('fireTopEvent')
            this.hookTop()
            this.lastFireTop = Date.now()
        }
    }

    public durationLimit(lastTime: number): boolean {
        const diff = (Date.now() - lastTime) / 1000
        // console.log('durationLimit lastTime: ', lastTime, ', now: ', Date.now(), ', diff: ', diff)
        return diff > 2
    }
    

    constructor(rowHasChanged: (r1: any, r2: any) => boolean, getStableId?: (index: number) => string) {
        this.rowHasChanged = rowHasChanged;
        if (getStableId) {
            this.getStableId = getStableId;
            this._hasStableIds = true;
        } else {
            this.getStableId = (index) => index.toString();
        }
    }

    public abstract newInstance(rowHasChanged: (r1: any, r2: any) => boolean, getStableId?: (index: number) => string): BaseDataProvider;

    public getDataForIndex(index: number): any {
        this.fireBottomEvent(index)
        return this._data[index + this.startIndex];
    }

    public getAllData(): any[] {
        return this._data;
    }

    public getSize(): number {
        return this._size;
    }

    public hasStableIds(): boolean {
        return this._hasStableIds;
    }

    public requiresDataChangeHandling(): boolean {
        return this._requiresDataChangeHandling;
    }

    public getFirstIndexToProcessInternal(): number {
        return this._firstIndexToProcess;
    }

    //No need to override this one
    //If you already know the first row where rowHasChanged will be false pass it upfront to avoid loop
    public cloneWithRows(newData: any[], append: boolean, firstModifiedIndex?: number): DataProvider {
        const dp = this.newInstance(this.rowHasChanged, this._hasStableIds ? this.getStableId : undefined);
        dp.hookBottom = this.hookBottom
        dp.hookTop = this.hookTop
        dp.startIndex = this.startIndex
        dp.endIndex = this.endIndex
        dp.lastFireBottom = this.lastFireBottom
        dp.lastFireTop = this.lastFireTop

        const newSize = newData.length;
        const iterCount = Math.min(this._size, newSize);
        if (ObjectUtil.isNullOrUndefined(firstModifiedIndex)) {
            let i = 0;
            for (i = 0 + this.startIndex; i < iterCount; i++) {
                if (this.rowHasChanged(this._data[i], newData[i])) {
                    break;
                }
            }
            dp._firstIndexToProcess = i;
        } else {
            dp._firstIndexToProcess = Math.max(Math.min(firstModifiedIndex, this._data.length + this.startIndex), 0);
        }
        if (dp._firstIndexToProcess !== this._data.length + this.startIndex) {
            dp._requiresDataChangeHandling = true;
        }

        
        
        dp.endIndex = dp.startIndex + newData.length
        let originData = dp._data

        if (append && dp.endIndex-dp.startIndex > 2*unit) {
            dp.startIndex += unit
            originData = dp._data.slice(unit)
        }
        newData = originData.concat(newData)
        console.log('cloneWithRows endIndex: ', dp.endIndex,
                ', start: ', dp.startIndex, ', data: ', newData)

        dp._data = newData;
        dp._size = newSize;
        return dp;
    }
}

export default class DataProvider extends BaseDataProvider {
    public newInstance(rowHasChanged: (r1: any, r2: any) => boolean, getStableId?: ((index: number) => string) | undefined): BaseDataProvider {
        return new DataProvider(rowHasChanged, getStableId);
    }
}
