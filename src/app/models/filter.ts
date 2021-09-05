export class Filter {
    public name?: string;
    public isActive?: boolean;

    constructor(name: string) {
        this.name = name;
        this.isActive = true;
    }
}