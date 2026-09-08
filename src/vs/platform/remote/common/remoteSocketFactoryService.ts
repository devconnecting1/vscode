import { IRemoteAuthorityResolverService } from './remoteAuthorityResolver.js';
export const IRemoteSocketFactoryService = Symbol('IRemoteSocketFactoryService');
export interface IRemoteSocketFactoryService { register(_type: any, _factory: any): void; connect(_uri: any, _options: any, _connector: any): any; }
export class RemoteSocketFactoryService implements IRemoteSocketFactoryService { register() {} connect() { throw new Error('Remote not supported'); } }
