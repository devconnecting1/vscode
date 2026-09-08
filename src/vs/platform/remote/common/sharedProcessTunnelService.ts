export const ipcSharedProcessTunnelChannelName = 'sharedProcessTunnel';
export interface ISharedProcessTunnelService {
	createTunnel(): Promise<{ id: string }>;
	startTunnel(remoteAuthority: string, id: string, remoteHost: string, remotePort: number, localHost: string, localPort: number | undefined, elevateIfNeeded: boolean | undefined): Promise<{ tunnelLocalPort: number; localAddress: string }>;
	destroyTunnel(id: string): Promise<void>;
	setAddress(id: string, address: any): void;
}
export const ISharedProcessTunnelService = Symbol('ISharedProcessTunnelService');
