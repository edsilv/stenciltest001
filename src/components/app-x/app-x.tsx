import { Component, Prop} from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { KefaloniaLoader } from '../../kefalonia/kefaloniaLoader';
import { KefaloniaConnector, IModuleRPC } from '../../kefalonia/kefaloniaConnector';

@Component({
  tag: 'app-x',
  shadow: true
})
export class AppX implements IModuleRPC {

    /* Common to all Kefalonia modules */

    @Prop() match: MatchResults;

    @Prop() instanceID: string;

    private kefaloniaConnector: KefaloniaConnector;

    public doSomethingModule(thing: any)
    {
        /* Call site for the parent */
        console.log(thing);
    }

    /* Replace this with the shell connector */

    private initialise (componentInstance:string): void
    {
        console.log (componentInstance);
        var m =  KefaloniaLoader.Instance.registerModule(componentInstance, this);
        this.kefaloniaConnector = m;
    }

    normalize(name: string): string {
        if (name) {
          return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
        }
        return '';
      }
    

  render() {

    var c = "No Params";

   if (this.match && this.match.params.instanceid) 
   {     
        this.initialise(this.match.params.instanceid); 
        c = this.kefaloniaConnector.manifest.whatever;
    }

    else 
    {
        if (this.instanceID)
        {
            this.initialise(this.instanceID); 
            c = this.kefaloniaConnector.manifest.whatever;            
        }
    }



    return (
      <div >
        <p>
          This is Module app-x

          <p>
            This module instance is using {c}. 
          </p>
        </p>
      </div>
    );
  }
}
