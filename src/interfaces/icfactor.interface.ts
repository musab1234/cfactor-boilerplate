export interface ICFactor{
    width?: number;
    height?: number;
    canvas: string;
    folderURL: string;
    state?: Phaser.StateManager;
    // tslint:disable-next-line: no-any
    thisRef?: any;
    // tslint:disable-next-line: no-any
    callback: (event: string, score?: number, thisRef?: any) => any;
}