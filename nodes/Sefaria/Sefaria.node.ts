import {INodeType, INodeTypeDescription, INodeProperties} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

const baseUrlProperty: INodeProperties = {
    displayName: 'Base URL',
    name: 'baseURL',
    type: 'string',
    default: 'https://www.sefaria.org',
    description: 'Override the default Sefaria API URL (e.g., for using sefaria.org.il)',
    required: false,
};

export class Sefaria implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Sefaria',
        name: 'sefaria',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Sefaria API',
        defaults: {
            name: 'Sefaria',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'sefariaApi',
                required: false,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: '={{$parameter["baseURL"] || "https://www.sefaria.org"}}',
        },
        properties: [baseUrlProperty, ...properties],
    };
}
