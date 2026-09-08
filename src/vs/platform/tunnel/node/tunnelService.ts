import { ITunnelService, ISharedTunnelsService } from '../common/tunnel.js';
export class TunnelService implements ITunnelService {}
export class SharedTunnelsService implements ISharedTunnelsService {}
export class NodeRemoteTunnel { constructor(_remoteHost: string, _remotePort: number) {} }
