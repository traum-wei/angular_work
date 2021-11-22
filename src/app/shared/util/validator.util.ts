import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ValidatorUtil {

    public static includesAngularValidatorFn(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const val: string = control.value;

            if (val && val.includes('Angular')) {
                return null;
            }

            return { includesValidator: true };
        }
    }

}
