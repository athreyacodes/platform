import { ModuleFederationConfig } from '@nx/module-federation';

export type RemoteWithUrl = [remoteName: string, remoteUrl: string];

const remotesDevelopment: RemoteWithUrl[] = [
  ['portfolio', 'http://localhost:4201/remoteEntry.mjs'],
];
const remotesProduction: RemoteWithUrl[] = [
  ['portfolio', 'https://portfolio-230b7.web.app/remoteEntry.mjs'],
];


const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: process.env['NX_TASK_TARGET_CONFIGURATION'] === 'production'
    ? remotesProduction
    : remotesDevelopment,
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
