export interface IAddress { host: string; port: number; }
export interface IAddressProvider { getAddress(): Promise<IAddress>; }
export interface IConnectionOptions { commit?: string; quality?: string; addressProvider: IAddressProvider; remoteSocketFactoryService: any; signService: any; logService: any; ipcLogger: any; }
export interface ManagementPersistentConnection { updateGraceTime(graceTime: number): void; protocol: { sendDisconnect(): void; drain(): Promise<void>; onDidDispose: any; }; dispose(): void; }
export type PersistentConnectionEvent = any;
export interface RemoteAgentConnectionContext { remoteAuthority: string; }
export async function connectRemoteAgentManagement(_options: IConnectionOptions, _remoteAuthority: string, _connectionType: string): Promise<ManagementPersistentConnection> { throw new Error('Remote not supported'); }
export async function connectRemoteAgentTunnel(_options: IConnectionOptions, _remoteAuthority: string, _remoteAddress: IAddress): Promise<any> { throw new Error('Remote not supported'); }
