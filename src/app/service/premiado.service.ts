import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
import { from } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import { Gateway } from '../helper/gateway';
import { Result } from '../helper/result';


@Injectable()
export class PremiadoService {
    private path = '/premiado';

    constructor(
        private gateway: Gateway
    ) { }

    public save(premiado: any): Observable<any> {
        let result;

        result = this.gateway.post<any>(`${this.path}save`, premiado);

        return result.map(r => {
            if (!r.error) {
                return r.payload;
            }

            throw new Error(r.error);
        });
    }

    public fetchAllBySchedule(environment: number, filterScheduleData: boolean): Observable<any[]> {
        const result = this.gateway.get<any[]>(`${this.path}GetAllBySchedule/?idEnvironment=${environment}&filterScheduleData=${filterScheduleData}`);

        return result.map(
            r => {
                if (!r.error) {
                    return r.payload;
                }

                throw new Error(r.error);
            }
        );
    }

    public fetchAll(): Observable<any[]> {
        const result = this.gateway.get<any[]>(`${this.path}`);
        return result.map(
            r => {
                if (!r.error) {
                    return r.payload;
                }

                throw new Error(r.error);
            }
        );
    }

    public connectivityAll(typeConnectivity, manufacturerId, environmentId, functionId): Observable<any[]> {
        const result = this.gateway.get<any[]>(`${this.path}connectivity/?typeConnectivity=${typeConnectivity}&manufacturerId=${manufacturerId}&environmentId=${environmentId}&functionId=${functionId}`);
        return result.map(
            r => {
                if (!r.error) {
                    return r.payload;
                }

                throw new Error(r.error);
            }
        );
    }


    public findById(id): Observable<any> {
        const result = this.gateway.get<any>(this.path + 'GetById/' + id);

        return result.map(
            r => {
                if (!r.error) {
                    return r.payload;
                }

                throw new Error(r.error);
            }
        );
    }


    public enqueueById(id): Observable<any> {
        const result = this.gateway.get<any>(this.path + 'enqueue/' + id);

        return result.map(
            r => {
                if (!r.error) {
                    return r.payload;
                }

                throw new Error(r.error);
            }
        );
    }

    public delete(id): Observable<any> {
        const result = this.gateway.delete<any>(this.path + id);
        return result.map(r => {
            if (!r.error) {
                return r.payload;
            }

            throw new Error(r.error);
        });
    }

}
