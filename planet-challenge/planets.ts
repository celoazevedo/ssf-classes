export class planet {
    width: number;
    color: string;

    constructor(
        width: number,
        color: string
    ){
        this.width = width;
        this.color = color;
    }
}

export let krypton = new planet (33000, "red");
export let omicronPersei8 = new planet (86000, "blue");
export let nemesis = new planet (70000, "green");

