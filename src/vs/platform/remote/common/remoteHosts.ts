export function getRemoteAuthority(uri: any): string | undefined { return undefined; }
export function getRemoteName(authority: string): string { return ''; }
export function getRemoteServerRootPath(remoteAuthority: string): string { return ''; }
export function isLoopbackHost(host: string): boolean { return false; }
export function parseAuthorityWithPort(authority: string): { host: string; port: number } { return { host: '', port: 0 }; }
