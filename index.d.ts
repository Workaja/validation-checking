declare module 'validation-testing' {
    export function isNull(variable: any): boolean;
    export function isUndefined(variable: any): boolean;
    export function isObjectEmpty(obj: any): boolean;
    export function isUndefinedOrNull(variable: any): boolean;
    export function isObjectNullOrEmpty(obj: any): boolean;
    export function isObjectUndefinedOrNullOrEmpty()(obj: any): boolean;
    export function isArrayEmpty(arr: any): boolean;
    export function isAnyElementUndefinedOrNull(arr: any): boolean;
    export function isAllElementsNonUndefinedAndNull(arr: any): boolean;
    export function isAllElementsUndefinedOrNull(arr: any): boolean;
    export function isNumber(variable: any): boolean;
    export function isString(variable: any): boolean;
    export function isBoolean(variable: any): boolean;
    export function isArray(variable: any): boolean;
    export function isObject(variable: any): boolean;
}