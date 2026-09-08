export interface RemoteSocketHalf { }
export class ManagedSocket { }
export async function connectManagedSocket(_socket: any, _options: any, _token: any): Promise<ManagedSocket> { return new ManagedSocket(); }
