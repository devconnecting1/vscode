import { Event } from '../../../base/common/event.js';

export const enum RemoteConnectionType { WebSocket = 1, Token = 2 }
export const enum RemoteAuthorityResolverErrorCode { Timeout = 1, NotAvailable = 2, Disabled = 3 }
export class RemoteAuthorityResolverError extends Error { constructor(message: string, code?: RemoteAuthorityResolverErrorCode, downgrade?: boolean) { super(message); } }
export interface IRemoteConnectionData { connectionToken: string | undefined; }
export interface TunnelDescription { remoteAddress: { host: string; port: number }; localAddress: string; public: boolean; }
export interface ManagedRemoteConnection { }
export interface IRemoteAuthorityResolverService {
	resolveAuthority(authority: string): Promise<any>;
	getCanonicalURI(uri: any): any;
	_clearResolvedAuthorityCache(): void;
	onDidChangeConnectionData: Event<void>;
	_setAuthorityConnectionToken(remoteAuthority: string, connectionToken: string | undefined): void;
}
export const IRemoteAuthorityResolverService = Symbol('IRemoteAuthorityResolverService');
