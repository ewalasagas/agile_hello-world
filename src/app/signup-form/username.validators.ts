import { AbstractControl, ValidationErrors } from "@angular/forms";

//to access outside - add "static" in front of function nad call 
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) 
            return {cannotContainSpace: true}
        return null;
    }

    //checking async operation - does username exist elsewhere?
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'elaine')
                    resolve({ shouldBeUnique : true});
                else resolve(null);
            }, 2000);        
        });
    }
}