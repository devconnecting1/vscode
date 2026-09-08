import { Event } from '../../../base/common/event.js';
import { URI } from '../../../base/common/uri.js';

export interface IRemoteTunnelService { openTunnel(): Promise<any>; closeTunnel(): Promise<void>; getTunnels(): Promise<any[]>; }
export interface ITunnelService {}
export const ITunnelService = Symbol('ITunnelService');
export const ISharedTunnelsService = Symbol('ISharedTunnelsService');
export interface ISharedTunnelsService {}
export class RemoteTunnel { tunnelRemoteHost: string = ''; tunnelRemotePort: number = 0; localAddress: string = ''; dispose(): void {} }
export class DisposableTunnel { constructor(_options: any, _localAddress: string, _onDispose?: () => void) {} dispose(): void {} }
export enum TunnelProtocol { Http = 'http', Https = 'https' }
export enum TunnelPrivacyId { Private = 'private', Open = 'open' }
export function extractLocalHostUriMetaDataForPortMapping(): any { return undefined; }
export function extractQueryLocalHostUriMetaDataForPortMapping(): any { return undefined; }
export function isPortPrivileged(_port: number, _host: string, _os: any, _release: string): boolean { return false; }
export function isLocalhost(host: string): boolean { return host === 'localhost' || host === '127.0.0.1'; }
export function isAllInterfaces(host: string): boolean { return host === '0.0.0.0'; }
export interface ITunnelProvider { makeTunnel(uri: URI, address: string, port: number): Promise<any>; }
export function isTunnelProvider(x: any): x is ITunnelProvider { return x && typeof x.makeTunnel === 'function'; }

export abstract class AbstractTunnelService {
	constructor(_logService: any, _configurationService: any) {}
	canTunnel(uri: URI): boolean { return uri.scheme === 'http' || uri.scheme === 'https'; }
	protected getTunnelFromMap(_remoteHost: string, _remotePort: number): any { return undefined; }
	protected addTunnelToMap(_remoteHost: string, _remotePort: number, tunnel: any): void {}
	protected createWithProvider(_tunnelProvider: ITunnelProvider, _remoteHost: string, _remotePort: number, _localPort: number | undefined, _elevateIfNeeded: boolean, _privacy?: string, _protocol?: string): Promise<RemoteTunnel | string | undefined> | undefined { return undefined; }
	abstract isPortPrivileged(port: number): boolean;
	protected abstract retainOrCreateTunnel(...args: any[]): any;
	defaultTunnelHost: string = 'localhost';
	openTunnel(_addressProvider: any, _remoteHost: string, _remotePort: number, _localHost?: string, _localPort?: number, _elevateIfNeeded?: boolean, _privacy?: string, _protocol?: string): Promise<RemoteTunnel | string | undefined> { return Promise.resolve(undefined); }
}
