export interface HalFormsDocument {
    _links?: {
        self: LinkObject
    },
    _templates: {
        default: Template
    }
}

interface LinkObject {
    href: string
}

interface Template {
    method: string,
    target?: string,
    contentType?: string,
    properties?: Property[]
}

interface Property {
    name: string,
    type?: string,
    readOnly?: boolean,
    prompt?: string,
    placeholder?: string
}