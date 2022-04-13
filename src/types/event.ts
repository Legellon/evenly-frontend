export type EventID = number
export type EventCoordinates = { lng: number, lat: number }
export type CloseEventAction = () => void
export type OpenEventAction = () => void
export type ClickEventAction = () => void
export type CallbackEventAction = () => void

export type ToggleEventsPanelAction = () => void;

export interface EventData {
    creator_id: EventID,

    description: string,
    title: string,

    date: string,
    time: string,

    image: typeof import(".jpeg") | string,
}