import { Component, State } from '@stencil/core';
//import { AppX } from '../app-x/app-x';



@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  private loaderSlot?:HTMLDivElement;

  private moduleList = [{module: "app-x", instanceID: "0"}, {module: "app-y", instanceID: "1"},{module: "app-x", instanceID: "2"},{module: "app-y", instanceID: "3"}]

  @State() selectValue: string;

constructor()
{
    this.navigate = this.navigate.bind(this);
}

  navigate(moduleName: string, moduleInstance: string){
    var appx = document.createElement(moduleName);
    appx["instanceID"] = moduleInstance;

    if (this.loaderSlot.childNodes.length > 0)
    {
      this.loaderSlot.replaceChild(appx, this.loaderSlot.childNodes[0]);
    } 
    else
    {
      this.loaderSlot.appendChild (appx);
    }
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.selectValue = event.target.value;
    var modInx = parseInt(this.selectValue);
    this.navigate(this.moduleList[modInx].module, this.moduleList[modInx].instanceID)
  }

  render() {

    this.selectValue = "0";
    return (

  
      <div>

 <select onInput={(event) => this.handleSelect(event)}>
          <option value="0" selected={this.selectValue === '0'}>Module X, instance 0</option>
          <option value="1" selected={this.selectValue === '1'}>Module Y, instance 1</option>
          <option value="2" selected={this.selectValue === '2'}>Module X, instance 2</option>
          <option value="3" selected={this.selectValue === '3'}>Module Y, instance 3</option>
        </select>

      <div ref={el =>{ this.loaderSlot = el as HTMLDivElement  }}></div>

    </div>
    );
  }
}
