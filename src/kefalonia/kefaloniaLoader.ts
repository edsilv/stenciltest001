import { KefaloniaConnector, ParentRPC, IModuleRPC, KefaloniaModuleManifest } from "./kefaloniaConnector";


export class KefaloniaLoader {

    private static _instance: KefaloniaLoader;

    private constructor()
    {
        /* Driver - simulate a collection of connector objects that
        * would have been loaded from a factory method
        */
        var xm = new KefaloniaModuleManifest();
        xm.whatever = "Instance 0 config";
        xm.instanceID = "0";
        this.moduleConfigs.push(xm);

        var xm = new KefaloniaModuleManifest();
        xm.whatever = "Instance 1 config";
        xm.instanceID = "1";
        this.moduleConfigs.push(xm);

        var xm = new KefaloniaModuleManifest();
        xm.whatever = "Instance 2 config";
        xm.instanceID = "2";
        this.moduleConfigs.push(xm);

        var xm = new KefaloniaModuleManifest();
        xm.whatever = "Instance 3 config";
        xm.instanceID = "3";
        this.moduleConfigs.push(xm);
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    /* Replace this with a Dictionary */
    private moduleConfigs:Array<KefaloniaModuleManifest>  = [];

    public registerModule(componentInstance: string, moduleRPC:IModuleRPC): KefaloniaConnector
    {    
        var nxm:KefaloniaConnector = new KefaloniaConnector();
        nxm.moduleRPC = moduleRPC;
        var bf = new ParentRPC();
        bf.remoteCall = this.remoteCall;
        nxm.parentRPC = bf;

        this.moduleConfigs.forEach((val:KefaloniaModuleManifest)=>
        {
            if (val.instanceID == componentInstance)
            {
                nxm.manifest = val;
            }
        });

        if (nxm.manifest == null)
        {
            var a = new KefaloniaModuleManifest();
            a.whatever = "Not x";
            a.instanceID = "default";
            nxm.manifest = a;
        }

        return nxm;
    }


    public remoteCall (componentID:string, prms:string[]):void
    {
        console.log(componentID, prms);
    }
}