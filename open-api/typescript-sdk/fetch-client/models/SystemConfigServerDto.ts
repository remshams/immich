/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SystemConfigServerDto
 */
export interface SystemConfigServerDto {
    /**
     * 
     * @type {string}
     * @memberof SystemConfigServerDto
     */
    externalDomain: string;
    /**
     * 
     * @type {string}
     * @memberof SystemConfigServerDto
     */
    loginPageMessage: string;
}

/**
 * Check if a given object implements the SystemConfigServerDto interface.
 */
export function instanceOfSystemConfigServerDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "externalDomain" in value;
    isInstance = isInstance && "loginPageMessage" in value;

    return isInstance;
}

export function SystemConfigServerDtoFromJSON(json: any): SystemConfigServerDto {
    return SystemConfigServerDtoFromJSONTyped(json, false);
}

export function SystemConfigServerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemConfigServerDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalDomain': json['externalDomain'],
        'loginPageMessage': json['loginPageMessage'],
    };
}

export function SystemConfigServerDtoToJSON(value?: SystemConfigServerDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalDomain': value.externalDomain,
        'loginPageMessage': value.loginPageMessage,
    };
}
