import { ModuleFederationConfig } from '@nx/module-federation';

type RemoteWithUrl = [remoteName: string, remoteUrl: string];
const isProd = () => process.env['NX_TASK_TARGET_CONFIGURATION'] === 'production';

const getPortfolioRemote = (): string | RemoteWithUrl => {
  const name = 'portfolio';
  const url = 'https://portfolio-230b7.web.app/remoteEntry.mjs';
  
  return isProd() ? ([name, url] as RemoteWithUrl) : name;
};

const config: ModuleFederationConfig = {
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [getPortfolioRemote()],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
