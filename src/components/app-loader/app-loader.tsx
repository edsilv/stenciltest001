import { Component } from '@stencil/core';


@Component({
  tag: 'app-loader',
  styleUrl: 'app-loader.css',
  shadow: true
})

export class AppLoader {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>

          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
            
              <stencil-route url='/x/:instanceid?' component='app-x' exact={true} />
              <stencil-route url='/y/:instanceid?' component='app-y' exact={true} />

              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
