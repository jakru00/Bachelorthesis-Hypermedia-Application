export interface HalFormsDocument {
    _templates: {
        default: Template
    }
}

interface Template {
    method: string,
    properties: Property[]
}

interface Property {
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
    options?: Options
}

interface Options {
    inline: Inline[],
    selectedValues?: string[]
}

interface Inline {
    prompt: any,
    value: any
}