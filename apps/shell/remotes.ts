export type RemoteWithUrl = [remoteName: string, remoteUrl: string];

const remotes = {
  portfolio: 'https://portfolio-230b7.web.app/remoteEntry.mjs',
};

const remotesDevelopment: string[] = Object.keys(remotes);
const remotesProduction: RemoteWithUrl[] = Object.keys(remotes).map(
  (key) => [key, remotes[key]] as RemoteWithUrl
);

export const getRemoteList = () =>
  process.env['NX_TASK_TARGET_CONFIGURATION'] === 'production'
    ? remotesProduction
    : remotesDevelopment;
