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
    readOnly: boolean,
    prompt: string,
    placeholder?: string,
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