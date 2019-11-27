export namespace Rapid {
  export interface API {
    all(): Promise<any>;
    find(id: ModelId): Promise<any>;
    findBy(key: ModelId, value: ModelId): Promise<any>;
    get(): Promise<any>;
    id(id: ModelId): Chainable;
    collection: Chainable;
    model: Chainable;
  }

  /**
   * An alias for methods that are chainable
   */
  export type Chainable = API;

  export interface Context {
    api: API;
    config: Config;
    currentRoute: Routes;
    internals: {
      makeRequest(params): Promise<any>;
      resetRequestData(): void;
      resetURLParams(): void;
    };
    requestData: {
      params: object;
      options: object;
    };
    urlParams: ModelId[];
  }

  export interface Config {
    afterRequest?(response): void;
    allowedRequestTypes?: RequestType[];
    baseURL?: string;
    beforeRequest?(type: RequestType, url: string): void;
    caseSensitive?: boolean;
    debug?: boolean;
    defaultRoute?: Routes;
    extension?: string;
    onError?(error: () => void): void;
    globalParameters?: object;
    // http?: HttpInstance;
    httpConfig?: object;
    modelName: string;
    methods?: {
      create?: string;
      update?: string;
      destroy?: string;
      restore?: string;
    };
    primaryKey?: string;
    routeDelimeter?: string;
    routes?: {
      any?: string;
      model?: string;
      collection?: string;
    };
    suffixes?: {
      create?: string;
      update?: string;
      destroy?: string;
      restore?: string;
    };
    trailingSlash?: boolean;
  }

  export type ModelId = string | number;

  export enum Routes {
    Model = 'model',
    Collection = 'collection',
  }

  export enum RequestType {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Patch = 'patch',
    Head = 'head',
    Delete = 'delete',
  }
}
