declare module '@basd/registry' {
  type AnyFunction = (...args: any[]) => any;
  type AnyObject = Record<string, any>;

  interface Config {
    classes?: Record<string, AnyFunction>;
  }

  class Registry {
    constructor(config: Config);

    classes: Record<string, AnyFunction>;

    createInstance(name: string, args: any[], baseClass: AnyFunction): any;
    isValidClass(targetClass: AnyFunction | null, baseClass: AnyFunction | null): boolean;
    isValidInstance(instance: any, baseClass: AnyFunction | null): boolean;
    ingest(source: { constructor: { classes: AnyObject }, opts: { classes: AnyObject } }): void;
    setWith(name: string, targetClass: AnyFunction, baseClass: AnyFunction, override?: boolean): void;
    set(name: string, targetClass: AnyFunction, override?: boolean): void;
    setMany(classes: Record<string, AnyFunction>, override?: boolean): void;
    get(name: string, defaultValue?: any): any;
    has(name: string): boolean;

    static get(config: Config | Registry): Registry;
  }

  export = Registry;
}
