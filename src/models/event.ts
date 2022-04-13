import { EventID, EventCoordinates, EventData, CallbackEventAction, CloseEventAction, OpenEventAction, ClickEventAction } from "../types/event";

type EventConstructor = { id: EventID, coordinates: EventCoordinates, content: EventData }

export class Event {
    public id: EventID;

    public coordinates: EventCoordinates;
    public content: EventData;

    public isSelected: boolean = false;

    constructor({ id, coordinates, content }: EventConstructor) {
        this.id = id;
        this.coordinates = coordinates;
        this.content = content;
    }

    public assignCloseCallback = (callback: CallbackEventAction) => {
        this.close = () => callback();
    }

    public assignOpenCallback = (callback: CallbackEventAction) => {
        this.open = () => callback();
    }

    public close: CloseEventAction = () => { 
        throw new Error("Close event functionality isn't assigned.");
    }

    public open: OpenEventAction = () => { 
        throw new Error("Open event functionality isn't assigned.");
    }

    public clickAction: ClickEventAction = () => {
        if (this.isSelected) return this.close();
        return this.open();
    }
}

export type SelectedEvent = Event | null;