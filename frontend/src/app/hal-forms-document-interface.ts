export interface HalFormsDocument {
    _templates: {
        default: {
            method: string,
            properties: {
                name: string,
                type: string,
                required: boolean,
                readOnly: boolean,
                prompt: string,
                placeholder: string,
                min: number,
                max: number,
                step: number,
                minLength: number,
                maxLength: number,
                options: {
                    inline: {
                        prompt: any,
                        value: any
                    }[]
                }
            }[]
        }
    }
}