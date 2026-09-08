import { IRemoteAuthorityResolverService } from '../common/remoteAuthorityResolver.js';
export class RemoteAuthorityResolverService implements IRemoteAuthorityResolverService {
	private readonly _onDidChangeConnectionData = { fire() {}, event: (() => {}) as any };
	readonly onDidChangeConnectionData = this._onDidChangeConnectionData.event;
	resolveAuthority() { return Promise.resolve(undefined as any); }
	getCanonicalURI(uri: any) { return uri; }
	_clearResolvedAuthorityCache() {}
	_setAuthorityConnectionToken(_remoteAuthority: string, _connectionToken: string | undefined) {}
}
