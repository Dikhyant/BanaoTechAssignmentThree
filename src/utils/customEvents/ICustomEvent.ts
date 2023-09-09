export interface ICustomEvent {
    subsribe(callback: any);
    unsubscribe(callback: any);
    unsubscribeAll();
    emit(prop: any);
}