import { AsyncValidator, AbstractControl } from '@angular/forms';
import { TagService } from '../public/service/tag-service/tag.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UniqueTagValidator implements AsyncValidator{

    constructor(private tagService: TagService){}

    validate(control: AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> {
        const {value} = control;

        return this.tagService.checkUniqueTag(value).pipe(
            map(res => {
                if(res.available){
                    return null;
                }
            }),
            catchError(err => {
                if(err){
                    return of({tagExists: true})
                } else {
                    return of({noConnection: true});
                }
            })
        )
        
    }

}