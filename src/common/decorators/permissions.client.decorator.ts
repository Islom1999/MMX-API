import { SetMetadata } from '@nestjs/common';

export const PermissionsClient = (...permissions: string[]) => {
    return SetMetadata('permissions_client', permissions)
};