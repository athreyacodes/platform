import { ModuleFederationConfig } from '@nx/module-federation';
import { getRemoteList } from './remotes';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: getRemoteList(),
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
