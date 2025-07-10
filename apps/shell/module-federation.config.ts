import { ModuleFederationConfig } from '@nx/module-federation';
import { environment } from './src/environments/environment';

console.log('Module Federation configuration for shell:', environment.remotes);

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: environment.remotes,
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
