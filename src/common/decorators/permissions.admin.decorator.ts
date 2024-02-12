import { SetMetadata } from '@nestjs/common';

export const PermissionsAdmin = (...permissions: string[]) => {
    return SetMetadata('permissions_admin', permissions)
};