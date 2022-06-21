export class Work {
    public heading: string;
    public imageUrl: string;
    public description: string;
    public workUrl?: string;
    public details: string;
    
    constructor (heading: string, imageUrl: string, description: string, workUrl: string, details: string){
        this.heading = heading;
        this.imageUrl = imageUrl;
        this.description = description;
        this.workUrl = workUrl;
        this.details = details;
    }
}
