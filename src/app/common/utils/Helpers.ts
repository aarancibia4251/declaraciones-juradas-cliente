import {FormControl, FormGroup} from '@angular/forms';

export class Helpers {
  public static validaAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(
      field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({onlySelf: true});
          control.markAsTouched({onlySelf: true});
          if (control.errors) {
            control.errors.status = 'error';
          }
        } else if (control instanceof FormGroup) {
          Helpers.validaAllFormFields(control);
        }
      }
    );
  }

  public static getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
