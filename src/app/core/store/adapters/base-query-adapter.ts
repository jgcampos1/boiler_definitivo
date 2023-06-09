import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { type DomainException } from '~/app/core/domain/exceptions/domain-exception';

const logError = (error: any) => {
  // eslint-disable-next-line no-console
  process.env.NODE_ENV !== 'production' && console.error(error);
};

export const baseQueryAdapter: BaseQueryFn<
  {
    service: ServiceCommand;
    params?: any;
  },
  any,
  DomainException
> = async ({ service, params }) => {
  try {
    const result = await service.execute(params);
    if (result.isError()) {
      logError(result.value);
      return {
        error: {
          type: result.value.type,
          message: result.value.message,
          error: result.value.error,
          code: result.value.code
        } as DomainException
      };
    }
    return { data: result.value };
  } catch (error: any) {
    logError(error);

    return {
      error: {
        type: error.name,
        message: error.message,
        error: error.stack
      }
    };
  }
};
