
export class KefaloniaModuleManifest{
    public instanceID: string;
    public backgroundImageUri: string;
    public whatever:string = "Whatever";  
}

export class ParentRPC
{
    remoteCall: (componentID:string, prms:string[])=>void;
}


export interface IModuleRPC
{
    doSomethingModule(thing: any):void;
}

export class KefaloniaConnector{
    
    /* Instance ID - used to index the collection of module instances */
    public instanceID: string;

    /* Configuration information specific to this module */
    public manifest:KefaloniaModuleManifest;

    /* Interface provided by the loader to allow the module to make 
    * calls on the parent application */
    public parentRPC: ParentRPC;

    public moduleRPC:IModuleRPC;
}